import { jinjieberMock } from "@/mock/jinjieber";
import { PixendSectionLabel } from "@/components/pixend/PixendPrimitives";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";

export interface JinjieberWhyChooseUsProps {
  /** When embedded inside a page that already applies full-width `px-*` gutters, avoid double horizontal padding. */
  embedded?: boolean;
}

export const JinjieberWhyChooseUs: React.FC<JinjieberWhyChooseUsProps> = ({ embedded }) => {
  const { whyChooseUs, certifications } = jinjieberMock;

  return (
    <section
      id="why-choose-us"
      className={cn(
        "bg-white scroll-mt-24",
        embedded ? "py-0 md:py-0" : "py-24 md:py-40"
      )}
    >
      <div className={cn(embedded ? "w-full" : "mx-auto w-full max-w-7xl px-4 md:px-8 lg:max-w-none lg:px-10")}>
        <div
          className={cn(
            "flex flex-col md:flex-row md:items-end justify-between gap-8",
            embedded ? "mt-0 border-b-0" : "mt-12 border-b border-zinc-200"
          )}
        >
          <div className="max-w-3xl py-8">
            {!embedded && <PixendSectionLabel>Why Choose Jinjieber</PixendSectionLabel>}
            <h2 className={cn("text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl lg:text-6xl", embedded ? "mt-0" : "mt-6")}>
              From Foundry to Field — Your Single-Source Partner
            </h2>
          </div>
        </div>

        <div className={cn("grid gap-12 lg:grid-cols-12 lg:items-start", embedded ? "mt-16" : "mt-20")}>
          <div className="lg:col-span-8">
            <div
              className={cn(
                pxn.radiusGrid,
                "bg-white border border-zinc-100 p-10 md:p-12",
                "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]"
              )}
            >
              <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-zinc-400">Advantage</div>
                  <div className="text-sm font-bold text-zinc-900">What sets Jinjieber apart</div>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-zinc-400 md:text-right">
                  What it means for you
                </div>
              </div>

              <ul className="mt-10 space-y-10">
                {whyChooseUs.map((row, idx) => (
                  <li key={idx} className="flex gap-6 items-start group">
                    <span
                      className="mt-2.5 h-1.5 w-6 shrink-0 bg-[#4f25e4] transition-all group-hover:w-10"
                      aria-hidden
                    />
                    <div className="flex flex-col gap-2">
                      <div className="text-xl font-bold text-zinc-900">{row.advantage}</div>
                      <div className="text-base text-zinc-500 leading-relaxed font-medium">{row.meaning}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <div
              className={cn(
                pxn.radiusGrid,
                "bg-zinc-50 border border-zinc-100 p-10 md:p-12",
                "shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]"
              )}
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#4f25e4] mb-8">
                Certifications & Standards
              </div>
              <ul className="space-y-8">
                {certifications.map((cert, idx) => {
                  const [code, desc] = cert.split(" — ");
                  return (
                    <li key={idx} className="flex gap-6 items-start group">
                      <span
                        className="mt-2.5 h-1.5 w-6 shrink-0 bg-[#4f25e4] transition-all group-hover:w-10"
                        aria-hidden
                      />
                      <div className="flex flex-col gap-2">
                        <div className="text-sm font-bold text-zinc-900 leading-snug">{code}</div>
                        {desc && <div className="text-sm text-zinc-500 leading-relaxed font-medium">{desc}</div>}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
