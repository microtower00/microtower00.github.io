#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// Simple configuration - just the directories you want to process
const DIRECTORIES = ["src/images", "static/images/mocked-proj"];

const OUTPUT_DIR = "static/images/webp";

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`Created: ${OUTPUT_DIR}`);
}

// Convert image to .webp
async function convertToWebp(inputPath) {
  try {
    const filename = path.basename(inputPath, path.extname(inputPath));
    const outputPath = path.join(OUTPUT_DIR, `${filename}.webp`);

    await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);

    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(outputPath).size;
    const savings = (((originalSize - webpSize) / originalSize) * 100).toFixed(
      1
    );

    console.log(
      `✅ ${filename}: ${(originalSize / 1024).toFixed(1)}KB → ${(
        webpSize / 1024
      ).toFixed(1)}KB (${savings}% smaller)`
    );
    return true;
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}: ${error.message}`);
    return false;
  }
}

// Main function
async function main() {
  console.log("🖼️  Generating .webp alternatives...\n");

  let total = 0;
  let success = 0;

  for (const dir of DIRECTORIES) {
    if (!fs.existsSync(dir)) continue;

    const files = fs
      .readdirSync(dir)
      .filter((file) => /\.(png|jpg|jpeg)$/i.test(file))
      .map((file) => path.join(dir, file));

    for (const file of files) {
      total++;
      if (await convertToWebp(file)) success++;
    }
  }

  console.log(`\n🎉 Done! ${success}/${total} images converted`);
  console.log(`📁 Output: ${OUTPUT_DIR}`);
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { convertToWebp };
