import { cn } from "@/lib/cn";

/**
 * 区块容器（原滚动入场动画已移除）。
 * `whileInView` + `opacity:0` 在部分浏览器 / 布局下会导致 intersection 永不触发，
 * 从而整页正文长期透明；全站文字不可见即由此引起。
 */
export interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  /** 保留 prop 以免大量调用处报错；不再使用 */
  delay?: number;
}

export const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  className,
}) => {
  return <div className={cn(className)}>{children}</div>;
};
