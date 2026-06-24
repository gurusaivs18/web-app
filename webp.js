import sharp from "sharp";
import fs from "fs";
import path from "path";

const logosDir = path.join(process.cwd(), "src/assets/Brand-Logos");

async function convertImages(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await convertImages(fullPath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();

    if ([".png", ".jpg", ".jpeg"].includes(ext)) {
      const output = fullPath.replace(ext, ".webp");

      await sharp(fullPath)
        .webp({ quality: 85 })
        .toFile(output);

      console.log(`Converted: ${file}`);
    }
  }
}

convertImages(logosDir)
  .then(() => console.log("Done"))
  .catch(console.error);