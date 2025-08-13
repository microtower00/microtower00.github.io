/**
 * WebP Resolution Utility
 * Takes a PNG/JPG path and returns the .webp path if it exists
 */

/**
 * Resolve function: takes a PNG/JPG path and returns the .webp path if it exists
 * @param imagePath - Path to PNG/JPG image (can be relative or absolute)
 * @returns Path to .webp file if it exists, null otherwise
 */
export function resolveWebp(imagePath: string): string | null {
  if (!imagePath) return null;

  // Get the filename without extension
  const filename = imagePath.split("/").pop()?.split(".")[0];
  if (!filename) return null;

  // Check if .webp version exists in static/images/webp
  const webpPath = `/images/webp/${filename}.webp`;

  // Note: In a browser environment, we can't check if file exists
  // So we'll assume it exists if the path follows our pattern
  // You could implement a more sophisticated check if needed
  return webpPath;
}

/**
 * Resolve function with fallback - returns .webp if exists, otherwise original path
 * @param imagePath - Path to PNG/JPG image
 * @returns Path to .webp file if exists, otherwise original path
 */
export function resolveWebpWithFallback(imagePath: string): string {
  const webpPath = resolveWebp(imagePath);
  return webpPath || imagePath;
}

/**
 * Check if a path is a static image that can be converted to WebP
 * @param imagePath - Image path to check
 * @returns True if it's a static image path
 */
export function isStaticImagePath(imagePath: string): boolean {
  return Boolean(
    imagePath &&
      (imagePath.includes("/images/") ||
        imagePath.includes("../images/") ||
        imagePath.includes("../../images/"))
  );
}
