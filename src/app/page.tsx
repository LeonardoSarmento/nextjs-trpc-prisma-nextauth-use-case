import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "Meu nome é Leonardo Sarmento" });
  const session = await getServerAuthSession();

  // if (session?.user) {
  //   void api.post.getLatest.prefetch();
  // }
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
      </h1>
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl text-white">
          {hello ? hello.greeting : "Loading tRPC query..."}
        </p>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-2xl text-white">
            {session && <span>Seja bem-vindo {session.user?.name}</span>}
          </p>
        </div>
      </div>
    </div>
  );
}
