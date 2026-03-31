/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // 👈 Domínio das fotos da sua API
      },
    ],
  },
};

export default nextConfig;