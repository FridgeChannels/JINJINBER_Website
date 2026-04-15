"use client";

import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { pixendShowcaseMock } from "@/mock/pixend-showcase";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";

/**
 * FAQ 布局对齐 Pixend 模板（见站点 `id="faq"`）：
 * 白底圆角卡、左栏紫点 + 大写标题、右栏无边框列表 + 仅底部分割线、Satoshi 问题字重 500、右侧圆形 + 号展开。
 */
export const PixendFaq: React.FC = () => {
  const { faq } = pixendShowcaseMock;
  const items = useMemo(() => faq.items, [faq.items]);
  const [openId, setOpenId] = useState<string | null>(null);

  const heading = faq.label.toUpperCase();

  return (
    <section id="faq" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={cn(
            pxn.radiusMajor,
            "bg-white px-6 py-10",
            pxn.shadowMajor,
            "md:px-10 md:py-12 lg:px-16 lg:py-16",
          )}
        >
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-16 lg:gap-y-0">
            {/* 左：紫点 + COMMON QUESTIONS — 对齐 framer-vsD28 “White” 标题区 */}
            <header className="flex flex-col gap-4 lg:col-span-4">
              <div className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#4f25e4]"
                  aria-hidden
                />
                <h2 className="font-display text-xl font-bold uppercase leading-tight tracking-[0.12em] text-[#161616] md:text-2xl">
                  {heading}
                </h2>
              </div>
            </header>

            {/* 右：FAQ 列表 — 对齐 framer-qmny1f + Question 底边框 */}
            <div className="lg:col-span-8">
              <ol className="m-0 flex list-none flex-col gap-8 p-0 md:gap-10">
                {items.map((item) => {
                  const open = openId === item.id;
                  return (
                    <li key={item.id} className="border-0">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenId((cur) => (cur === item.id ? null : item.id))
                        }
                        aria-expanded={open}
                        className={cn(
                          "flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left md:py-6",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f25e4]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                        )}
                      >
                        <span
                          className={cn(
                            "min-w-0 flex-1 font-display text-base font-medium leading-[1.6] text-[#333] md:text-[18px]",
                          )}
                        >
                          {item.question}
                        </span>
                        <span
                          className={cn(
                            "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[#161616] transition-transform duration-300",
                            open && "rotate-45",
                          )}
                          aria-hidden
                        >
                          <Plus className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                      </button>
                      {open ? (
                        <p className="pb-6 pr-14 font-sans text-sm font-normal leading-[1.6] text-[#3b3b3b] md:text-base md:pr-16">
                          {item.answer}
                        </p>
                      ) : null}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
