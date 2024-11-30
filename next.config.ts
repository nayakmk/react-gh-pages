import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
  // Ensure public assets are copied to the output directory
  distDir: 'dist',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;
