"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { jinjieberMock } from "@/mock/jinjieber";
import { cn } from "@/lib/cn";

export const JinjieberHero: React.FC = () => {
  const { hero } = jinjieberMock;
  const [current, setCurrent] = useState(0);
  const images = hero.images || [];

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: () => ({
      scale: 1.25,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      scale: 1.05,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      scale: 1,
      opacity: 0,
    },
  };

  const titleLines = hero.headline.split(". ").map(t => t.endsWith(".") ? t : t + ".");

  return (
    <section
      id="hero-section"
      className="relative flex min-h-[750px] w-full flex-col overflow-x-hidden bg-zinc-950 md:min-h-dvh lg:min-h-0 lg:h-[calc(100dvh-var(--header-h))]"
    >
      {/* 仅裁切背景层，避免 scale 横向溢出；正文与 CTA 永不因外层 overflow 被裁掉 */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 2.2,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={images[current]}
              alt={`Background ${current + 1}`}
              fill
              className="object-cover object-center scale-110"
              priority
              unoptimized
            />
          </motion.div>
        </AnimatePresence>
        
        {/* All overlays removed per user request for clean raw image display */}
      </div>

      <div className="relative z-[2] flex w-full flex-1 flex-col px-6 pt-28 pb-32 md:px-12 md:pt-32 md:pb-36 lg:px-24 lg:pt-32 lg:pb-40">
        <div className="flex w-full max-w-5xl flex-1 flex-col gap-8 md:gap-10 lg:[@media(max-height:820px)]:gap-6">
          <div className="space-y-6 md:space-y-8 lg:[@media(max-height:820px)]:space-y-5">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6"
            >
              <span className="h-px w-14 bg-[#4f25e4]" aria-hidden />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl lg:[@media(max-height:820px)]:text-6xl lg:[@media(max-height:820px)]:leading-[1.02] tracking-tightest drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            >
              {titleLines.map((line, i) => {
                 if(line === ".") return null;
                 return (
                   <span key={i} className="block">
                     {line}
                   </span>
                 );
              })}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.2 }}
              className="max-w-3xl text-xl leading-relaxed text-zinc-100 md:text-2xl font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] lg:[@media(max-height:820px)]:text-xl lg:[@media(max-height:820px)]:leading-relaxed"
            >
              {hero.subheadline}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-8"
          >
            {hero.cta.map((btn, index) => (
              <Link
                key={index}
                href={btn.href}
                className={cn(
                  "inline-flex items-center justify-center px-12 py-6 font-display text-lg font-bold transition-all duration-300 tracking-wide",
                  index === 0 
                    ? "bg-[#4f25e4] text-white hover:bg-[#3d1bb8] hover:scale-105 shadow-2xl shadow-[#4f25e4]/30"
                    : "bg-white/5 text-white backdrop-blur-xl hover:bg-white/10 border border-white/20"
                )}
              >
                {btn.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 指示条：absolute，避免撑出“黑色下边距” */}
      <div className="absolute bottom-12 left-6 right-6 z-[3] flex items-center justify-end md:left-12 md:right-12 lg:left-24 lg:right-24">
        <div className="flex gap-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
              }}
              className="group relative flex flex-col items-center gap-4 py-2"
              aria-label={`Go to slide ${i + 1}`}
            >
              <div className={cn(
                "h-[2px] transition-all duration-700 ease-in-out",
                current === i ? "w-16 bg-[#4f25e4]" : "w-4 bg-zinc-800 group-hover:bg-zinc-600"
              )} />
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-8 left-1/2 z-[3] hidden -translate-x-1/2 items-center justify-center lg:flex"
      >
        <div className="flex flex-col items-center gap-3">
           <div className="h-12 w-px bg-gradient-to-b from-zinc-700 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default JinjieberHero;

