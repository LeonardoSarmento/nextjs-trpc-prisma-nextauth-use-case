import { HydrateClient } from "@/trpc/server";
import { type PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavBar";

export function Container({ children }: PropsWithChildren) {
  return (
    <HydrateClient>
      <main className="flex min-h-screen w-screen flex-col justify-between px-2 xl:px-10">
        <NavigationBar />
        {children}
        <Footer />
      </main>
    </HydrateClient>
  );
}
