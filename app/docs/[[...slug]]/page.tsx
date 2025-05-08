import { DocsBody, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { getAllPages, getPageInfo, notionCustom } from "@/lib/notion";
import { Renderer } from "./renderer";
import { notFound, redirect, RedirectType } from "next/navigation";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

const alias: Record<string, string> = {
  support: "727e5c98-3d55-4110-85c3-10aa04f7a718",
  "terms-of-service": "29e3bcd8-d3c6-43f8-9bba-309f84927650",
  "privacy-policy": "8a1563fb-3a85-4d0c-9a80-2e513869b52e",
};

const getPage = async (slug?: string[]) => {
  let pageId = slug?.join("/");
  if (!pageId) {
    if (process.env.NOTION_HOME_PAGE_ID) {
      pageId = process.env.NOTION_HOME_PAGE_ID;
    } else {
      return null;
    }
  }
  if (alias[pageId]) {
    pageId = alias[pageId];
  }
  const recordMap = await notionCustom.getPage(pageId);
  return recordMap as typeof recordMap & {
    raw: {
      page: PageObjectResponse;
    };
  };
};

export default async function Page(props: PageProps) {
  const params = await props.params;
  if (!params.slug) {
    if (process.env.NOTION_HOME_PAGE_ID) {
      return redirect(
        `/docs/${process.env.NOTION_HOME_PAGE_ID}`,
        RedirectType.replace
      );
    }
  }
  const recordMap = await getPage(params.slug);
  if (!recordMap) notFound();

  const page = recordMap.raw.page;
  const info = getPageInfo(page);

  return (
    <DocsPage
      tableOfContent={{ enabled: false }}
      tableOfContentPopover={{ enabled: false }}
    >
      <DocsTitle>{info.title}</DocsTitle>
      <DocsBody>
        <Renderer className="!m-0 !px-0 !w-full" recordMap={recordMap} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  const response = await getAllPages();

  return [
    ...response.results.map((page) => ({
      slug: [page.id],
    })),
    ...Object.entries(alias).map(([alias]) => ({
      slug: [alias],
    })),
  ];
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const page = await getPage(params.slug).catch(() => notFound());
  if (!page) notFound();
  const info = getPageInfo(page.raw.page);

  return {
    title: info.title,
  };
}
