/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'resizer.otstatic.com',
    //     port: '',
    //     pathname: '/v2/photos/wide-huge/*',
    //   },
    // ],
    images: {
      domains: ['resizer.otstatic.com'],
    },
  },
};

module.exports = nextConfig;
