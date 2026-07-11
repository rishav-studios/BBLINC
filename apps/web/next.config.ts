import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@bbl/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "**.imimg.com",
      },
    ],
  },
}

export default nextConfig
