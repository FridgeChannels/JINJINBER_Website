import { pixendShowcaseMock } from "@/mock/pixend-showcase";
import { PixendSectionLabel } from "@/components/pixend/PixendPrimitives";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";

export const PixendProcess: React.FC = () => {
  const { process } = pixendShowcaseMock;

  return (
    <section id="process-section" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <PixendSectionLabel>{process.label}</PixendSectionLabel>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {process.steps.map((s) => (
            <div
              key={s.id}
              className={cn(
                "overflow-hidden bg-neutral-50 transition-shadow duration-300 hover:bg-white",
                pxn.radiusGrid,
                pxn.shadowGrid,
                pxn.shadowGridHover,
              )}
            >
              <PlaceholderMedia
                alt={`${s.title} step image placeholder`}
                aspectClassName="aspect-video"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rounded-none ring-0"
              />
              <div className="p-6 md:p-8">
                <div className="text-sm font-semibold text-zinc-500">{s.step}</div>
                <div className="mt-3 text-xl font-semibold text-zinc-900">{s.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
