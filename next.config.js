const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  generateBuildId: async () => {
    return process.env.BUILD_ID || 'development'
  },
  experimental: {
    optimizePackageImports: ['@icons-pack/react-simple-icons'],
    appDir: true,
  },
  transpilePackages: [],
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
