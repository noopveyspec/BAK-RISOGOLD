import React from 'react';
import Link from 'next/link';
import type { Article } from '@/types';
import { ProductImage } from '@/components/common/ProductImage';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group bg-white dark:bg-[#0c162f] rounded-2xl border border-slate-200/90 dark:border-slate-800/90 shadow-xs hover:shadow-xl hover:border-amber-400/60 dark:hover:border-amber-400/50 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1">
      
      {/* Featured Image */}
      <Link href={`/knowledge/${article.slug}`} className="relative aspect-video w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
        <ProductImage
          src={article.image}
          alt={article.image.alt || article.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <span className="absolute top-3 left-3 bg-[#0D3A8E] dark:bg-blue-700 text-[#FBE7AC] text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs border border-amber-400/30">
          {article.category}
        </span>
      </Link>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        
        {/* Meta row */}
        <div className="flex items-center gap-2.5 text-[11px] text-slate-400 dark:text-slate-500 mb-2">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {article.publishedAt}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <Link href={`/knowledge/${article.slug}`} className="group-hover:text-[#0D3A8E] dark:group-hover:text-amber-400 transition-colors mb-2">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug line-clamp-2 min-h-[2.5rem]">
            {article.title}
          </h3>
        </Link>

        {/* Summary */}
        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 sm:line-clamp-3 leading-relaxed mb-4">
          {article.summary}
        </p>

        {/* Author & Read more */}
        <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
          <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1 truncate max-w-[140px] text-[11px]">
            <User className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="truncate">{article.author}</span>
          </span>

          <Link
            href={`/knowledge/${article.slug}`}
            className="inline-flex items-center gap-1 font-bold text-[#0D3A8E] dark:text-amber-400 hover:text-blue-700 dark:hover:text-amber-300 transition-colors"
          >
            <span>Đọc tiếp</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

      </div>

    </article>
  );
}
