/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  rewrites: async () => [
    {
      source: "/style-editor.html",
      destination: "/style-editor",
    },
  ],
};

export default nextConfig;
