/**
 * Pixend 样站（Framer）视觉对齐：以圆角 + 轻阴影分层，不使用描边边框。
 * 与 Hero 已落地的 `rounded-[30px]` CTA、`rounded-[32px]` FAQ 外壳一致。
 */
export const pixendVisual = {
  /** 无圆角（标签、分割线等） */
  radiusNone: "rounded-none",
  /** 顶区大媒体、About / Partnership 横幅 */
  radiusHeroMedia: "rounded-none",
  /** FAQ 主卡、证言区、定价侧栏、Let’s talk、About 侧栏信息卡 */
  radiusMajor: "rounded-none",
  /** 服务双列、流程三列、作品栅格外层 */
  radiusGrid: "rounded-none",
  /** 栅格卡内缩略图区域 */
  radiusInset: "rounded-none",
  /** 与 Hero 主按钮一致 */
  radiusCta: "rounded-none",
  /** 卡片通用圆角 */
  radiusCard: "rounded-none",
  /** 大浮层卡（同 FAQ 卡阴影气质） */
  shadowMajor:
    "shadow-[0_1px_0_rgba(0,0,0,0.04),0_24px_60px_rgba(0,0,0,0.08)]",
  /** 栅格卡片默认 */
  shadowGrid:
    "shadow-[0_8px_32px_rgba(0,0,0,0.06)]",
  shadowGridHover:
    "hover:shadow-[0_14px_44px_rgba(0,0,0,0.09)]",
  /** 浅底块（无强阴影） */
  shadowSoft: "shadow-[0_4px_24px_rgba(0,0,0,0.04)]",
} as const;
