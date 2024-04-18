import GhostContentAPI from "@tryghost/content-api";

const ghostapi = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_BLOG_API_URL as string,
  key: process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY as string,
  version: "v5.0",
});

export async function getPosts() {
  return await ghostapi.posts
    .browse({
      filter: "featured:true+primary_author:justin",
      limit: 3,
      
    })
    .catch((err) => console.log(err));
}
