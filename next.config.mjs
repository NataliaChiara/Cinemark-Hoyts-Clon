/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "static.cinemarkhoyts.com.ar",
      },
    ],
  },
};

export default nextConfig;
