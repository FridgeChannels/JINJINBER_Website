import Image from "next/image";
import Link from "next/link";
import { jinjieberMock } from "@/mock/jinjieber";
import { cn } from "@/lib/cn";

export const JinjieberHero: React.FC = () => {
  const { hero } = jinjieberMock;
  const titleLines = hero.headline.split(". ").map(t => t.endsWith(".") ? t : t + ".");

  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-white text-[#161616]"
    >
      <div
        className={cn(
          "relative z-[2] mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-5 pb-10 pt-[100px] md:gap-16 md:px-[50px] md:pb-[75px] md:pt-[140px] lg:flex-row lg:items-center lg:gap-20 lg:px-[75px] lg:pt-[160px]",
        )}
      >
        <div className="flex min-w-0 flex-1 flex-col gap-10">
          <div className="flex max-w-[650px] flex-col gap-5 pb-2.5">
            <div className="flex w-full flex-row items-center gap-4">
              <span
                className="h-px w-[30px] shrink-0 bg-[#161616]"
                aria-hidden
              />
              <p className="font-display text-base font-medium leading-normal text-[#333] md:text-lg">
                Jinjieber Fluid Control
              </p>
            </div>

            <h1
              className={cn(
                "font-display font-medium leading-[1.2] text-[#161616]",
                "text-[40px] tracking-[-2px]",
                "md:text-[60px] md:tracking-[-4px]",
                "lg:text-[72px] lg:tracking-[-4px]",
              )}
            >
              {titleLines.map((line, i) => {
                 if(line === ".") return null;
                 return (
                   <span key={i} className="block">
                     {line}
                   </span>
                 );
              })}
            </h1>
            
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed max-w-2xl">
              {hero.subheadline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {hero.cta.map((btn, index) => (
              <Link
                key={index}
                href={btn.href}
                className={cn(
                  "inline-flex min-h-0 items-center justify-center rounded-none px-[30px] py-4",
                  "font-display text-base font-bold leading-[22px] transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                  index === 0 
                    ? "bg-[#4f25e4] text-white hover:opacity-90 active:opacity-80 focus-visible:ring-[#4f25e4]/50"
                    : "bg-neutral-100 text-[#161616] hover:bg-neutral-200/90 focus-visible:ring-neutral-200/50"
                )}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full min-h-[280px] shrink-0 overflow-hidden rounded-none bg-neutral-100 lg:aspect-auto lg:h-[520px] lg:w-[min(480px,46%)] lg:max-w-[480px]">
          <Image
            src="https://images.unsplash.com/photo-1541888057284-cdbd0b6916ad?auto=format&fit=crop&q=80"
            alt="Industrial Valve Manufacturing"
            fill
            className="absolute inset-0 object-cover object-center"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};
