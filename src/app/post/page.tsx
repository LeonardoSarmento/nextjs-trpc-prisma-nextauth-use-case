import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { LatestPost } from "../_components/post";
import { PostTable } from "../_components/postTable";

export default async function Page() {
  const session = await getServerAuthSession();

  if (session?.user) {
    void api.post.getLatest.prefetch();
    void api.post.getAllPosts.prefetch();
  }
  return (
    <div className="flex flex-col items-center gap-4">
      <h1>Post Page</h1>
      {session?.user && (
        <div className="flex gap-10">
          <LatestPost />
          <PostTable />
        </div>
      )}
    </div>
  );
}
