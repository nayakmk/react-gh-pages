import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  },
  transpilePackages: [],
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
