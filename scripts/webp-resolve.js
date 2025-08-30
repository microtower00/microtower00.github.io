const fs = require("fs");
const path = require("path");

/**
 * Resolve function: takes a PNG/JPG path and returns the .webp path if it exists
 * @param {string} imagePath - Path to PNG/JPG image (can be relative or absolute)
 * @returns {string|null} - Path to .webp file if it exists, null otherwise
 */
function resolveWebp(imagePath) {
  if (!imagePath) return null;

  // Get the filename without extension
  const filename = path.basename(imagePath, path.extname(imagePath));

  // Check if .webp version exists in static/images/webp
  const webpPath = `/images/webp/${filename}.webp`;
  const fullWebpPath = path.join("static/images/webp", `${filename}.webp`);

  if (fs.existsSync(fullWebpPath)) {
    return webpPath;
  }

  return null;
}

/**
 * Resolve function with fallback - returns .webp if exists, otherwise original path
 * @param {string} imagePath - Path to PNG/JPG image
 * @returns {string} - Path to .webp file if exists, otherwise original path
 */
function resolveWebpWithFallback(imagePath) {
  const webpPath = resolveWebp(imagePath);
  return webpPath || imagePath;
}

// Example usage
if (require.main === module) {
  const testPaths = [
    "src/images/skitourenguru.png",
    "static/images/mocked-proj/portfolio-code.png",
    "nonexistent-image.jpg",
  ];

  console.log("🧪 Testing resolve function:\n");

  testPaths.forEach((testPath) => {
    const webpPath = resolveWebp(testPath);
    const fallbackPath = resolveWebpWithFallback(testPath);

    console.log(`Input: ${testPath}`);
    console.log(`WebP:  ${webpPath || "❌ Not found"}`);
    console.log(`Fallback: ${fallbackPath}`);
    console.log("---");
  });
}

module.exports = {
  resolveWebp,
  resolveWebpWithFallback,
};
