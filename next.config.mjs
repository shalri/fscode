/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
   basePath: '/fscode',
  assetPrefix: '/fscode',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
