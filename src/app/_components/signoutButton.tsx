"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <Button onClick={() => signOut({ redirect: true, callbackUrl: "/" })}>
      Sim... eu vou sair (T.T)
    </Button>
  );
}
