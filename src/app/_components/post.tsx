"use client";

import { useState } from "react";

import { api } from "@/trpc/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LatestPost() {
  const [latestPost] = api.post.getLatest.useSuspenseQuery();

  const utils = api.useUtils();
  const [name, setName] = useState("");
  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();
      setName("");
    },
  });

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Sua postagem mais recente: {latestPost.name}</p>
      ) : (
        <p>Você não possui nenhuma postagem ainda.</p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate({ name });
        }}
        className="mt-2 flex flex-col gap-4"
      >
        <Input
          type="text"
          placeholder="Título"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit" disabled={createPost.isPending}>
          {createPost.isPending ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </div>
  );
}
