import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ChaniceGrant',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
