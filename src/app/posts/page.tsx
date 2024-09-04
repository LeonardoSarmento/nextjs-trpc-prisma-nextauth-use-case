import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { LatestPost } from "../_components/post";

export default async function Page() {
  const session = await getServerAuthSession();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1>Post Page</h1>
      {session?.user && <LatestPost />}
    </div>
  );
}
