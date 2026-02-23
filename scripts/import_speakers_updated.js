/**
 * import_speakers_updated.js
 *
 * Reads Speaker_Data_updated.xlsx, downloads speaker images from Google Drive,
 * saves them to public/speakers/, and writes src/lib/speakers-data.ts.
 *
 * Run: node scripts/import_speakers_updated.js
 */

const xlsx = require("xlsx");
const path = require("path");
const fs = require("fs");
const https = require("https");
const http = require("http");

// ─── Config ──────────────────────────────────────────────────────────────────
const XLSX_PATH = path.join(
  __dirname,
  "../src/assets/data/Speaker_Data_updated .xlsx",
);
const OUTPUT_TS = path.join(__dirname, "../src/lib/speakers-data.ts");
const IMAGE_OUT_DIR = path.join(__dirname, "../public/speakers");
// ─────────────────────────────────────────────────────────────────────────────

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .substring(0, 50);
}

function roleFromBio(bio) {
  if (!bio) return "Speaker";
  const match = bio.match(/^([^.\n|,;]+)/);
  const candidate = match ? match[1].trim() : "";
  return candidate.length > 0 && candidate.length <= 80 ? candidate : "Speaker";
}

/**
 * Convert `https://drive.google.com/open?id=FILE_ID`
 * to `https://drive.google.com/uc?export=download&id=FILE_ID`
 */
function gdriveDirect(url) {
  const match = url.match(/id=([\w-]+)/);
  if (!match) return null;
  return `https://drive.google.com/uc?export=download&id=${match[1]}`;
}

/**
 * Download a URL to a local file path, following redirects.
 * Returns a promise that resolves to the final content-type.
 */
function download(url, dest) {
  return new Promise((resolve, reject) => {
    const follow = (redirectUrl) => {
      const mod = redirectUrl.startsWith("https") ? https : http;
      const req = mod.get(
        redirectUrl,
        { headers: { "User-Agent": "Mozilla/5.0" } },
        (res) => {
          if (
            res.statusCode >= 300 &&
            res.statusCode < 400 &&
            res.headers.location
          ) {
            return follow(res.headers.location);
          }
          if (res.statusCode !== 200) {
            return reject(
              new Error(`HTTP ${res.statusCode} for ${redirectUrl}`),
            );
          }
          const ct = res.headers["content-type"] || "";
          const out = fs.createWriteStream(dest);
          res.pipe(out);
          out.on("finish", () => out.close(() => resolve(ct)));
          out.on("error", reject);
        },
      );
      req.on("error", reject);
    };
    follow(url);
  });
}

function guessExt(contentType, fallback = "jpg") {
  if (contentType.includes("png")) return "png";
  if (contentType.includes("gif")) return "gif";
  if (contentType.includes("webp")) return "webp";
  if (contentType.includes("jpeg") || contentType.includes("jpg")) return "jpg";
  return fallback;
}

function dedupeByEmail(rows) {
  const seen = new Map();
  const out = [];
  for (const r of rows) {
    const key = (r.email || r.name || "").toLowerCase().trim();
    if (!key || seen.has(key)) continue;
    seen.set(key, true);
    out.push(r);
  }
  return out;
}

async function main() {
  if (!fs.existsSync(XLSX_PATH)) {
    console.error("❌  File not found:", XLSX_PATH);
    process.exit(1);
  }

  fs.mkdirSync(IMAGE_OUT_DIR, { recursive: true });

  const wb = xlsx.readFile(XLSX_PATH, { cellDates: true });
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const rawRows = xlsx.utils.sheet_to_json(sheet, { defval: "" });

  console.log(`📋  ${rawRows.length} total rows read from xlsx\n`);

  // Normalise keys (xlsx column names may have trailing spaces)
  const rows = rawRows.map((r) => {
    const norm = {};
    for (const [k, v] of Object.entries(r)) norm[k.trim()] = v;
    return norm;
  });

  const speakers = [];

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const name = (row["Full Name"] || row["Name"] || "").trim();
    const email = (row["Email"] || "").trim();
    const bio = (row["Bio"] || "").trim();
    const imageRaw = (row["Image"] || "").trim();

    if (!name) {
      console.warn(`  ⚠️  Row ${i + 1}: empty name, skipping`);
      continue;
    }

    const slug = slugify(name) || `speaker-${i + 1}`;
    const id = `sp-${slug}`;

    // Download image
    let imagePath = "/speakers/placeholder.jpg";
    const directUrl = gdriveDirect(imageRaw);

    if (directUrl) {
      // Use a temp file first so we can rename with correct extension
      const tmpDest = path.join(IMAGE_OUT_DIR, `${slug}.tmp`);
      try {
        const ct = await download(directUrl, tmpDest);
        const ext = guessExt(ct);
        const finalName = `${slug}.${ext}`;
        const finalDest = path.join(IMAGE_OUT_DIR, finalName);
        fs.renameSync(tmpDest, finalDest);
        imagePath = `/speakers/${finalName}`;
        console.log(`  ✅  ${name}  →  /speakers/${finalName}`);
      } catch (err) {
        if (fs.existsSync(tmpDest)) fs.unlinkSync(tmpDest);
        console.warn(`  ⚠️  ${name}: image download failed — ${err.message}`);
      }
    } else {
      console.warn(`  ⚠️  ${name}: no valid Google Drive URL`);
    }

    const role = roleFromBio(bio);

    speakers.push({
      id,
      name,
      email,
      role,
      image: imagePath,
      bio,
      category: "All",
      socials: {},
    });
  }

  // Deduplicate (same email or same name submitted twice)
  const deduped = dedupeByEmail(speakers);
  console.log(
    `\n✨  ${deduped.length} unique speakers after dedup (was ${speakers.length})\n`,
  );

  // Write TypeScript
  const tsContent = `// AUTO-GENERATED — run \`node scripts/import_speakers_updated.js\` to regenerate.
import { Speaker } from "@/types";

export const speakers: Speaker[] = ${JSON.stringify(deduped, null, 2)};
`;

  fs.writeFileSync(OUTPUT_TS, tsContent, "utf-8");
  console.log(`\n📄  Written: ${OUTPUT_TS}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
