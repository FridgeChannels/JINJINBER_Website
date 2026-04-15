import Image from "next/image";
import { cn } from "@/lib/cn";

export interface PlaceholderMediaProps {
  /** 无障碍替代文本（开发对接真实图片后替换） */
  alt: string;
  /** 外层比例容器，例如 aspect-[4/3]、aspect-video、aspect-[21/9] */
  aspectClassName?: string;
  className?: string;
  /** LCP 等场景：首屏大图可设 true */
  priority?: boolean;
  /** 传给 next/image 的 sizes */
  sizes?: string;
}

/**
 * 使用本地 SVG 占位图，固定比例由 `aspectClassName` 撑开布局空间，
 * 后续将 `src` 换为真实资源即可（对接时替换组件或加 `src` prop）。
 */
export const PlaceholderMedia: React.FC<PlaceholderMediaProps> = ({
  alt,
  aspectClassName = "aspect-[4/3]",
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-zinc-100",
        aspectClassName,
        className,
      )}
    >
      <Image
        src="/placeholders/media.svg"
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-center"
        unoptimized
      />
    </div>
  );
};

export interface PlaceholderAvatarProps {
  alt: string;
  className?: string;
}

/** 圆形头像位，固定尺寸，避免 CLS */
export const PlaceholderAvatar: React.FC<PlaceholderAvatarProps> = ({
  alt,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative h-16 w-16 shrink-0 overflow-hidden rounded-none bg-zinc-100 md:h-20 md:w-20",
        className,
      )}
    >
      <Image
        src="/placeholders/media.svg"
        alt={alt}
        fill
        sizes="80px"
        className="object-cover object-center"
        unoptimized
      />
    </div>
  );
};
