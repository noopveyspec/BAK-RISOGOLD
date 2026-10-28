'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { formatPrice } from '@/data/products';
import { ProductImage } from '@/components/common/ProductImage';
import { X, CheckCircle2, ArrowRight, Sparkles, Layers, ShieldCheck, Tag } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-[#0c162f] rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="overflow-y-auto p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Left: Product Image & Badges */}
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square relative bg-gradient-to-b from-blue-50/70 via-slate-50 to-white dark:from-slate-900/80 dark:to-[#0c162f] rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <ProductImage
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs border border-amber-300">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Pack info callout */}
              <div className="w-full mt-4 p-3 rounded-xl bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700 text-xs text-blue-950 dark:text-slate-200 flex items-start gap-2.5">
                <Layers className="w-4 h-4 text-blue-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Quy cách: {product.packaging}</span>
                  <span className="text-[11px] text-blue-800 dark:text-slate-400">Loại: {product.productType}</span>
                </div>
              </div>
            </div>

            {/* Right: Info & Nutrition */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0D3A8E] dark:text-amber-400 bg-blue-100/80 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                  {product.brand}
                </span>
                <span className="text-[10px] font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800/50">
                  {product.line === 'riso-gold' ? 'Sữa bột lon 900g' : 'Sữa uống dinh dưỡng'}
                </span>
              </div>

              <h2 className="text-lg md:text-xl font-black text-slate-900 dark:text-white leading-snug mb-2">
                {product.name}
              </h2>

              {/* Price display */}
              {product.price && (
                <div className="mb-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-amber-50/50 dark:from-slate-800/80 dark:to-slate-800/40 border border-blue-200 dark:border-slate-700 flex items-baseline gap-2">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Giá niêm yết:</span>
                  <span className="text-xl font-black text-[#0D3A8E] dark:text-amber-400">
                    {formatPrice(product.price.amount)}
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">/ {product.price.unit}</span>
                </div>
              )}

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {product.shortDescription}
              </p>

              {/* Quick specs pill */}
              <div className="grid grid-cols-2 gap-2 mb-5 text-xs">
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                  <span className="text-slate-400 dark:text-slate-500 block text-[10px] uppercase font-bold">Độ tuổi phù hợp</span>
                  <span className="font-extrabold text-blue-900 dark:text-amber-300 text-xs">{product.ageLabel}</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                  <span className="text-slate-400 dark:text-slate-500 block text-[10px] uppercase font-bold">Khối lượng / Thể tích</span>
                  <span className="font-extrabold text-blue-900 dark:text-amber-300 text-xs">{product.packSize}</span>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Công Dụng Nổi Bật Trên Bao Bì
                </h4>
                <ul className="space-y-1.5">
                  {product.labelClaims.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <span className="font-medium text-[11px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <Link
                  href={`/products/${product.slug}`}
                  className="flex-1 bg-[#0D3A8E] dark:bg-amber-500 hover:bg-[#1C5CCF] dark:hover:bg-amber-400 text-white dark:text-slate-950 py-2.5 px-4 rounded-xl text-center text-xs font-black transition-colors flex items-center justify-center gap-1.5 shadow-md border border-amber-400/40"
                  onClick={onClose}
                >
                  <span>Xem Chi Tiết Đầy Đủ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={onClose}
                  className="py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Đóng
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
