'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  TrendingUp, 
  BookOpen, 
  Building2, 
  PhoneCall, 
  Sparkles, 
  Layers, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  FileText,
  Milk,
  Image as ImageIcon,
  ExternalLink,
  X
} from 'lucide-react';
import { DISTRIBUTOR, PRIMARY_PHONE, SITE } from '@/data/company';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

interface DashboardSidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export function DashboardSidebar({
  collapsed,
  onToggleCollapse,
  mobileOpen,
  onCloseMobile,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  const navSections = [
    {
      group: 'Tổng Quan',
      items: [
        { label: 'Bảng Điều Khiển', href: '/', icon: LayoutDashboard },
        { label: 'Trưng Bày Nổi Bật', href: '/#san-pham', icon: Sparkles },
        { label: 'Bảng Giá Phân Phối', href: '/products#bang-gia', icon: TrendingUp },
      ],
    },
    {
      group: 'Danh Mục Sản Phẩm',
      items: [
        { label: 'Tất Cả 6 Sản Phẩm', href: '/products', icon: Package },
        { label: 'Lon Thiếc 900g (Stage 1-4)', href: '/products?line=riso-gold', icon: Milk },
        { label: 'Hộp Uống (110ml & 180ml)', href: '/products?line=riso-opti-gold', icon: Layers },
      ],
    },
    {
      group: 'Tài Liệu & Truyền Thông',
      items: [
        { label: 'Cẩm Nang Dinh Dưỡng', href: '/knowledge', icon: BookOpen },
        { label: 'Hình Ảnh Thực Tế', href: '/#thu-vien', icon: ImageIcon },
      ],
    },
    {
      group: 'Nhà Phân Phối BAK VN',
      items: [
        { label: 'Về BAK VN', href: '/about', icon: Building2 },
        { label: 'Liên Hệ & Báo Giá Sỉ', href: '/contact', icon: PhoneCall },
      ],
    },
  ];

  const sidebarContent = (
    <div className="h-full flex flex-col justify-between overflow-y-auto overflow-x-hidden p-3.5 select-none">
      {/* Top Brand Logo */}
      <div>
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80 dark:border-slate-800/80">
          <Link
            href="/"
            onClick={onCloseMobile}
            className={`flex items-center gap-3 transition-opacity duration-200 ${
              collapsed ? 'justify-center w-full' : ''
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D3A8E] to-[#1C5CCF] flex items-center justify-center text-white shadow-md shadow-blue-900/20 border border-amber-400/50 shrink-0">
              <span className="font-black text-xs tracking-tighter text-amber-300">RISO</span>
            </div>
            {!collapsed && (
              <div className="flex flex-col min-w-0">
                <span className="font-black text-sm tracking-tight text-slate-900 dark:text-white flex items-center gap-1 truncate">
                  Nutifood <span className="text-amber-500 font-extrabold">RISO GOLD</span>
                </span>
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 tracking-wider truncate">
                  NPP MIỀN NAM • BAK VN
                </span>
              </div>
            )}
          </Link>

          {/* Close button on mobile */}
          <button
            type="button"
            onClick={onCloseMobile}
            className="lg:hidden p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Đóng menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Groups */}
        <nav className="space-y-5">
          {navSections.map((sec, idx) => (
            <div key={idx}>
              {!collapsed && (
                <div className="px-3 mb-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {sec.group}
                </div>
              )}
              <div className="space-y-1">
                {sec.items.map((item) => {
                  const Icon = item.icon;
                  const isCurrent =
                    pathname === item.href ||
                    (item.href !== '/' && !item.href.includes('#') && pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onCloseMobile}
                      title={collapsed ? item.label : undefined}
                      className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                        isCurrent
                          ? 'bg-gradient-to-r from-blue-600/10 to-amber-500/10 text-blue-700 dark:text-amber-400 border border-blue-200/80 dark:border-amber-400/30 shadow-xs'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/60'
                      } ${collapsed ? 'justify-center px-0' : ''}`}
                    >
                      {/* Active Indicator bar */}
                      {isCurrent && (
                        <span className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-amber-400 rounded-r-full" />
                      )}
                      <Icon
                        className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                          isCurrent
                            ? 'text-blue-600 dark:text-amber-400'
                            : 'text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-amber-300'
                        }`}
                      />
                      {!collapsed && <span className="truncate">{item.label}</span>}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Profile / Quick Contact & Theme */}
      <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-slate-800/80 space-y-3">
        {/* Distributor Status Card */}
        {!collapsed && (
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-900/5 to-amber-500/5 dark:from-slate-800/80 dark:to-slate-800/40 border border-slate-200/80 dark:border-slate-800 text-xs">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-black text-slate-800 dark:text-slate-200 text-[11px] truncate">
                NPP BAK VN • Miền Nam
              </span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mb-2">
              Cam kết 100% sữa Nutifood chính hãng, date mới nhất.
            </p>
            <a
              href={`tel:${PRIMARY_PHONE.tel}`}
              className="inline-flex items-center gap-1.5 text-[11px] font-black text-blue-600 dark:text-amber-400 hover:underline"
            >
              <PhoneCall className="w-3 h-3" />
              <span>{PRIMARY_PHONE.display}</span>
            </a>
          </div>
        )}

        {/* Theme and Collapse Controls */}
        <div className={`flex items-center ${collapsed ? 'flex-col gap-2' : 'justify-between'}`}>
          <ThemeToggle showLabel={!collapsed} />

          {/* Desktop collapse toggle */}
          <button
            type="button"
            onClick={onToggleCollapse}
            className="hidden lg:flex p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label={collapsed ? 'Mở rộng thanh bên' : 'Thu gọn thanh bên'}
            title={collapsed ? 'Mở rộng thanh bên' : 'Thu gọn thanh bên'}
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside
        className={`hidden lg:flex flex-col shrink-0 sticky top-0 h-screen border-r border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-[#091124]/95 backdrop-blur-md transition-all duration-300 z-40 ${
          collapsed ? 'w-[76px]' : 'w-[260px]'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile / Tablet Off-canvas Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop Blur */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={onCloseMobile}
          />

          {/* Drawer content */}
          <div className="relative w-[280px] max-w-[85vw] h-full bg-white dark:bg-[#091124] border-r border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-300">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
