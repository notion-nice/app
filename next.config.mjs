import { createMDX } from "fumadocs-mdx/next";
const withMDX = createMDX();

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
      source: "/api/nice/:path*",
      destination: "https://notion-nice.com/api/nice/:path*",
    },
  ],
};

export default withMDX(nextConfig);
