import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BookTypeIcon,
  HeadsetIcon,
  ImageUpIcon,
  Menu,
  PaletteIcon,
  PanelsTopLeftIcon,
  WorkflowIcon,
} from "lucide-react";

const url =
  "https://chromewebstore.google.com/detail/notion-nice/djjgmfjamlfgkldmfpeicablnnfadkai";

const menus = [
  // {
  //   name: "定价",
  //   href: "#pricing",
  // },
  {
    name: "博客",
    href: "http://life-nice.notion.site",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto flex h-14 items-center px-4 sm:px-6 lg:px-8">
          <div className="mr-4 hidden md:flex">
            <Link className="text-lg font-medium mr-16" href="">
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
                <Link key={menu.name} target="_blank" href={menu.href}>
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
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {menus.map((menu) => (
                    <DropdownMenuItem key={menu.name}>
                      <Link target="_blank" href={menu.href}>
                        {menu.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950 dark:to-black relative">
        <div className="absolute bg-[url('/_convertfast/gradient-bg-0.svg')] bg-auto bg-no-repeat z-0 inset-0 top-0 bottom-0 left-0 right-0 grayscale"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 drop-shadow-md">
              轻松将 Notion 文章发布到微信公众号
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
              使用 Notion Nice，您可以快速将 Notion
              中的文章一键渲染并发布到微信公众号，提升内容传播效率。
            </p>
            <div className="flex flex-row justify-center gap-4">
              <Link target="_blank" href={url}>
                <Button>开始使用</Button>
              </Link>
            </div>
          </div>
          <Image
            width={1024}
            height={768}
            alt="Notion Nice"
            src="/imgs/hero/1.jpeg"
            className="mt-8 max-w-full md:max-w-5xl mx-auto rounded-md shadow-2xl border sm:mt-12 block dark:hidden"
          />
        </div>
      </div>
      <div className="py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="my-4 flex flex-col gap-8">
          <div className="my-4 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
            <div className="order-1 md:order-1">
              <Image
                width={1024}
                height={768}
                alt="Notion Nice"
                className="w-full max-w-md rounded-xl shadow-xl ring-1 ring-gray-400/10"
                src="/imgs/sections/1.jpeg"
              />
            </div>
            <div className="order-2 md:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                什么是 Notion Nice
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Notion Nice 是一款将 Notion
                中的文章一键渲染并发布到微信公众号的工具。
              </p>
              <div className="mt-4">
                <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">一键渲染</p>
                    <p className="text-md text-muted-foreground">
                      轻松将您的 Notion
                      文章转化为微信公众号格式，省去繁琐的手动操作。
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">高效发布</p>
                    <p className="text-md text-muted-foreground">
                      快速将内容发布到微信公众号，提升您的内容传播速度。
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">用户友好</p>
                    <p className="text-md text-muted-foreground">
                      简单易用的界面，适合所有用户，无需技术背景。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                为什么选择 Notion Nice
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Notion Nice 让内容创作和发布变得简单高效。
              </p>
              <div className="mt-4">
                <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">节省时间</p>
                    <p className="text-md text-muted-foreground">
                      一键操作，快速完成文章发布，节省您的宝贵时间。
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">提升效率</p>
                    <p className="text-md text-muted-foreground">
                      通过自动化流程，提升内容创作和发布的整体效率。
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">个性化</p>
                    <p className="text-md text-muted-foreground">
                      支持多种主题的文章，确保您的内容在微信公众号上完美呈现。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                width={1024}
                height={768}
                alt="Notion Nice"
                className="w-full max-w-md rounded-xl shadow-xl ring-1 ring-gray-400/10"
                src="/imgs/sections/2.jpeg"
              />
            </div>
          </div>
          <div className="my-4 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
            <div className="order-1 md:order-1">
              <Image
                width={1024}
                height={768}
                alt="Notion Nice"
                className="w-full max-w-md rounded-xl shadow-xl ring-1 ring-gray-400/10"
                src="/imgs/sections/3.jpeg"
              />
            </div>
            <div className="order-2 md:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                如何使用 Notion Nice
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                按照以下步骤轻松使用 Notion Nice。
              </p>
              <div className="mt-4">
                <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">
                      1. 去 Chrome Webstore 下载插件
                    </p>
                    <p className="text-md text-muted-foreground">
                      下载 Notion Nice 插件并安装到您的 Chrome 浏览器。
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">
                      2. 选择文章
                    </p>
                    <p className="text-md text-muted-foreground">
                      从您的 Notion 中选择要发布的文章。
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">
                      3. 一键生成渲染内容
                    </p>
                    <p className="text-md text-muted-foreground">
                      {`点击[立刻生成]按钮，自动转换为微信公众号格式。`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Notion Nice 的主要功能
          </h2>
          <div className="mt-4 text-sm font-semibold tracking-wide"></div>
          <p className="mt-6 text-lg leading-8 text-muted-foreground"></p>
        </div>
        <div className="mt-8 flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
            <div className="text-left p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 text-primary-500">
                <BookTypeIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">一键渲染</h3>
              <p className="text-gray-600">
                快速将 Notion 中的文章转换为微信公众号格式，省去繁琐步骤。
              </p>
            </div>
            <div className="text-left p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 text-primary-500">
                <WorkflowIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">自动格式化</h3>
              <p className="text-gray-600">
                自动调整文章格式，确保在微信公众号上完美显示。
              </p>
            </div>
            <div className="text-left p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 text-primary-500">
                <PaletteIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">多种主题</h3>
              <p className="text-gray-600">
                提供多种文章主题，满足不同内容创作者的需求。
              </p>
            </div>
            <div className="text-left p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 text-primary-500">
                <PanelsTopLeftIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">实时预览</h3>
              <p className="text-gray-600">
                在发布前实时预览文章效果，确保内容无误。
              </p>
            </div>
            <div className="text-left p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 text-primary-500">
                <ImageUpIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">临时图床</h3>
              <p className="text-gray-600">
                提供临时图床服务，方便您复制到公众号中直接使用。
              </p>
            </div>
            <div className="text-left p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 text-primary-500">
                <HeadsetIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">用户支持</h3>
              <p className="text-gray-600">
                提供专业的用户支持，解决您在使用过程中的任何问题。
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950 relative">
        <div className="absolute bg-[url('/_convertfast/gradient-bg-0.svg')] bg-auto bg-no-repeat inset-0 top-0 bottom-0 left-0 right-0 grayscale bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              迫不及待想使用 Notion Nice？
            </h2>
            <p className="mt-6 text-xl leading-8 opacity-90 text-muted-foreground">
              立即开始您的内容发布之旅
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link target="_blank" href={url}>
                <Button>开始使用</Button>
              </Link>
            </div>
            <p className="mt-6 text-sm opacity-75 text-muted-foreground"></p>
          </div>
        </div>
      </section>
      <footer className="bg-background border-t">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 text-center md:text-left px-8">
              <p className="uppercase mb-6 font-bold">Notion Nice</p>
              <div className="flex flex-col">
                Notion Nice 是一款专为内容创作者设计的工具，帮助您将 Notion
                中的文章快速渲染并发布到微信公众号，节省时间，提高效率。
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-left px-8">
              <p className="uppercase mb-6 font-bold">产品</p>
              <ul className="mb-4">
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:underline text-gray-600 hover:text-gray-800"
                  >
                    Notion Nice
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="https://harvest.prius.ai/"
                    target="_blank"
                    className="hover:underline text-gray-600 hover:text-gray-800"
                  >
                    Harvest 收藏助手
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="https://chromewebstore.google.com/detail/djjgmfjamlfgkldmfpeicablnnfadkai/support"
                    target="_blank"
                    className="hover:underline text-gray-600 hover:text-gray-800"
                  >
                    支持
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="w-full md:w-1/3 text-center md:text-left px-8">
              <p className="uppercase mb-6 font-bold">服务</p>
              <ul className="mb-4">
                <li className="mt-2">
                  <Link
                    target="_blank"
                    href="https://life-nice.notion.site/8a1563fb3a854d0c9a802e513869b52e"
                    className="hover:underline text-gray-600 hover:text-gray-800"
                  >
                    隐私政策
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    target="_blank"
                    href="https://life-nice.notion.site/29e3bcd8d3c643f89bba309f84927650"
                    className="hover:underline text-gray-600 hover:text-gray-800"
                  >
                    服务条款
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-base text-gray-400 flex flex-col">
              © 2024 • Notion Nice All rights reserved.
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                粤ICP备2024292309号-1
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
