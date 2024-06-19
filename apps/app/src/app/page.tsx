import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>App site</div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <p>This should never be shown.</p>
      </SignedOut>
    </main>
  );
}
