
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '/web',
  basePath: '/web',
  images: { unoptimized: true }
}

export default nextConfig;
