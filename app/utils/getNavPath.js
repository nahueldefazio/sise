// Utility function to handle navigation paths for GitHub Pages deployment
export function getNavPath(path) {
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

// Utility function to handle API URLs for GitHub Pages deployment
export function getApiUrl(endpoint) {
  // In production/GitHub Pages, use relative URLs
  if (process.env.NODE_ENV === 'production') {
    // Remove leading slash if present
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.substring(1) : endpoint;
    return `/${cleanEndpoint}`;
  }
  
  // In development, use localhost
  return `http://localhost:3001/${endpoint.startsWith('/') ? endpoint.substring(1) : endpoint}`;
}