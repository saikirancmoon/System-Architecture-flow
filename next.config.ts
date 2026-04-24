/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Allow access from your network (mobile / other devices)
  allowedDevOrigins: ["10.30.30.121"],

};

module.exports = nextConfig;