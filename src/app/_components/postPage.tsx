'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { api } from '@/trpc/react';

export function FullPagePostView(props: { postId: string }) {
  const idAsNumber = Number(props.postId);
  if (Number.isNaN(idAsNumber)) throw new Error('Invalid post id');

  const [post] = api.post.getById.useSuspenseQuery({ id: idAsNumber });

  return (
    <div className="flex h-full w-full min-w-0 items-center justify-center text-white">
      <Card className='min-w-[350px]'>
        <CardHeader>
          <CardTitle>{post.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{post.name}</CardDescription>
        </CardContent>
        <CardFooter>
          <CardDescription>{post.createdAt.toLocaleDateString()}</CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
