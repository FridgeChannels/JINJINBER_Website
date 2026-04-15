import { cn } from "@/lib/cn";

export interface PixendSectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const PixendSectionLabel: React.FC<PixendSectionLabelProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500",
        className,
      )}
    >
      {children}
    </p>
  );
};
