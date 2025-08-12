/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  images: {
    unoptimized: true,   // ❌ turn off the default image loader
  },
};

export default nextConfig;
