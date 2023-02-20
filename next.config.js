/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["source.unsplash.com", "img.youtube.com"],
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL || "",
  },
};

module.exports = nextConfig;
