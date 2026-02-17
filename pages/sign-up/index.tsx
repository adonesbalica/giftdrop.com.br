import { Logo } from "@/components/logo";
import { SignUpForm } from "@/components/sign-up-form";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-(--background) px-4">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <Logo />
        <p className="text-(--muted-foreground) text-base font-semibold">
          Create wishlists, share with friends, celebrate together!
        </p>
      </div>

      <div className="w-full max-w-md rounded-xl border border-(--border) bg-(--card) p-8 shadow-2xl">
        <h1 className="text-2xl font-semibold text-(--foreground)">
          Create you account
        </h1>

        <p className="mt-2 text-sm text-(--muted-foreground)">
          Sign up to manage your wishlist.
        </p>

        <SignUpForm />

        <p className="mt-6 text-center text-sm text-(--muted-foreground)">
          Already have an account?{" "}
          <Link href="/sign-in" className="cursor-pointer text-(--primary) hover:opacity-80">
            Sing In
          </Link>
        </p>
      </div>
    </div>
  );
}
