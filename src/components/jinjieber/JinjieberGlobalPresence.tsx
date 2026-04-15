import Image from "next/image";
import { jinjieberMock } from "@/mock/jinjieber";
import { PixendSectionLabel } from "@/components/pixend/PixendPrimitives";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";
import { MapPin } from "lucide-react";

export const JinjieberGlobalPresence: React.FC = () => {
  const { globalPresence } = jinjieberMock;

  return (
    <section id="global-presence-section" className="py-16 md:py-24 bg-[#161616] text-white">
      <div className="mx-auto max-w-6xl px-4">
        <PixendSectionLabel className="border-white/20 text-white/90">Global Presence</PixendSectionLabel>
        
        <h2 className="mt-10 text-3xl md:text-4xl font-semibold tracking-tight text-white max-w-2xl">
          Trusted Across 6 Continents. Delivered from 1 Unified Supply Chain.
        </h2>

        <div className="mt-12 relative w-full aspect-[21/9] overflow-hidden">
          <Image
            src="/placeholders/global.png"
            alt="Global Supply Chain Map"
            fill
            className="object-contain opacity-80"
          />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {globalPresence.map((loc, idx) => {
            const [region, role] = loc.title.split(" — ");
            return (
              <div
                key={idx}
                className={cn(
                  "bg-white/5 border border-white/10 p-8 transition-colors hover:bg-white/10",
                  pxn.radiusGrid
                )}
              >
                <div className="flex items-center gap-3 text-white mb-6">
                  <div className="h-10 w-10 rounded-none bg-[#4f25e4] flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{region}</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">{role}</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  {loc.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
