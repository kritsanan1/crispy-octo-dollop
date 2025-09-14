/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimizations
  compress: true,
  swcMinify: true,
  
  // Security headers for production
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.clerk.accounts.dev *.clerk.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: *.clerk.com; connect-src 'self' *.clerk.accounts.dev *.clerk.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self';",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ];
  },
  
  // Enable React strict mode for better error detection
  reactStrictMode: true,
  
  // Security and optimization settings
  poweredByHeader: false,
  
  // Configure experimental features
  experimental: {
    // Enable modern bundling optimizations
    optimizePackageImports: ['@clerk/nextjs'],
  },
  
  // Output configuration for deployment
  output: 'standalone',
}

module.exports = nextConfig