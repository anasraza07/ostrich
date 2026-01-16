import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: "theostrich.pk"
    }]
  }
};

export default nextConfig;
