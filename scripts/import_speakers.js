const xlsx = require("xlsx");
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "../src/assets/data/Speaker_Data.xlsx");

try {
  if (!fs.existsSync(filePath)) {
    console.error(`File not found at ${filePath}`);
    process.exit(1);
  }

  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);

  const speakers = data.map((row, index) => {
    return {
      id: `s${index + 100}`, // Avoid collision with existing ids
      name: row["Full Name"] || row["Name"],
      email: row["Email"],
      bio: row["Bio"],
      role: row["Role"] || "Speaker", // Default role if missing
      image: row["Image"], // Will handle this in the main file
      category: "All",
      socials: {}, // Empty for now as xlsx doesn't seem to have social columns mentioned
    };
  });

  console.log(JSON.stringify(speakers, null, 2));
} catch (error) {
  console.error("Error parsing xlsx:", error);
}
