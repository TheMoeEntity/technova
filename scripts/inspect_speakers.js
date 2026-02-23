/**
 * inspect_speakers.js  — just dumps the first few rows to understand column names & image format
 */
const xlsx = require("xlsx");
const path = require("path");

const XLSX_PATH = path.join(
  __dirname,
  "../src/assets/data/Speaker_Data_updated .xlsx",
);

const wb = xlsx.readFile(XLSX_PATH, { cellDates: true, dense: false });
const sheetName = wb.SheetNames[0];
const sheet = wb.Sheets[sheetName];

const rows = xlsx.utils.sheet_to_json(sheet, { defval: "" });

console.log("Columns:", Object.keys(rows[0] || {}));
console.log("\nFirst 3 rows:");
rows.slice(0, 3).forEach((r, i) => {
  console.log(`\n--- Row ${i + 1} ---`);
  for (const [k, v] of Object.entries(r)) {
    const val = typeof v === "string" ? v.substring(0, 120) : v;
    console.log(`  ${k}: ${val}`);
  }
});

// Check for images attached at sheet level
console.log("\n!images entries:", (sheet["!images"] || []).length);
console.log("workbook media:", (wb.Custprops || {}).m, wb.props || {});
