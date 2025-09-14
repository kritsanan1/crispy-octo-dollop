/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {}
  },
  // Configure for Replit environment
  // Allow all hosts since Replit shows the app in an iframe proxy
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
  // Disable strict mode for development
  reactStrictMode: false,
  // Enable optimizations
  poweredByHeader: false,
  // Configure for development server to accept all hosts
  devIndicators: {
    buildActivity: false,
  },
}

module.exports = nextConfig