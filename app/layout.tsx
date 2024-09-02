import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
