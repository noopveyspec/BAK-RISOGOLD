'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MediaAsset } from '@/types';

interface ProductImageProps {
  src: string | MediaAsset;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export function ProductImage({ src, alt, className = '', priority = false }: ProductImageProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const imageSrc = typeof src === 'string' ? src : src.src;
  const imageAlt = alt || (typeof src === 'object' ? src.alt : 'Sữa Nutifood Riso Gold');

  if (error || !imageSrc) {
    return (
      <div className={`relative flex flex-col items-center justify-center bg-blue-50/50 border border-blue-100 rounded-xl p-6 text-blue-400 ${className}`}>
        <div className="w-16 h-20 border-2 border-blue-200 rounded-lg relative flex flex-col items-center justify-center bg-white shadow-inner mb-2">
          <div className="absolute -top-2 w-14 h-3 bg-blue-200 rounded-full border border-blue-300" />
          <div className="w-8 h-8 rounded-full border border-amber-300 bg-amber-50 flex items-center justify-center">
            <span className="text-[10px] font-bold text-amber-600">RISO</span>
          </div>
          <div className="w-10 h-1 bg-blue-100 mt-2 rounded" />
          <div className="w-6 h-1 bg-blue-100 mt-1 rounded" />
        </div>
        <span className="text-xs text-blue-900 font-medium text-center">Nutifood Riso Gold</span>
        <span className="text-[10px] text-blue-400">Ảnh chính hãng</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
      {loading && (
        <div className="absolute inset-0 bg-blue-50/60 animate-pulse flex items-center justify-center z-10">
          <div className="w-8 h-8 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin" />
        </div>
      )}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={priority}
        className={`object-contain transition-all duration-300 ease-out ${
          loading ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
      />
    </div>
  );
}
