/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_STRAPI_PROTOCOL || "https",
        hostname: process.env.NEXT_PUBLIC_STRAPI_HOSTNAME,
        port: process.env.NEXT_PUBLIC_STRAPI_PORT || "",
        pathname: "/uploads/**/*",
      },
      {
        protocol: "http",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
