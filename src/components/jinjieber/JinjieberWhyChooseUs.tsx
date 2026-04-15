import { jinjieberMock } from "@/mock/jinjieber";
import { PixendSectionLabel } from "@/components/pixend/PixendPrimitives";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";
import Image from "next/image";

export const JinjieberWhyChooseUs: React.FC = () => {
  const { whyChooseUs, certifications } = jinjieberMock;

  return (
    <section id="why-choose-us" className="py-8 md:py-12 bg-neutral-50/50 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <PixendSectionLabel>Why Choose Jinjieber</PixendSectionLabel>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-8">
              From Foundry to Field — Your Single-Source Partner
            </h2>
            
            <div className="overflow-x-auto rounded-none bg-white border border-neutral-100 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
              <table className="min-w-full text-left text-sm text-zinc-600">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-100 text-xs uppercase tracking-wide text-zinc-500">
                    <th scope="col" className="px-6 py-4 font-semibold">Advantage</th>
                    <th scope="col" className="px-6 py-4 font-semibold">What It Means for You</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {whyChooseUs.map((row, idx) => (
                    <tr key={idx} className="transition-colors hover:bg-neutral-50/50">
                      <td className="px-6 py-4 font-medium text-zinc-900 w-1/3">
                        {row.advantage}
                      </td>
                      <td className="px-6 py-4 text-zinc-600 leading-relaxed">
                        {row.meaning}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <div className={cn("bg-white p-8", pxn.radiusMajor, pxn.shadowGrid)}>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4f25e4] mb-6">
                Certifications & Standards
              </div>
              <ul className="space-y-4">
                {certifications.map((cert, idx) => {
                  const [code, desc] = cert.split(" — ");
                  return (
                    <li key={idx} className="text-sm">
                      <div className="font-semibold text-zinc-900">{code}</div>
                      {desc && <div className="text-zinc-500 mt-1">{desc}</div>}
                    </li>
                  )
                })}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
