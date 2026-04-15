"use client";

import { motion } from "framer-motion";

export const AuraBackground: React.FC = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute -left-1/4 top-0 h-[520px] w-[520px] rounded-full bg-brand-500/25 blur-[100px]"
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-1/4 top-24 h-[480px] w-[480px] rounded-full bg-accent/20 blur-[90px]"
        animate={{ opacity: [0.25, 0.5, 0.25], x: [0, 24, 0], y: [0, -16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/3 bottom-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-brand-700/20 blur-[80px]"
        animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(255,255,255,0.45),transparent_65%)]" />
    </div>
  );
};
