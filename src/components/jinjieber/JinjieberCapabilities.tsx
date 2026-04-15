import Image from "next/image";
import { jinjieberMock } from "@/mock/jinjieber";
import { PixendSectionLabel } from "@/components/pixend/PixendPrimitives";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";

export const JinjieberCapabilities: React.FC = () => {
  const { capabilities } = jinjieberMock;
  const caps = Object.values(capabilities);

  return (
    <section id="capabilities-section" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <PixendSectionLabel>Manufacturing Capabilities</PixendSectionLabel>
        <h2 className="mt-8 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
          A World-Class Production Ecosystem
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caps.map((cap: any, idx) => (
            <div key={idx} className={cn("bg-neutral-50 flex flex-col overflow-hidden", "rounded-none", pxn.shadowGrid)}>
              {cap.image && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={`/brain/5e9b8f32-c9c7-4a13-b050-420a170b0f72/${cap.image}`}
                    alt={cap.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    unoptimized
                  />
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold text-zinc-900 mb-6">{cap.title}</h3>
                <ul className="space-y-4 text-sm text-zinc-600 flex-1">
                  {cap.details.map((detail: string, dIdx: number) => (
                    <li key={dIdx} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4f25e4]" aria-hidden />
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
