import GithubSignInButton from "@/app/_components/signInWithGitHub";

export default function Page() {
  return (
      <div className="flex flex-col items-center gap-4">
        <div className="my-5">
          <p>Faça login agora mesmo para ganhar um prêmio íncrivel?*</p>
          <p>não prometemos prêmio nenhum a ser entregue...</p>
        </div>
        <GithubSignInButton />
      </div>
  );
}
