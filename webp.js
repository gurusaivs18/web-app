 
import sharp from "sharp";
import fs from "fs";
import path from "path";

const assetsDir = path.join(process.cwd(), "src/assets");

async function convertImages(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    // If it's a folder, go inside it
    if (stat.isDirectory()) {
      await convertImages(fullPath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();

    // Convert PNG, JPG and JPEG
    if ([".png", ".jpg", ".jpeg"].includes(ext)) {
      const output = fullPath.replace(/\.(png|jpg|jpeg)$/i, ".webp");

      try {
        await sharp(fullPath)
          .webp({ quality: 85 })
          .toFile(output);

        console.log(`Converted: ${fullPath} → ${output}`);
      } catch (error) {
        console.error(`Failed: ${fullPath}`);
        console.error(error.message);
      }
    }
  }
}

convertImages(assetsDir)
  .then(() => {
    console.log("\n✅ All images converted to WebP.");
  })
  .catch((error) => {
    console.error("❌ Conversion failed:");
    console.error(error);
  });
 
