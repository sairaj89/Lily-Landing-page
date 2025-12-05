import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,        // required for Tailwind v4
  },
};

export default nextConfig;
