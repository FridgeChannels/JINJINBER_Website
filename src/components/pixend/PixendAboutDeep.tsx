import Link from "next/link";
import { pixendShowcaseMock } from "@/mock/pixend-showcase";
import { homeMockData } from "@/mock/home";
import { PixendSectionLabel } from "@/components/pixend/PixendPrimitives";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";

export const PixendAboutDeep: React.FC = () => {
  const { aboutDeep } = pixendShowcaseMock;

  return (
    <section id="about-deep" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <PixendSectionLabel>{aboutDeep.label}</PixendSectionLabel>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            {aboutDeep.paragraphs.map((p) => (
              <p key={p} className="text-sm leading-relaxed text-zinc-600 md:text-base">
                {p}
              </p>
            ))}
            <Link
              href="/products"
              className={cn(
                "inline-flex w-fit items-center px-8 py-2.5 text-sm font-semibold text-zinc-900",
                pxn.radiusCta,
                "bg-neutral-100 transition-colors duration-300 hover:bg-neutral-200/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f25e4]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
              )}
            >
              View products
            </Link>
          </div>

          <div className="space-y-6 lg:col-span-5">
            <PlaceholderMedia
              alt="Manufacturing facility placeholder"
              aspectClassName="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className={cn(pxn.radiusHeroMedia, pxn.shadowGrid)}
            />
            <div
              className={cn(
                pxn.radiusMajor,
                "bg-neutral-50 p-6",
                pxn.shadowMajor,
              )}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                What sets us apart
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600">
                {homeMockData.whatSetsUsApart.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400/80" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
