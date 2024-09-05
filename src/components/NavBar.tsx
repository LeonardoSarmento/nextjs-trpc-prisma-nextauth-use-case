import { ModeToggle } from "./mode-toggle";
import { Github, ThumbsUp } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logout } from "./Logout";

export function NavigationBar() {
  return (
    <div className="flex w-full flex-wrap-reverse items-center gap-4 py-2 sm:my-2 md:flex-nowrap xl:gap-2 xl:space-x-7">
      <div className="hidden w-full justify-center md:order-first md:flex xl:w-1/3 xl:justify-start">
        <GithubLink />
      </div>
      <div className="flex w-full flex-wrap justify-around justify-items-center gap-3 xl:w-1/3">
        <Link href="/" className="[&.active]:font-bold">
          home
        </Link>
        <Link href="/post" className="[&.active]:font-bold">
          Posts
        </Link>
        <Link href="/config" className="[&.active]:font-bold">
          config
        </Link>
      </div>
      <div className="flex w-full justify-around gap-3 md:justify-end xl:w-1/3">
        <Logout />
        <div className="md:hidden">
          <GithubLink />
        </div>
        <PortfolioNav />
        <ModeToggle className="justify-self-end" />
      </div>
    </div>
  );
}

export function PortfolioNav({ className }: { className?: string }) {
  return (
    <Button className={cn("", className)} asChild variant="ghost">
      <a
        href="https://leosarmento.com"
        target="_blank"
        rel="noopener noreferrer"
        className="gap-2"
      >
        <p>Portfolio</p>
        <ThumbsUp color="#2de139" />
      </a>
    </Button>
  );
}

function GithubLink() {
  return (
    <a
      href="https://github.com/LeonardoSarmento/nextjs-trpc-prisma-nextauth-use-case"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="ghost" className="gap-3">
        <Github />
        <p className="text-base underline underline-offset-4 max-md:hidden">
          nextjs-trpc-prisma-nextauth-use-case
        </p>
      </Button>
    </a>
  );
}
