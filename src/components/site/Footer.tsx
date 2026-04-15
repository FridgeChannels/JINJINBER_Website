import Link from "next/link";
import { cn } from "@/lib/cn";

export const Footer: React.FC = () => {
  return (
    <footer
      className={cn(
        "mt-auto bg-white/95 backdrop-blur-md",
        "shadow-[0_-12px_40px_rgba(15,23,42,0.05)]",
      )}
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div className="space-y-2">
          <div className="font-display text-lg font-semibold text-zinc-900">
            Jinjieber
          </div>
          <p className="text-sm text-zinc-600">
            Engineering Flow. Delivering Trust.
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold text-zinc-900">Pages</div>
          <ul className="space-y-1 text-sm text-zinc-600">
            <li>
              <Link
                href="/"
                className="rounded-none hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700/35"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="rounded-none hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700/35"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="rounded-none hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700/35"
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="rounded-none hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700/35"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="rounded-none hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700/35"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold text-zinc-900">Contact</div>
          <div className="space-y-1 text-sm text-zinc-600">
            <div>
              <span className="font-medium text-zinc-800">Email:</span>{" "}
              <a
                className="rounded-none underline decoration-zinc-400/60 underline-offset-2 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700/35"
                href="mailto:enochmei2024@gmail.com"
              >
                enochmei2024@gmail.com
              </a>
            </div>
            <div>
              <span className="font-medium text-zinc-800">Website:</span>{" "}
              <a
                className="rounded-none underline decoration-zinc-400/60 underline-offset-2 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700/35"
                href="http://www.jinjieber.com"
                target="_blank"
                rel="noreferrer"
              >
                www.jinjieber.com
              </a>
            </div>
            <div>
              <span className="font-medium text-zinc-800">Phone:</span>{" "}
              +1 213 824 2886
            </div>
            <div>
              <span className="font-medium text-zinc-800">Mobile:</span>{" "}
              +1 626831 0588
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Jinjieber
      </div>
    </footer>
  );
};
