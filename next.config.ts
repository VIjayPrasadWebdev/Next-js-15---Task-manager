import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "github.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "gravatar.com",
    ],
  },
};

export default nextConfig;
