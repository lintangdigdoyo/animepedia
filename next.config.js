/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.youtube.com", "cdn.myanimelist.net"],
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL || "",
  },
};

module.exports = nextConfig;
