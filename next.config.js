/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure Turbopack (stable in Next.js 15)
  turbopack: {},
  
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
  
  // Allow cross-origin requests for Replit environment
  allowedDevOrigins: ['*.replit.dev', '*.repl.co'],
  
  // Disable strict mode for development
  reactStrictMode: false,
  // Enable optimizations
  poweredByHeader: false,
}

module.exports = nextConfig