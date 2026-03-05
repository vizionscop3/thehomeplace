import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/front-porch", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
