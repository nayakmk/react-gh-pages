import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  generateBuildId: async () => {
    return process.env.BUILD_ID || 'development'
  },
  publicRuntimeConfig: {
    staticFolder: '/src/public',
  },
  dir: {
    public: 'src/public',
  },
};

export default nextConfig;
