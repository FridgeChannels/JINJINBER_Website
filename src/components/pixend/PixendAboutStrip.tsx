import Link from "next/link";
import { pixendShowcaseMock } from "@/mock/pixend-showcase";
import { PixendSectionLabel } from "@/components/pixend/PixendPrimitives";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";

export const PixendAboutStrip: React.FC = () => {
  const { about } = pixendShowcaseMock;

  return (
    <section id="about-section" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-4">
            <PixendSectionLabel>{about.label}</PixendSectionLabel>
          </div>
          <div className="space-y-6 md:col-span-8">
            <h2 className="text-2xl font-semibold leading-snug text-zinc-900 md:text-3xl">
              {about.heading}
            </h2>
            <Link
              href={about.readMoreHref}
              className={cn(
                "inline-flex w-fit items-center px-8 py-2.5 text-sm font-semibold text-zinc-900",
                pxn.radiusCta,
                "bg-neutral-100 transition-colors duration-300 hover:bg-neutral-200/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f25e4]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
              )}
            >
              Read more
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <PlaceholderMedia
            alt="About section media placeholder"
            aspectClassName="aspect-[21/9]"
            sizes="(max-width: 1200px) 100vw, 1200px"
            className={cn(pxn.radiusHeroMedia, pxn.shadowGrid)}
          />
        </div>
      </div>
    </section>
  );
};
