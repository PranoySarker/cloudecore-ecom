/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://admin.refabry.com/storage/product/**")],
  },
};

export default nextConfig;
