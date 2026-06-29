import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_FOLDERS = ["assets/Partners", "assets/jsbGroupWebsite"];

// keep only webp
const KEEP = ".webp";

// delete these formats
const DELETE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".avif", ".bmp", ".tiff"];

function getAllFiles(dir) {
  let results = [];

  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(getAllFiles(fullPath));
    } else {
      results.push(fullPath);
    }
  });

  return results;
}

function deleteOldImages(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (DELETE_EXTENSIONS.includes(ext)) {
    fs.unlinkSync(filePath);
    console.log(`🗑 Deleted: ${filePath}`);
  }
}

function run() {
  for (const folder of TARGET_FOLDERS) {
    const fullFolder = path.join(__dirname, folder);

    if (!fs.existsSync(fullFolder)) {
      console.warn(`Folder not found: ${fullFolder}`);
      continue;
    }

    const files = getAllFiles(fullFolder);

    for (const file of files) {
      deleteOldImages(file);
    }
  }

  console.log("🎉 Cleanup completed (only .webp kept)");
}

run();
