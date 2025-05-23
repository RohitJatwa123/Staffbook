/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true, // This will help with static exports if needed
  },
  // Enable static exports if you're using static hosting
  output: 'export',
}

module.exports = nextConfig 