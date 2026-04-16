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
        <section id="mission" className="pt-12 md:pt-20 pb-0 bg-white scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="lg:w-1/3">
                <div className="mt-6 flex gap-8">
                  <div className="h-20 w-px shrink-0 bg-[#4f25e4]" aria-hidden />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-zinc-400">
                      {about.missionEyebrow ?? "Our Mission"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-12 lg:w-2/3">
                <h2 className="text-2xl font-bold leading-[1.2] text-zinc-900 md:text-3xl lg:text-4xl tracking-tight">
                  "{about.mission}"
                </h2>
                {hideDeepDetails && (
                  <div className="pt-8">
                    <ButtonLink href="/about" size="lg" variant="secondary" className="min-w-[200px] border border-zinc-200">
                      Our Vision
                    </ButtonLink>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-16 overflow-hidden relative aspect-[21/9]">
              <Image
                src="/banner/mission.png"
                alt="Valve manufacturing facility"
                fill
                className={cn("absolute inset-0 object-cover object-center transition-transform duration-1000 hover:scale-105", pxn.radiusGrid)}
                unoptimized
              />
              <div className="absolute inset-0 bg-zinc-950/10 pointer-events-none" />
            </div>
          </div>
        </section>
      )}

      {/* Deep details */}
      {showStory && (
        <section id="our-story" className="pt-12 md:pt-20 pb-32 md:pb-48 bg-white scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-24 lg:grid-cols-12">
              <div className="space-y-12 lg:col-span-7">
                <div className="space-y-8">
                  {about.whoWeAre.split("\n\n").map((p, idx) => (
                    <p key={idx} className="text-xl leading-relaxed text-zinc-500 font-medium">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div
                  className={cn(
                    pxn.radiusGrid,
                    "bg-zinc-50 border border-zinc-100 p-12 h-full flex flex-col justify-center",
                    "shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]"
                  )}
                >
                  <ul className="space-y-8">
                    {about.whatSetsUsApart.map((item, idx) => {
                      const [bold, reset] = item.split(" — ");
                      return (
                        <li key={idx} className="flex gap-6 items-start group">
                          <span className="mt-2.5 h-1.5 w-6 shrink-0 bg-[#4f25e4] transition-all group-hover:w-10" aria-hidden />
                          <div className="flex flex-col gap-2">
                             <div className="text-xl font-bold text-zinc-900">{bold}</div>
                             {reset && <div className="text-base text-zinc-500 leading-relaxed font-medium">{reset}</div>}
                          </div>
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

