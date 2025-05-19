/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for GitHub Pages deployment
  output: 'export',
  // Set basePath to match the repository name for GitHub Pages
  basePath: '/sise',
  // Set assetPrefix to match basePath for GitHub Pages
  assetPrefix: '/sise',

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
