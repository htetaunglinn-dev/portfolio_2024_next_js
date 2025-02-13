import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
