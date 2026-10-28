'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Search, 
  Menu, 
  X, 
  PhoneCall, 
  ShieldCheck, 
  Sparkles, 
  MessageSquare
} from 'lucide-react';
import { DISTRIBUTOR, PRIMARY_PHONE, SITE } from '@/data/company';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Sản phẩm Riso', href: '/products' },
    { label: 'Bảng giá', href: '/products#bang-gia' },
    { label: 'Cẩm nang dinh dưỡng', href: '/knowledge' },
    { label: 'Về BAK VN', href: '/about' },
    { label: 'Liên hệ', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Notification Bar in Deep Riso Blue */}
      <div className="bg-[#061A47] text-slate-100 text-[11px] md:text-xs py-1.5 px-4 border-b border-blue-900/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#1449B0]/60 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/30 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> NPP Miền Nam: {DISTRIBUTOR.shortName}
            </span>
            <span className="hidden sm:inline text-blue-100">
              Chuyên phân phối sữa Nutifood Riso Gold & Riso Opti Gold chính hãng
            </span>
          </div>
          <div className="flex items-center gap-4 text-blue-200">
            <a href={`tel:${PRIMARY_PHONE.tel}`} className="hover:text-amber-300 transition-colors flex items-center gap-1.5 font-bold text-white">
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span>Hotline: {PRIMARY_PHONE.display}</span>
            </a>
            <span className="hidden md:inline text-blue-400">|</span>
            <span className="hidden md:inline text-[11px] text-blue-200">0349 77 33 77</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-md py-3' 
          : 'bg-[#F6F9FF]/95 backdrop-blur-sm border-b border-blue-100 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo - RISO GOLD Style */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-[#0D3A8E] to-[#1C5CCF] flex items-center justify-center text-white shadow-md shadow-blue-900/25 group-hover:scale-105 transition-transform border border-amber-400/40">
              <span className="font-black text-sm tracking-tighter text-amber-300">RISO</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg md:text-xl tracking-tight text-[#0D3A8E] flex items-center gap-1">
                Nutifood <span className="text-amber-500 font-extrabold">RISO GOLD</span>
              </span>
              <span className="text-[10px] md:text-[11px] font-bold text-blue-700 tracking-wider">
                ĐỒNG HÀNH CÙNG PHÁT TRIỂN • BAK VN
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && !link.href.includes('#') && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? 'text-[#0D3A8E] bg-blue-100/80 shadow-xs'
                      : 'text-slate-700 hover:text-[#0D3A8E] hover:bg-blue-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/products"
              className="p-2 text-slate-600 hover:text-[#0D3A8E] hover:bg-blue-50 rounded-xl transition-colors flex items-center gap-1.5 text-sm font-semibold"
              title="Tìm kiếm sản phẩm"
            >
              <Search className="w-4 h-4 text-blue-700" />
              <span className="hidden xl:inline">Tra cứu</span>
            </Link>

            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#0D3A8E] to-[#1C5CCF] hover:from-[#061A47] hover:to-[#0D3A8E] text-white text-xs md:text-sm font-bold px-4 py-2.5 rounded-xl shadow-md shadow-blue-900/20 hover:shadow-lg transition-all flex items-center gap-2 group border border-amber-400/40"
            >
              <PhoneCall className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
              <span>Tư Vấn & Báo Giá</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-blue-900 hover:bg-blue-50 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Flyout Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-blue-100 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-base font-bold flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-50 text-[#0D3A8E]'
                      : 'text-slate-700 hover:bg-blue-50/50'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href="/products"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-50 text-[#0D3A8E] rounded-xl text-sm font-bold hover:bg-blue-100 transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>Xem danh mục 6 sản phẩm Riso</span>
            </Link>
            <a
              href={`tel:${PRIMARY_PHONE.tel}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#0D3A8E] text-white rounded-xl text-sm font-bold shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-amber-300" />
              <span>Gọi tư vấn: {PRIMARY_PHONE.display}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
