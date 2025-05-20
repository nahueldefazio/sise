// Utility function to handle image paths for GitHub Pages deployment
export function getImagePath(path) {
  // Check if we're in GitHub Pages environment
  const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true';
  
  // If we're in GitHub Pages, prepend the base path (/sise)
  // Only prepend if the path starts with a slash and doesn't already include the base path
  if (isGitHubPages && path.startsWith('/') && !path.startsWith('/sise/')) {
    return `/sise${path}`;
  }
  
  // Otherwise, return the original path
  return path;
}