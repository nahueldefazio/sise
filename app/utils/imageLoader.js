// Utility function to handle image paths for both local development and GitHub Pages
export function getImagePath(src) {
  // Check if we're in a GitHub Pages environment
  const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true';
  
  // If we're on GitHub Pages and the path is absolute, prepend the base path
  if (isGitHubPages && src.startsWith('/')) {
    return `/sise${src}`;
  }
  
  // Otherwise, return the original path
  return src;
}