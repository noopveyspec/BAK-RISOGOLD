'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Menu, 
  Search, 
  PhoneCall, 
  Sparkles, 
  ShieldCheck, 
  FileText,
  Layers,
  ArrowRight
} from 'lucide-react';
import { DISTRIBUTOR, PRIMARY_PHONE } from '@/data/company';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

interface DashboardTopNavProps {
  onOpenMobile: () => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export function DashboardTopNav({
  onOpenMobile,
  collapsed,
  onToggleCollapse,
}: DashboardTopNavProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/products');
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-[#070d1e]/85 backdrop-blur-md transition-colors duration-200">
      
      {/* Top Banner Notice - Compliance & Distributor Verification */}
      <div className="bg-[#061A47] dark:bg-[#040813] text-slate-100 text-[11px] py-1 px-4 border-b border-blue-900/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#1449B0]/60 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/30 font-bold text-[10px]">
              <ShieldCheck className="w-3 h-3" /> NPP Miền Nam: {DISTRIBUTOR.shortName}
            </span>
            <span className="hidden sm:inline text-blue-200 text-[11px]">
              Hệ thống trưng bày Nutifood Riso Gold & Riso Opti Gold — 100% Ảnh Thật
            </span>
          </div>
          <div className="flex items-center gap-3 text-blue-200 text-[11px]">
            <a
              href={`tel:${PRIMARY_PHONE.tel}`}
              className="hover:text-amber-300 transition-colors flex items-center gap-1 font-bold text-white"
            >
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span>Hotline: {PRIMARY_PHONE.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Topbar */}
      <div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        
        {/* Left: Mobile hamburger & breadcrumb / brand title */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={onOpenMobile}
            className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-hidden"
            aria-label="Mở menu điều hướng"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Quick Header Badge */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="truncate">Cổng Trưng Bày & Bảng Giá Dinh Dưỡng Nutifood</span>
          </div>
        </div>

        {/* Center: Global Search Bar */}
        <div className="flex-1 max-w-md mx-auto hidden md:block">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm sữa Riso Gold 1, 2, 3, 4, 110ml, 180ml..."
              className="w-full pl-9 pr-14 py-2 text-xs rounded-xl bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-blue-600 dark:focus:ring-amber-400 transition-all"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 px-2 py-1 rounded-lg bg-blue-600 dark:bg-amber-500 hover:bg-blue-700 dark:hover:bg-amber-400 text-white dark:text-slate-950 text-[10px] font-black transition-colors"
            >
              Tìm
            </button>
          </form>
        </div>

        {/* Right: Actions (Theme Toggle, Phone, Quote CTA) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <ThemeToggle />

          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-amber-400" />
            <span>Sản Phẩm</span>
          </Link>

          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#0D3A8E] to-[#1C5CCF] dark:from-amber-500 dark:to-amber-600 text-white dark:text-slate-950 text-xs font-black px-3.5 py-2 rounded-xl shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 border border-amber-400/40"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Báo Giá Sỉ</span>
            <span className="xs:hidden">Báo Giá</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
