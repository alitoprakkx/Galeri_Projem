/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
    unoptimized: process.env.NEXT_IMAGE_UNOPTIMIZED === '1'
  }
};

export default nextConfig;
