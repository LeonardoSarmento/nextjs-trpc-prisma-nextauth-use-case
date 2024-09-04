import { SignOutButton } from "@/app/_components/signoutButton";

export default async function Page() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="my-5">
        <p>Você tem certeza que quer deslogar dessa aplicação incrível?</p>
        <p>vou te dar outra chance para pensar...</p>
      </div>
      <SignOutButton />
    </div>
  );
}
