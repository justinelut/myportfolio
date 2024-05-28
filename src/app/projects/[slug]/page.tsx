import { GetStaticPropsContext } from "next";
import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Params {
  slug: string;
}

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({
  params,
}: GetStaticPropsContext<Params>) {
  if (!params?.slug) {
    throw new Error("Slug parameter is missing");
  }
  const { meta } = await getPageContent(params.slug);
  return { title: meta.title };
}

interface PageProps {
  params: Params;
}

const Page = async ({ params }: PageProps) => {
  const { content } = await getPageContent(params.slug);

  return (
    <div className="py-4 prose dark:prose-invert">{content}</div>
  );
};

export default Page;
