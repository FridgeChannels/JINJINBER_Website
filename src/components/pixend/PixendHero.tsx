import Image from "next/image";
import Link from "next/link";
import { pixendShowcaseMock } from "@/mock/pixend-showcase";
import { cn } from "@/lib/cn";

/** Pixend Hero 右侧循环视频（Framer 资源） */
const HERO_VIDEO_SRC =
  "https://framerusercontent.com/assets/PxhMHm6T4Vc5KhwnXCGoXjMnto.mp4";

function simpleIconSrc(brandLabel: string): string {
  const slug: Record<string, string> = {
    LinkedIn: "linkedin",
    Dribbble: "dribbble",
    Behance: "behance",
  };
  const key = slug[brandLabel] ?? "linkedin";
  return `https://cdn.simpleicons.org/${key}/333333`;
}

export const PixendHero: React.FC = () => {
  const { hero } = pixendShowcaseMock;
  const titleLines = hero.title.split("\n");

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
        {/* 左：文案区 — 对齐 framer-1oc1nf4 / Text Container */}
        <div className="flex min-w-0 flex-1 flex-col gap-10">
          <div className="flex max-w-[650px] flex-col gap-5 pb-2.5">
            {/* Tag line：30×1 横线 + Satoshi 500 / #333 */}
            <div className="flex w-full flex-row items-center gap-4">
              <span
                className="h-px w-[30px] shrink-0 bg-[#161616]"
                aria-hidden
              />
              <p className="font-display text-base font-medium leading-normal text-[#333] md:text-lg">
                {hero.eyebrow}
              </p>
            </div>

            {/* H1 — preset 1n8rbsf：40 / 60 / 80px，weight 500，letter-spacing -2 / -4px，leading 120% */}
            <h1
              className={cn(
                "font-display font-medium leading-[1.2] text-[#161616]",
                "text-[40px] tracking-[-2px]",
                "md:text-[60px] md:tracking-[-4px]",
                "lg:text-[80px] lg:tracking-[-4px]",
              )}
            >
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </div>

          {/* CTA — Main Primary：#4f25e4，圆角 30px，padding 16×30 */}
          <div>
            <Link
              href={hero.ctaHref}
              className={cn(
                "inline-flex min-h-0 items-center justify-center rounded-[30px] bg-[#4f25e4] px-[30px] py-4",
                "font-display text-base font-bold leading-[22px] text-white no-underline",
                "transition-opacity duration-200 hover:opacity-90 active:opacity-80",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f25e4]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
              )}
            >
              {hero.ctaLabel}
            </Link>
          </div>

          {/* 分割线 + 社交 — framer-ddq5ss：80px 横线 + gap 20 + 40px 圆角按钮 */}
          <div className="flex w-min max-w-full flex-row flex-wrap items-center gap-5">
            <div
              className="h-px w-[80px] shrink-0 bg-[#c6c6c6]"
              aria-hidden
            />
            {hero.social.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={cn(
                  "relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full",
                  "bg-neutral-100 text-[#161616]",
                  "transition-colors duration-200 hover:bg-neutral-200/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f25e4]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                )}
              >
                <Image
                  src={simpleIconSrc(item.label)}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                  unoptimized
                />
              </a>
            ))}
          </div>
        </div>

        {/* 右：视频 — framer-n4n6er-container */}
        <div className="relative aspect-[4/5] w-full min-h-[280px] shrink-0 overflow-hidden rounded-[24px] bg-neutral-100 lg:aspect-auto lg:h-[520px] lg:w-[min(480px,46%)] lg:max-w-[480px]">
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            src={HERO_VIDEO_SRC}
            loop
            muted
            playsInline
            autoPlay
            preload="metadata"
            aria-label="Hero background video"
          />
        </div>
      </div>
    </section>
  );
};
