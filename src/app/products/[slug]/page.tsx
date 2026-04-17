"use client";

import { use } from "react";
import { products } from "@/mock/products";
import { PageShell } from "@/components/site/PageShell";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { ArrowLeft, CheckCircle2, Factory, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

function pickSpecValue(
  specifications: Array<{ key: string; value: string }>,
  matcher: (keyLower: string) => boolean
): string | null {
  const hit = specifications.find((s) => matcher(s.key.trim().toLowerCase()));
  return hit?.value ?? null;
}

export default function ProductDetailPage({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) {
  const params = use(paramsPromise);
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const material =
    pickSpecValue(product.specifications, (k) => k === "material") ??
    pickSpecValue(product.specifications, (k) => k.includes("material")) ??
    "—";

  const process =
    pickSpecValue(product.specifications, (k) => k === "process") ??
    pickSpecValue(product.specifications, (k) => k.includes("process")) ??
    "—";

  const specification =
    pickSpecValue(product.specifications, (k) => k === "size range") ??
    pickSpecValue(product.specifications, (k) => k.includes("size range")) ??
    pickSpecValue(product.specifications, (k) => k === "standard") ??
    pickSpecValue(product.specifications, (k) => k.includes("standard")) ??
    "—";

  const application = product.purpose || "—";
  const isValve = product.parentCategory === "Valves";
  const isPump = product.parentCategory === "Pumps";
  const isFitting = product.parentCategory === "Fittings";

  return (
    <PageShell currentPath="/products">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        {/* Navigation / Breadcrumb */}
        <SectionReveal>
          <div className="mb-8">
            <Link 
              href="/products" 
              className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-[#4f25e4] transition-colors"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white transition-colors group-hover:border-[#4f25e4]/50 group-hover:bg-[#4f25e4]/5">
                <ArrowLeft className="h-4 w-4" />
              </div>
              Back to Products
            </Link>
          </div>
        </SectionReveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Sticky Image Gallery */}
          <SectionReveal delay={0.1}>
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className={cn(
                "relative aspect-square overflow-hidden bg-neutral-50",
                pxn.radiusMajor,
                pxn.shadowMajor
              )}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholders/media.svg";
                  }}
                />
              </div>
              
            </div>
          </SectionReveal>

          {/* Right: Content */}
          <div className="space-y-12">
            <SectionReveal delay={0.2}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge tone="blue">{product.parentCategory}</Badge>
                  <span className="text-zinc-300">/</span>
                  <span className="text-sm font-medium text-zinc-500">{product.category}</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
                  {product.name}
                </h1>
                <p className="text-lg leading-relaxed text-zinc-600">
                  {product.description}
                </p>
              </div>
            </SectionReveal>


            {/* Full Specifications Table */}
            {product.specifications.length > 0 && (
              <SectionReveal delay={0.25}>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                    Detailed Specifications
                    <div className="h-1 flex-1 bg-neutral-100 ml-4 rounded-full" />
                  </h3>
                  <div className={cn(
                    "overflow-hidden border border-neutral-100",
                    pxn.radiusCard
                  )}>
                    <table className="w-full text-left text-sm">
                      <thead className="bg-neutral-50 text-zinc-500 uppercase tracking-wider font-bold text-[11px]">
                        <tr>
                          <th className="px-6 py-4">Parameter</th>
                          <th className="px-6 py-4">Standard Value / Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        {product.specifications.map((spec, idx) => (
                          <tr key={idx} className="bg-white hover:bg-neutral-50/50 transition-colors">
                            <td className="px-6 py-4 font-semibold text-zinc-800 w-1/3">{spec.key}</td>
                            <td className="px-6 py-4 text-zinc-600">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </SectionReveal>
            )}

            {/* Product Functions */}
            {product.functions && product.functions.length > 0 && (
              <SectionReveal delay={0.3}>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                    Key Functions
                    <div className="h-1 flex-1 bg-neutral-100 ml-4 rounded-full" />
                  </h3>
                  <div className="grid gap-4">
                    {product.functions.map((func, idx) => (
                      <div key={idx} className="flex gap-4 p-5 bg-neutral-50 rounded-2xl border border-neutral-100">
                        <div className="h-6 w-6 shrink-0 rounded-full bg-white flex items-center justify-center text-[#4f25e4] shadow-sm mt-1">
                          <Zap className="h-3.5 w-3.5" />
                        </div>
                        <p className="text-zinc-700 leading-relaxed text-sm font-medium">
                          {func}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            )}

            {/* Value Advantages */}
            {product.advantages && product.advantages.length > 0 && (
              <SectionReveal delay={0.35}>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                    Value Advantages
                    <div className="h-1 flex-1 bg-neutral-100 ml-4 rounded-full" />
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {product.advantages.map((adv, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 shrink-0 text-[#4f25e4]">
                          <ShieldCheck className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-semibold text-zinc-700">{adv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            )}

            {/* Application Scenarios */}
            {product.scenarios && product.scenarios.length > 0 && (
              <SectionReveal delay={0.4}>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                    Application Scenarios
                    <div className="h-1 flex-1 bg-neutral-100 ml-4 rounded-full" />
                  </h3>
                  <div className="grid gap-4">
                    {product.scenarios.map((scenario, idx) => (
                      <div key={idx} className="flex items-center gap-4 py-3 border-b border-neutral-100 last:border-0">
                        <div className="h-2 w-2 rounded-full bg-[#4f25e4] shrink-0" />
                        <span className="text-sm font-medium text-zinc-600 italic">
                          {scenario}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            )}

            {/* CTA Section */}
            <SectionReveal delay={0.5}>
              <div className="pt-8 border-t border-neutral-100">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className={cn(
                      "flex-1 inline-flex justify-center items-center bg-[#4f25e4] px-8 py-4 text-lg font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98]",
                      pxn.radiusCta
                    )}
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
