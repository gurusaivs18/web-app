// webp.js
// npm install sharp

import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Folder path
const folderPath = path.join(__dirname, "assets", "Brand-Logos");

async function convertImages() {
  try {
    // Check folder exists
    if (!fs.existsSync(folderPath)) {
      console.log("Folder not found:");
      console.log(folderPath);
      return;
    }

    const files = fs.readdirSync(folderPath);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      const baseName = path.basename(file, ext);

      // Only convert jpg/jpeg/png
      if (![".jpg", ".jpeg", ".png"].includes(ext)) {
        continue;
      }

      const inputPath = path.join(folderPath, file);
      const outputPath = path.join(folderPath, `${baseName}.webp`);

      // Skip existing webp
      if (fs.existsSync(outputPath)) {
        console.log(`Skipping ${file} → ${baseName}.webp already exists`);
        continue;
      }

      try {
        const image = sharp(inputPath, {
          limitInputPixels: false,
        });

        const metadata = await image.metadata();

        // Resize extremely large images
        if (metadata.width > 16000 || metadata.height > 16000) {
          image.resize({
            width: 16000,
            height: 16000,
            fit: "inside",
            withoutEnlargement: true,
          });
        }

        await image
          .webp({
            quality: 90,
          })
          .toFile(outputPath);

        console.log(`Converted: ${file} → ${baseName}.webp`);
      } catch (err) {
        console.log(`Skipped ${file}: ${err.message}`);
      }
    }

    console.log("Done!");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

convertImages();
