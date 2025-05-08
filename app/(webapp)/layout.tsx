import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

const menus = [
  // {
  //   name: "定价",
  //   href: "#pricing",
  // },
  {
    name: "帮助中心",
    href: "/docs",
  },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-cn">
      <body>
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
          <div className="max-w-7xl mx-auto flex h-14 items-center px-4 sm:px-6 lg:px-8">
            <div className="mr-4 hidden md:flex">
              <Link className="text-lg font-medium mr-16" href="/">
                <div className="flex items-center gap-x-2 cursor-pointer">
                  <Image
                    width={128}
                    height={128}
                    src="/logo.png"
                    alt="Notion Nice"
                    className="w-8 h-8"
                  />
                  <h1 className="text-xl font-bold">Notion Nice</h1>
                </div>
              </Link>
              <nav className="flex items-center space-x-6 text-sm">
                {menus.map((menu) => (
                  <Link key={menu.name} href={menu.href}>
                    {menu.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-4 md:justify-end">
              <div className="md:hidden w-full flex items-center gap-x-2">
                <Link className="text-lg font-medium mr-16" href="/">
                  <div className="flex items-center gap-x-2 cursor-pointer">
                    <Image
                      width={128}
                      height={128}
                      src="/logo.png"
                      alt="Notion Nice"
                      className="w-8 h-8"
                    />
                    <h1 className="text-xl font-bold">Notion Nice</h1>
                  </div>
                </Link>
                <div className="flex-1"></div>

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <MenuIcon className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {menus.map((menu) => (
                      <DropdownMenuItem key={menu.name}>
                        <Link href={menu.href}>{menu.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
