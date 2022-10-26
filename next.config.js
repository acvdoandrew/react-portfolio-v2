/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'cdn.jsdelivr.net']
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
