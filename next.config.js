/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    host: 'business.towninmedia.com',
    port: 80,
  }
}

module.exports = nextConfig
