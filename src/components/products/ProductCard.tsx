'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { formatPrice } from '@/data/products';
import { ProductImage } from '@/components/common/ProductImage';
import { Eye, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  return (
    <div className="group relative bg-white dark:bg-[#0c162f] rounded-2xl border border-slate-200/90 dark:border-slate-800/90 shadow-xs hover:shadow-xl hover:border-amber-400/60 dark:hover:border-amber-400/50 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1">
      
      {/* Top Media Container */}
      <div className="relative w-full aspect-square bg-gradient-to-b from-blue-50/60 via-slate-50/40 to-white dark:from-slate-900/80 dark:via-[#0c162f] dark:to-[#0a1226] p-4 flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-800/80">
        
        {/* Floating Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
          {product.badge && (
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs tracking-wide border border-amber-300">
              {product.badge}
            </span>
          )}
          <span className="bg-[#0D3A8E] dark:bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
            {product.packSize}
          </span>
        </div>

        {/* Quick View Button on Hover */}
        {onQuickView && (
          <button
            type="button"
            onClick={() => onQuickView(product)}
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/95 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-white hover:bg-[#0D3A8E] dark:hover:bg-amber-500 dark:hover:text-slate-950 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100 border border-slate-200 dark:border-slate-700 cursor-pointer"
            title="Xem nhanh thông tin"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Product Image with smooth hover scale */}
        <Link href={`/products/${product.slug}`} className="w-full h-full flex items-center justify-center p-2">
          <ProductImage
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </Link>
      </div>

      {/* Content Container */}
      <div className="p-4 md:p-5 flex flex-col flex-1 bg-white dark:bg-[#0c162f] transition-colors">
        
        {/* Line & Packaging Bar */}
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="font-extrabold text-[#0D3A8E] dark:text-amber-400 uppercase tracking-wider text-[10px]">
            {product.brand} • {product.line === 'riso-gold' ? 'Riso Gold' : 'Opti Gold'}
          </span>
          <span className="text-slate-600 dark:text-slate-400 text-[10px] font-bold bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
            {product.packaging}
          </span>
        </div>

        {/* Product Title */}
        <Link href={`/products/${product.slug}`} className="group-hover:text-[#0D3A8E] dark:group-hover:text-amber-400 transition-colors">
          <h3 className="font-black text-slate-900 dark:text-white text-sm md:text-base leading-snug line-clamp-1 mb-1">
            {product.name}
          </h3>
        </Link>

        {/* Age Group Tag */}
        <div className="flex items-center gap-2 mb-2.5">
          <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-800/50">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Độ tuổi: <strong className="font-black">{product.ageLabel}</strong>
          </span>
        </div>

        {/* Price Tag if available */}
        {product.price && (
          <div className="mb-3 flex items-baseline gap-1.5">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Giá niêm yết:</span>
            <span className="text-base md:text-lg font-black text-[#0D3A8E] dark:text-amber-400">
              {formatPrice(product.price.amount)}
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">/ {product.price.unit}</span>
          </div>
        )}

        {/* Key Highlight (Claims from real packaging) */}
        <div className="space-y-1 mb-3.5 text-xs text-slate-600 dark:text-slate-400">
          {product.labelClaims.slice(0, 2).map((claim, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-amber-400 shrink-0" />
              <span className="truncate">{claim}</span>
            </div>
          ))}
        </div>

        {/* Action Row */}
        <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-[10px] text-amber-700 dark:text-amber-300 font-bold">
            <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
            <span className="truncate max-w-[120px]">{product.keyNutrients[0]}</span>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1 text-xs font-black text-[#0D3A8E] dark:text-amber-400 hover:text-blue-700 dark:hover:text-amber-300 transition-colors group/btn py-1 px-2.5 rounded-lg bg-blue-50 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700/80"
          >
            <span>Chi tiết</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>

    </div>
  );
}
