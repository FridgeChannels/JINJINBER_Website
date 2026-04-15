import { PixendSectionLabel } from "@/components/pixend/PixendPrimitives";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";

export const PixendLetsTalk: React.FC = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <PixendSectionLabel>Let&apos;s talk</PixendSectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
              Ready to engineer your next project together?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
              Tell us about standards, quantities, and delivery—our team will follow
              up with clarifying questions and next steps.
            </p>
          </div>

          <div className="grid gap-6 md:col-span-7 md:grid-cols-2">
            <div
              className={cn("bg-neutral-50 p-6", pxn.radiusMajor, pxn.shadowMajor)}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Sales
              </div>
              <a
                className="mt-3 block text-lg font-semibold text-zinc-900 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                href="mailto:sales@jinjieber.com"
              >
                sales@jinjieber.com
              </a>
              <div className="mt-4 text-sm text-zinc-600">RFQs, line lists, and project support</div>
            </div>

            <div
              className={cn("bg-neutral-50 p-6", pxn.radiusMajor, pxn.shadowMajor)}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Phone
              </div>
              <div className="mt-3 text-lg font-semibold text-zinc-900">+86-XXX-XXXX-XXXX</div>
              <div className="mt-4 text-sm text-zinc-600">China headquarters (placeholder)</div>
            </div>

            <div
              className={cn(
                "bg-neutral-50 p-6 md:col-span-2",
                pxn.radiusMajor,
                pxn.shadowMajor,
              )}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Office
              </div>
              <div className="mt-3 text-sm leading-relaxed text-zinc-600">
                Headquarters address (placeholder), China
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
