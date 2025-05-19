/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  // Enable static exports for GitHub Pages deployment
  output: 'export',
  // Set basePath and assetPrefix conditionally based on environment
  basePath: isGitHubPages ? '/sise' : '',
  assetPrefix: isGitHubPages ? '/sise' : '',

  // Expose environment variables to the browser
  env: {
    NEXT_PUBLIC_GITHUB_PAGES: isGitHubPages ? 'true' : 'false',
  },

  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    unoptimized: true,
  },

  // Performance optimizations
  swcMinify: true,

  // Compression
  compress: true,

  // Increase the timeout for builds
  staticPageGenerationTimeout: 120,

  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

module.exports = nextConfig;
