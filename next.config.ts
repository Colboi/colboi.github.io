import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/colboi.github.io' : '',
  assetPrefix: isProd ? '/colboi.github.io/' : '',
};

export default nextConfig;
