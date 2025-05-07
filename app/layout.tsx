import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Notion Nice 一键排版",
  description: "一键渲染并发布到微信公众号",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-cn">
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
