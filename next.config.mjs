import { createMDX } from "fumadocs-mdx/next";
const withMDX = createMDX();

const apiUrl = "http://43.139.161.167:8000";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  rewrites: async () => [
    {
      source: "/style-editor.html",
      destination: "/style-editor",
    },
    {
      source: "/api/v1/:path*",
      destination: `${apiUrl}/api/v1/:path*`,
    },
    {
      source: "/api/admin/:path*",
      destination: `${apiUrl}/api/admin/:path*`,
    },
    {
      source: "/api/lifedev/:path*",
      destination: `${apiUrl}/api/lifedev/:path*`,
    },
    {
      source: "/api/nice/:path*",
      destination: `${apiUrl}/api/nice/:path*`,
    },
    {
      source: "/api/pay/:path*",
      destination: `${apiUrl}/api/pay/:path*`,
    },
    {
      source: "/api/mp/:path*",
      destination: `${apiUrl}/api/mp/:path*`,
    },
  ],
};

export default withMDX(nextConfig);
