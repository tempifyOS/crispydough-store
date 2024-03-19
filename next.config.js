/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   images: {
    domains: ["res.cloudinary.com"],
   },
}

if (typeof module === 'object') {
  module.exports = nextConfig;
}