import { getServerAuthSession } from "@/server/auth";
import { Button } from "./ui/button";
import Link from "next/link";

export async function Logout() {
  const session = await getServerAuthSession();
  return (
    <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
      <Button>{session ? "Sign out" : "Sign in"}</Button>
    </Link>
  );
}
