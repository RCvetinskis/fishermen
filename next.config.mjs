/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ebayimg.sandbox.ebay.com"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ebayimg.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.ebayimg.sandbox.ebay.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
