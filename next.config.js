/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports only if you don't need API routes or server components
  // output: 'export',

  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    unoptimized: false,
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
