import Link from "next/link";
import { pixendShowcaseMock } from "@/mock/pixend-showcase";
import { PixendSectionLabel } from "@/components/pixend/PixendPrimitives";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";

export const PixendPartnership: React.FC = () => {
  const { partnership } = pixendShowcaseMock;

  return (
    <section id="pricing-section" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <PixendSectionLabel>{partnership.label}</PixendSectionLabel>

        <div className="mt-8">
          <PlaceholderMedia
            alt="Partnership program banner placeholder"
            aspectClassName="aspect-[21/9]"
            sizes="(max-width: 1200px) 100vw, 1200px"
            className={cn(pxn.radiusHeroMedia, pxn.shadowGrid)}
          />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="space-y-5 lg:col-span-7">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
              {partnership.title}
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
              {partnership.body}
            </p>
            <Link
              href={partnership.ctaHref}
              className={cn(
                "inline-flex min-h-0 items-center justify-center bg-[#4f25e4] px-[30px] py-4 text-sm font-bold text-white",
                pxn.radiusCta,
                "transition-opacity duration-200 hover:opacity-90 active:opacity-80",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f25e4]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
              )}
            >
              {partnership.ctaLabel}
            </Link>
          </div>

          <aside
            className={cn(
              "bg-neutral-50 p-6 lg:col-span-5",
              pxn.radiusMajor,
              pxn.shadowMajor,
            )}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Response time
            </div>
            <div className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              {partnership.priceLine}
            </div>
            <div className="mt-2 text-sm text-zinc-600">{partnership.priceSub}</div>

            <div className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Program highlights
            </div>
            <ol className="mt-4 space-y-3 text-sm text-zinc-600">
              {partnership.features.map((f, i) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-200/90 text-xs font-semibold text-zinc-800">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
};
