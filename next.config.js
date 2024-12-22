/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  cleanDistDir: true,
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
  distDir: '.chattr-app',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
