import Link from "next/link";
import { Home } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-white px-6 py-16">
      <div className="glass-panel max-w-md rounded-3xl p-10 text-center">
        <p className="font-display text-6xl font-semibold text-zinc-900">404</p>
        <p className="mt-2 text-zinc-600">
          Sorry, the page you visited does not exist.
        </p>
        <ButtonLink
          href="/"
          variant="primary"
          size="lg"
          className="mt-8 w-full max-w-xs gap-2"
        >
          <Home className="h-4 w-4" aria-hidden />
          Back Home
        </ButtonLink>
      </div>
      <p className="text-xs text-zinc-500">
        <Link href="/" className="underline-offset-2 hover:underline hover:text-zinc-800">
          Jinjieber
        </Link>
      </p>
    </div>
  );
}
