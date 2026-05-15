import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputFolder = "./src/assets";
const outputFolder = "./webp";

// Create output folder
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Recursive function
function convertImages(folder) {
  const files = fs.readdirSync(folder);

  files.forEach((file) => {
    const filePath = path.join(folder, file);
    const stat = fs.statSync(filePath);

    // If folder → scan again
    if (stat.isDirectory()) {
      convertImages(filePath);
    } else {
      const ext = path.extname(file).toLowerCase();

      if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
        const outputFileName = path.basename(file, ext) + ".webp";

        const outputPath = path.join(outputFolder, outputFileName);

        sharp(filePath, {
          limitInputPixels: false,
        })
          .webp({ quality: 80 })
          .toFile(outputPath)
          .then(() => {
            console.log(`${file} -> ${outputFileName}`);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  });
}

convertImages(inputFolder);
