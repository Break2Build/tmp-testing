import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Only use assetPrefix for static assets, not basePath for routing
  assetPrefix: process.env.NODE_ENV === 'production' ? '/tmp-testing' : '',
  // Remove basePath to avoid issues with static assets
  // basePath: process.env.NODE_ENV === 'production' ? '/tmp-testing' : '',
};

export default nextConfig;
