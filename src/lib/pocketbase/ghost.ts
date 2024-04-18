"use server"
import GhostContentAPI from "@tryghost/content-api";

const ghostapi = new GhostContentAPI({
  url: process.env.BLOG_API_URL as string,
  key: process.env.GHOST_CONTENT_API_KEY as string,
  version: "v5.0",
});

export async function getPosts() {
  return await ghostapi.posts
    .browse({
      filter: "featured:true",
    })
    .catch((err) => console.log(err));
}
