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
    <section id="industries-section" className="py-24 md:py-40 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-200">
          <div className="max-w-2xl py-8">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl lg:text-6xl">
              {isTeaser ? "Industries We Serve" : "Critical Infrastructure & Industrial Solutions"}
            </h2>
          </div>
        </div>

        <div className={cn("mt-20 grid gap-12 md:grid-cols-2")}>
          {industries.map((ind, idx) => (
            <article
              key={idx}
              id={slugify(ind.title)}
              className={cn(
                "overflow-hidden bg-white transition-all duration-500 hover:bg-white flex flex-col scroll-mt-24 border border-zinc-100 hover:border-[#4f25e4]/20",
                pxn.radiusGrid,
                "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)]",
              )}
            >
              {ind.image ? (
                <div className={cn("relative overflow-hidden aspect-[16/9]")}>
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              ) : (
                <PlaceholderMedia
                  alt={`${ind.title} industry placeholder`}
                  aspectClassName="aspect-[16/9]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-none ring-0"
                />
              )}
              <div className={cn("flex flex-col flex-1 p-8 md:p-10")}>
                <h3 className={cn("text-2xl font-bold text-zinc-900")}>{ind.title}</h3>
                {!isTeaser && (
                  <>
                    <p className="mt-4 text-base leading-relaxed text-zinc-500 flex-1 font-medium">
                      {ind.description}
                    </p>
                    {ind.keyProducts && (
                      <div className="mt-8 pt-8 border-t border-zinc-100">
                        <div className="text-sm text-zinc-700 leading-relaxed font-semibold">{ind.keyProducts}</div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </article>
          ))}
        </div>

        {isTeaser && (
          <div className="mt-24 flex justify-center">
            <ButtonLink href="/industries" variant="secondary" size="lg" className="min-w-[240px] py-6 font-bold tracking-widest uppercase text-xs">
              View All Industries
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
};

