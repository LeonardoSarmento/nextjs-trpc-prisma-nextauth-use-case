import { FullPagePostView } from '@/app/_components/postPage';
import { getServerAuthSession } from '@/server/auth';
import { api } from '@/trpc/server';

export default async function PostModal({ params: { id: postId } }: { params: { id: string } }) {
  const session = await getServerAuthSession();
  const idAsNumber = Number(postId);
  if (Number.isNaN(idAsNumber)) throw new Error('Invalid post id');

  if (session?.user) {
    void api.post.getById.prefetch({ id: idAsNumber });
  }
  return (
    <div className="flex h-full min-h-0 w-full min-w-0 overflow-hidden">
      <FullPagePostView postId={postId} />
    </div>
  );
}
