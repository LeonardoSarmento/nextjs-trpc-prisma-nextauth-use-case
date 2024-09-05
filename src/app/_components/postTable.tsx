"use client";

import { api } from "@/trpc/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ChevronRightSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PostTable() {
  const [allPost] = api.post.getAllPosts.useSuspenseQuery();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-nowrap">
          Posts do {allPost.username}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {allPost.posts.map((post) => (
          <Link key={post.id} href={`/post/${post.id}`}>
            <Button
              variant="ghost"
              className="flex w-full justify-between my-2 p-2"
            >
              <p>{post.name}</p>
              <ChevronRightSquare />
            </Button>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
