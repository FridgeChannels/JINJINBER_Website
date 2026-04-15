"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { Product } from "@/mock/products";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden bg-white transition-all duration-300",
        pxn.radiusCard,
        pxn.shadowGrid,
        "hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1"
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-neutral-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            // Fallback for missing AI images
            (e.target as HTMLImageElement).src = "/placeholders/media.svg";
          }}
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
        
        <div className="absolute bottom-3 right-3 translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex h-10 w-10 items-center justify-center rounded-none bg-white text-[#4f25e4] shadow-lg">
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="text-[10px] font-bold uppercase tracking-widest text-[#4f25e4] mb-1">
          {product.category}
        </div>
        <h3 className="text-base font-semibold text-zinc-900 line-clamp-2 leading-snug">
          {product.name}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-zinc-500 line-clamp-2">
          {product.description}
        </p>
      </div>
    </Link>
  );
};
