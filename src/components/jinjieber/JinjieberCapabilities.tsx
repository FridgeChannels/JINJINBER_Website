import Image from "next/image";
import { jinjieberMock } from "@/mock/jinjieber";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";

export interface JinjieberCapabilitiesProps {
  /** When embedded inside a page that already applies vertical section padding, avoid double top/bottom padding. */
  embedded?: boolean;
}

export const JinjieberCapabilities: React.FC<JinjieberCapabilitiesProps> = ({ embedded }) => {
  const { capabilities } = jinjieberMock;
  const caps = Object.values(capabilities);

  return (
    <section
      id="capabilities-section"
      className={cn("bg-white scroll-mt-24", embedded ? "py-0 md:py-0" : "py-24 md:py-48")}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        <div
          className={cn(
            "flex flex-col md:flex-row md:items-end justify-between gap-8",
            embedded ? "mt-0 border-b-0 pb-0" : "mt-12 border-b border-zinc-100 pb-16 gap-12"
          )}
        >
          <div className={cn(embedded ? "max-w-3xl py-8" : "max-w-4xl")}>
            <h2
              className={cn(
                "font-bold tracking-tight text-zinc-900",
                embedded ? "text-4xl md:text-5xl lg:text-6xl" : "text-4xl md:text-6xl lg:text-7xl"
              )}
            >
              World-Class Production Ecosystem
            </h2>
          </div>
          {!embedded && (
            <p className="max-w-md text-zinc-500 text-lg leading-relaxed font-medium">
              Precision engineering at global scale, driven by advanced automation and rigorous quality benchmarks.
            </p>
          )}
        </div>

        <div className={cn("grid gap-12 md:grid-cols-2 lg:grid-cols-3", embedded ? "mt-16" : "mt-24")}>
          {caps.map((cap: any, idx) => (
            <div 
              key={idx} 
              className={cn(
                "bg-white flex flex-col overflow-hidden transition-all duration-500 group",
                "border border-zinc-100 hover:border-[#4f25e4]/20",
                "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)]",
                pxn.radiusGrid
              )}
            >
              {cap.image && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
                </div>
              )}
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-zinc-900 mb-8 group-hover:text-[#4f25e4] transition-colors">{cap.title}</h3>
                <ul className="space-y-5 text-base text-zinc-500 flex-1 font-medium">
                  {cap.details.map((detail: string, dIdx: number) => (
                    <li key={dIdx} className="flex gap-4">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4f25e4]/50" aria-hidden />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

