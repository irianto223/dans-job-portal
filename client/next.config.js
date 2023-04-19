/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_API_BASE_URL: 'http://127.0.0.1:9000',
  }
}

module.exports = nextConfig
