import PocketBase from "pocketbase";
import { TypedPocketBase } from "../../../pocketbase-types"

const isServer = typeof window === "undefined";

export const pb = new PocketBase(
  isServer
    ? process.env.POCKETBASE_API_URL
    : process.env.NEXT_PUBLIC_POCKETBASE_API_URL
) as TypedPocketBase

// (async () => {
//   await pb.admins.authWithPassword(process.env.PB_EMAIL as string, process.env.PB_PASSWORD as string);
// })();


pb.autoCancellation(false);
