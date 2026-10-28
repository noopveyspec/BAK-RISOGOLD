import React from 'react';
import Link from 'next/link';
import { ShieldCheck, PhoneCall, Mail, MapPin, Sparkles, HeartHandshake, FileText, CheckCircle2 } from 'lucide-react';
import { DISTRIBUTOR, MANUFACTURER, SITE, BREASTFEEDING_NOTICE } from '@/data/company';

export function DashboardFooter() {
  return (
    <footer className="bg-slate-900 dark:bg-[#040814] text-slate-300 pt-12 pb-10 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-10 border-b border-slate-800">
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] dark:bg-slate-800/40 border border-slate-700/60">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-1">Công Thức FDI Thụy Điển</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Nghiên cứu bởi NNRIS Thụy Điển: Hỗ trợ tiêu hóa, đề kháng khỏe và hấp thu dinh dưỡng tối đa.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] dark:bg-slate-800/40 border border-slate-700/60">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-1">100% DHA Từ Tảo & HMO</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                DHA thuần khiết từ tảo biển tự nhiên, kết hợp cùng HMO và Lactoferrin cho trí não & hệ miễn dịch.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] dark:bg-slate-800/40 border border-slate-700/60">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/30">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-1">Phân Phối Độc Quyền Miền Nam</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Công ty TNHH BAK VN phân phối Nutifood chính hãng 100%, date mới, bảo quản chuẩn kho.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-10 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-3.5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1449B0] to-[#1C5CCF] flex items-center justify-center text-white border border-amber-400/60">
                <span className="font-black text-xs text-amber-300">RISO</span>
              </div>
              <span className="font-black text-lg text-white">
                Nutifood <span className="text-amber-400">RISO GOLD</span>
                <span className="text-xs font-semibold text-blue-300 ml-1.5 uppercase tracking-wider block sm:inline">
                  • {DISTRIBUTOR.shortName}
                </span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Hệ thống trưng bày, tra cứu giá bán và thông tin khoa học các dòng sữa bột lon 900g Riso Gold và sữa uống dinh dưỡng Riso Opti Gold đóng hộp giấy do Nutifood sản xuất.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Hotline đặt hàng & tư vấn: <strong className="text-white">{DISTRIBUTOR.phones[0].display}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Hotline hỗ trợ: <strong className="text-white">{DISTRIBUTOR.phones[1].display}</strong></span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>NPP Miền Nam: {DISTRIBUTOR.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Nhà sản xuất: {MANUFACTURER.name} – {MANUFACTURER.address}</span>
              </div>
            </div>
          </div>

          {/* Dòng sữa bột Riso Gold */}
          <div>
            <h5 className="text-amber-400 font-bold text-xs mb-3 uppercase tracking-wider">
              Sữa Bột Riso Gold Lon 900g
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/products/riso-gold-1-lon-900g" className="hover:text-amber-300 transition-colors">
                  Riso Gold 1 (0 – 6 tháng tuổi)
                </Link>
              </li>
              <li>
                <Link href="/products/riso-gold-2-lon-900g" className="hover:text-amber-300 transition-colors">
                  Riso Gold 2 (6 – 12 tháng tuổi)
                </Link>
              </li>
              <li>
                <Link href="/products/riso-gold-3-lon-900g" className="hover:text-amber-300 transition-colors">
                  Riso Gold 3 (1 – 2 tuổi)
                </Link>
              </li>
              <li>
                <Link href="/products/riso-gold-4-lon-900g" className="hover:text-amber-300 transition-colors">
                  Riso Gold 4 (Trên 2 tuổi)
                </Link>
              </li>
            </ul>
          </div>

          {/* Dòng sữa uống Riso Opti Gold */}
          <div>
            <h5 className="text-amber-400 font-bold text-xs mb-3 uppercase tracking-wider">
              Sữa Uống Riso Opti Gold
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/products/riso-opti-gold-hop-110ml" className="hover:text-amber-300 transition-colors">
                  Riso Opti Gold Hộp Giấy 110ml
                </Link>
              </li>
              <li>
                <Link href="/products/riso-opti-gold-hop-180ml" className="hover:text-amber-300 transition-colors">
                  Riso Opti Gold Hộp Giấy 180ml
                </Link>
              </li>
              <li>
                <Link href="/products#bang-gia" className="hover:text-amber-300 transition-colors font-semibold text-blue-300">
                  Bảng giá niêm yết theo thùng
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="hover:text-amber-300 transition-colors">
                  Cẩm nang dinh dưỡng FDI
                </Link>
              </li>
            </ul>
          </div>

          {/* Thông tin & Pháp lý */}
          <div>
            <h5 className="text-amber-400 font-bold text-xs mb-3 uppercase tracking-wider">
              Liên Kết Nhanh
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-amber-300 transition-colors">
                  Giới thiệu NPP BAK VN
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300 transition-colors">
                  Liên hệ & Báo giá đại lý
                </Link>
              </li>
              <li>
                <Link href="/knowledge/pha-sua-bot-an-toan" className="hover:text-amber-300 transition-colors">
                  Hướng dẫn pha sữa chuẩn NNRIS
                </Link>
              </li>
              <li>
                <Link href="/knowledge/bao-quan-sua-bot-va-sua-uong" className="hover:text-amber-300 transition-colors">
                  Quy chuẩn bảo quản sản phẩm
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Statutory Compliance Notice */}
        <div className="py-5 border-b border-slate-800 text-[11px] text-slate-400 leading-relaxed flex items-start gap-2.5">
          <FileText className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-200">Khuyến cáo dinh dưỡng:</strong> {BREASTFEEDING_NOTICE}
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 {DISTRIBUTOR.name}. Phân phối chính hãng Nutifood tại Miền Nam.</p>
          <p className="flex items-center gap-1.5 text-[11px]">
            <span>Thiết kế Dashboard hiện đại</span>
            <span>•</span>
            <span className="text-amber-400 font-medium">Bảo lưu mọi quyền</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
