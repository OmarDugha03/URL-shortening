/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
  
      },
      {
        protocol: "https",
        hostname: "*avatars.githubusercontent.com",
  
      },
    ],
  },
};

module.exports = nextConfig