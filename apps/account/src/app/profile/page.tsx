import { UserProfile } from "@clerk/nextjs";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div>
      <Link href="/">Home</Link>
      <UserProfile />
    </div>
  );
}
