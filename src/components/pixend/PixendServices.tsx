import { pixendShowcaseMock } from "@/mock/pixend-showcase";
import { PixendSectionLabel } from "@/components/pixend/PixendPrimitives";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";

export const PixendServices: React.FC = () => {
  const { services } = pixendShowcaseMock;

  return (
    <section id="services-section" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <PixendSectionLabel>{services.label}</PixendSectionLabel>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.items.map((s) => (
            <article
              key={s.id}
              className={cn(
                "overflow-hidden bg-neutral-50 transition-shadow duration-300 hover:bg-white",
                pxn.radiusGrid,
                pxn.shadowGrid,
                pxn.shadowGridHover,
              )}
            >
              <PlaceholderMedia
                alt={`${s.title} illustration placeholder`}
                aspectClassName="aspect-[21/9]"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-none ring-0"
              />
              <div className="p-6 md:p-8">
                <h3 className="text-lg font-semibold text-zinc-900 md:text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
