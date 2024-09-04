"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function GithubSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";
  return (
    <Button
      variant="default"
      className="flex gap-3"
      onClick={() => signIn("github", { callbackUrl })}
    >
      <Github />
      <p>Entre com sua conta do Github</p>
    </Button>
  );
}
