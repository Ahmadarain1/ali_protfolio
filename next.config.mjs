/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
}

export default nextConfig
