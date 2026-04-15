import Link from "next/link";
import { jinjieberMock } from "@/mock/jinjieber";
import { PixendSectionLabel } from "@/components/pixend/PixendPrimitives";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { slugify } from "@/lib/slugify";
import { ButtonLink } from "@/components/ui/Button";

interface JinjieberIndustriesProps {
  isTeaser?: boolean;
}

export const JinjieberIndustries: React.FC<JinjieberIndustriesProps> = ({ isTeaser }) => {
  const { industries } = jinjieberMock;

  return (
    <section id="industries-section" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <PixendSectionLabel>Industries We Serve</PixendSectionLabel>
        {!isTeaser && (
          <h2 className="mt-8 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
            Custom Industrial Solutions
          </h2>
        )}

        <div className={cn("mt-12 grid gap-6 md:grid-cols-2", isTeaser ? "lg:grid-cols-4" : "lg:grid-cols-3")}>
          {industries.map((ind, idx) => (
            <article
              key={idx}
              id={slugify(ind.title)}
              className={cn(
                "overflow-hidden bg-neutral-50 transition-all duration-300 hover:bg-white flex flex-col scroll-mt-24 border border-transparent hover:border-neutral-200",
                pxn.radiusGrid,
                !isTeaser && pxn.shadowGrid,
                !isTeaser && pxn.shadowGridHover,
              )}
            >
              {ind.image ? (
                <div className={cn("relative overflow-hidden", isTeaser ? "aspect-[4/3]" : "aspect-video")}>
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ) : (
                <PlaceholderMedia
                  alt={`${ind.title} industry placeholder`}
                  aspectClassName={isTeaser ? "aspect-[4/3]" : "aspect-video"}
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="rounded-none ring-0"
                />
              )}
              <div className={cn("flex flex-col flex-1", isTeaser ? "p-5" : "p-6 md:p-8")}>
                <h3 className={cn("font-bold text-zinc-900", isTeaser ? "text-lg text-center" : "text-xl")}>{ind.title}</h3>
                {!isTeaser && (
                  <>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 flex-1">
                      {ind.description}
                    </p>
                    {ind.keyProducts && (
                      <div className="mt-6 pt-5 border-t border-neutral-200">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2">Key Products</div>
                        <div className="text-xs text-zinc-700 leading-relaxed font-medium">{ind.keyProducts}</div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </article>
          ))}
        </div>

        {isTeaser && (
          <div className="mt-16 flex justify-center">
            <ButtonLink href="/industries" variant="secondary" size="lg" className="min-w-[200px]">
              Explore More
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
};
