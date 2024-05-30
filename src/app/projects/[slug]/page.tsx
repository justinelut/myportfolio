import { GetStaticPropsContext } from "next";
import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

interface Params {
  slug: string;
}

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({ params }: { params: any }) {
  if (!params?.slug) {
    throw new Error("Slug parameter is missing");
  }
  const { meta } = await getPageContent(params.slug);
  return {
    title: meta?.title, // Fixed reference to blogbody.title
    description: meta.description,
    openGraph: {
      images: [meta.image],
    },
  };
}

interface PageProps {
  params: Params;
}

const Page = async ({ params }: PageProps) => {
  const { content } = await getPageContent(params.slug);
  const { meta } = await getPageContent(params.slug);

  return (
    <>
      {meta.image && (
        <Image
          src={meta.image}
          alt={meta.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <div className="py-4 prose dark:prose-invert">{content}</div>
    </>
  );
};

export default Page;
