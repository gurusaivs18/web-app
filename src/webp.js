import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Change this filename only
const INPUT_FILE = path.join(
  __dirname,
  "../src/assets/Brand-Logos/vkT.jpeg",
);

async function convertToWebp() {
  if (!fs.existsSync(INPUT_FILE)) {
    console.error(`File not found: ${INPUT_FILE}`);
    return;
  }

  const outputPath = INPUT_FILE.replace(path.extname(INPUT_FILE), ".webp");

  try {
    await sharp(INPUT_FILE).webp({ quality: 80 }).toFile(outputPath);

    // Delete old image after conversion
    fs.unlinkSync(INPUT_FILE);

    console.log(`✓ Converted: ${INPUT_FILE}`);
    console.log(`✓ Deleted old file`);
    console.log(`✓ Created: ${outputPath}`);
  } catch (err) {
    console.error("✗ Failed:", err.message);
  }
}

convertToWebp();
