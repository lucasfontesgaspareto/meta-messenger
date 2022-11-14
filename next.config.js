/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'encrypted-tbn3.gstatic.com']
  },
  experimental: {
    appDir: true
  }
}
