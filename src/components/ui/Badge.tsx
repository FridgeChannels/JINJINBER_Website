import { cn } from "@/lib/cn";

export type BadgeTone = "blue" | "teal" | "amber" | "orange" | "slate";

const tones: Record<BadgeTone, string> = {
  blue: "bg-brand-100/90 text-brand-900 ring-brand-800/10",
  teal: "bg-teal-100/90 text-teal-900 ring-teal-800/10",
  amber: "bg-amber-100/90 text-amber-950 ring-amber-800/10",
  orange: "bg-accent/15 text-accent-dark ring-accent/25",
  slate: "bg-slate-100/90 text-slate-800 ring-slate-800/10",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

export const Badge: React.FC<BadgeProps> = ({
  tone = "blue",
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-none px-3 py-1 text-xs font-medium ring-1 ring-inset backdrop-blur-sm",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
