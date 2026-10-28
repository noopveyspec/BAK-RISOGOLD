import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`py-3 text-xs text-slate-500 dark:text-slate-400 ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5 md:gap-2">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#0D3A8E] dark:hover:text-amber-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Trang chủ</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5 md:gap-2">
              <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600" />
              {isLast || !item.href ? (
                <span className="font-semibold text-slate-900 dark:text-slate-100 line-clamp-1 max-w-[200px] md:max-w-xs" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#0D3A8E] dark:hover:text-amber-400 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
