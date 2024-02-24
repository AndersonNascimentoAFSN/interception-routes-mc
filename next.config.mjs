/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.tcdn.com.br',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
      },
    ],
  },
};

export default nextConfig;
