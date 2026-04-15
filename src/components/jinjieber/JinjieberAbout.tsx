import Link from "next/link";
import { jinjieberMock } from "@/mock/jinjieber";
import { PixendSectionLabel } from "@/components/pixend/PixendPrimitives";
import { ButtonLink } from "@/components/ui/Button";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";
import Image from "next/image";

export const JinjieberAbout: React.FC<{ 
  hideDeepDetails?: boolean;
  mode?: "mission" | "story" | "all";
}> = ({ hideDeepDetails, mode = "all" }) => {
  const { about } = jinjieberMock;

  const showMission = mode === "all" || mode === "mission";
  const showStory = !hideDeepDetails && (mode === "all" || mode === "story");

  return (
    <div>
      {/* Short mission strip */}
      {showMission && (
        <section id="mission" className="py-8 md:py-12 bg-white scroll-mt-24">

        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-4">
              <PixendSectionLabel>About Us</PixendSectionLabel>
            </div>
            <div className="space-y-6 md:col-span-8">
              <h2 className="text-2xl font-semibold leading-relaxed text-zinc-900 md:text-3xl">
                "{about.mission}"
              </h2>
              {hideDeepDetails && (
                <div className="pt-4">
                  <ButtonLink href="/about" variant="outline" className="rounded-none px-6 py-2.5 border border-zinc-300 hover:bg-neutral-50/80">
                    Read more
                  </ButtonLink>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-12 overflow-hidden bg-neutral-100 relative aspect-[21/9]">
            <Image
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80"
              alt="Valve manufacturing facility"
              fill
              className={cn("absolute inset-0 object-cover object-center", pxn.radiusHeroMedia, pxn.shadowGrid)}
              unoptimized
            />
          </div>
        </div>
      </section>
      )}

      {/* Deep details */}
      {showStory && (
        <section id="our-story" className="pt-8 pb-16 md:pt-12 md:pb-20 bg-white scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mt-8 grid gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-7">
                <PixendSectionLabel>Who We Are</PixendSectionLabel>
                {about.whoWeAre.split("\n\n").map((p, idx) => (
                  <p key={idx} className="text-base leading-relaxed text-neutral-600">
                    {p}
                  </p>
                ))}
              </div>

              <div className="space-y-6 lg:col-span-5">
                <div
                  className={cn(
                    pxn.radiusMajor,
                    "bg-[#fafafa] border border-neutral-100 p-8 h-full",
                    pxn.shadowMajor,
                  )}
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 mb-6">
                    What sets us apart
                  </div>
                  <ul className="space-y-4 text-sm leading-relaxed text-zinc-700">
                    {about.whatSetsUsApart.map((item, idx) => {
                      const [bold, reset] = item.split(" — ");
                      return (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-none bg-[#4f25e4]" aria-hidden />
                          <span>
                             <strong className="font-semibold text-zinc-900">{bold}</strong>
                             {reset ? ` — ${reset}` : ''}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
