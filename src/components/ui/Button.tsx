"use client";

import Link from "next/link";
import type { LinkProps } from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-none font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-800 text-white shadow-button hover:bg-brand-900 active:bg-brand-950 focus-visible:ring-brand-700/40",
  secondary:
    "border border-zinc-300 bg-white text-zinc-900 shadow-sm hover:bg-zinc-50 active:bg-zinc-100 focus-visible:ring-brand-700/35",
  ghost:
    "text-zinc-600 hover:bg-zinc-100/80 hover:text-zinc-950 active:bg-zinc-100 focus-visible:ring-brand-700/30",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-10 px-4 py-2 text-sm",
  lg: "min-h-12 px-6 py-3 text-base",
};

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  form?: string;
  name?: string;
  value?: string | ReadonlyArray<string> | number;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  disabled,
  onClick,
  form,
  name,
  value,
}) => {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      form={form}
      name={name}
      value={value}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </motion.button>
  );
};

export interface ButtonLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  variant = "primary",
  size = "md",
  children,
  ...linkProps
}) => {
  return (
    <Link
      {...linkProps}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
};
