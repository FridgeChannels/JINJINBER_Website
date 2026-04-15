import { cn } from "@/lib/cn";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "article" | "section";
}

export const GlassCard: React.FC<GlassCardProps> = ({
  as: Tag = "div",
  className,
  children,
  ...props
}) => {
  return (
    <Tag
      className={cn(
        "rounded-none border-0 bg-white/95 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-md md:p-6",
        "transition-shadow duration-300 hover:shadow-[0_14px_44px_rgba(0,0,0,0.09)] hover:bg-white",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
