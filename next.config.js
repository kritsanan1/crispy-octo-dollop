/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure Turbopack (stable in Next.js 15)
  turbopack: {},
  
  // Configure headers for Replit environment
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' *.replit.dev *.repl.co;",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Configure allowed dev origins for Replit environment
  allowedDevOrigins: ['*.replit.dev', '*.repl.co'],
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Security and optimization settings
  poweredByHeader: false,
  
  // Configure experimental features if needed
  experimental: {
    // Enable modern bundling optimizations
    optimizePackageImports: ['@clerk/nextjs'],
  },
}

module.exports = nextConfig