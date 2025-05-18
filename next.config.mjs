import { createMDX } from "fumadocs-mdx/next";
const withMDX = createMDX();

const isDev = process.env.NODE_ENV === "development";

const apiUrl = isDev ? "http://43.139.161.167:8000" : "http://10.1.24.16:8000";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  redirects: async () => [
    {
      source: "/notion-nice-converter-manual",
      destination: "/docs/c0228378-9dc6-446a-84dd-0e85223ad92d",
      permanent: true,
    },
  ],
  rewrites: async () => [
    {
      source: "/style-editor.html",
      destination: "/style-editor",
    },
    {
      source: "/api/v1/:path*",
      destination: `${apiUrl}/v1/:path*`,
    },
    {
      source: "/api/admin/:path*",
      destination: `${apiUrl}/admin/:path*`,
    },
    {
      source: "/api/lifedev/:path*",
      destination: `${apiUrl}/lifedev/:path*`,
    },
    {
      source: "/api/nice/:path*",
      destination: `${apiUrl}/nice/:path*`,
    },
    {
      source: "/api/pay/:path*",
      destination: `${apiUrl}/pay/:path*`,
    },
    {
      source: "/api/mp/:path*",
      destination: `${apiUrl}/mp/:path*`,
    },
  ],
};

export default withMDX(nextConfig);
