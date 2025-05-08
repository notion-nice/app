import { DocsBody, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { getAllPages, getPageInfo, notion, notionCustom } from "@/lib/notion";
import { Renderer } from "./renderer";
import { notFound, redirect, RedirectType } from "next/navigation";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

const getPage = async (slug?: string[]) => {
  let pageId = slug?.join("/");
  if (!pageId) {
    if (process.env.NOTION_HOME_PAGE_ID) {
      pageId = process.env.NOTION_HOME_PAGE_ID;
    } else {
      return null;
    }
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

  return response.results.map((page) => ({
    slug: [page.id],
  }));
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
