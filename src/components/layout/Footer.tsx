import React from 'react';
import Link from 'next/link';
import { ShieldCheck, PhoneCall, Mail, MapPin, Sparkles, HeartHandshake, FileText } from 'lucide-react';
import { DISTRIBUTOR, MANUFACTURER, SITE, BREASTFEEDING_NOTICE } from '@/data/company';

export function Footer() {
  return (
    <footer className="bg-[#061A47] text-blue-100 pt-16 pb-12 border-t-4 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-blue-900/80">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.04] border border-blue-400/15">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">Công Thức FDI Độc Quyền</h4>
              <p className="text-xs text-blue-200 leading-relaxed">
                Nghiên cứu bởi NNRIS – Viện Nghiên cứu Dinh dưỡng Nutifood Thụy Điển: đề kháng khỏe, tiêu hóa tốt, hấp thu tối đa.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.04] border border-blue-400/15">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">100% DHA Từ Tảo & HMO</h4>
              <p className="text-xs text-blue-200 leading-relaxed">
                Bổ sung DHA thuần khiết từ tảo biển, đại dưỡng chất HMO và Lactoferrin giúp não bộ và hệ miễn dịch phát triển vượt trội.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.04] border border-blue-400/15">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">Phân Phối Độc Quyền Miền Nam</h4>
              <p className="text-xs text-blue-200 leading-relaxed">
                Công ty TNHH BAK VN cam kết nguồn hàng Nutifood chính hãng 100%, date mới, vận chuyển chuẩn kho và giá ổn định.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-blue-900/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1449B0] to-[#1C5CCF] flex items-center justify-center text-white border border-amber-400">
                <span className="font-black text-sm text-amber-300">RISO</span>
              </div>
              <span className="font-black text-xl text-white">
                Nutifood <span className="text-amber-400">RISO GOLD</span>
                <span className="text-xs font-semibold text-blue-300 ml-1.5 uppercase tracking-wider block sm:inline">
                  • {DISTRIBUTOR.shortName}
                </span>
              </span>
            </Link>

            <p className="text-xs text-blue-200 leading-relaxed max-w-sm">
              Hệ thống trưng bày, tra cứu giá bán và thông tin khoa học các dòng sữa bột lon 900g Riso Gold và sữa uống dinh dưỡng Riso Opti Gold đóng hộp giấy do Nutifood sản xuất.
            </p>

            <div className="space-y-2 text-xs text-blue-100 pt-2">
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Hotline đặt hàng & tư vấn: <strong className="text-white text-sm">{DISTRIBUTOR.phones[0].display}</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Hotline hỗ trợ: <strong className="text-white text-sm">{DISTRIBUTOR.phones[1].display}</strong></span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>NPP Miền Nam: {DISTRIBUTOR.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Nhà sản xuất: {MANUFACTURER.name} – {MANUFACTURER.address}</span>
              </div>
            </div>
          </div>

          {/* Dòng sữa bột Riso Gold */}
          <div>
            <h5 className="text-amber-400 font-bold text-sm mb-4 tracking-wide uppercase">
              Sữa Bột Riso Gold Lon 900g
            </h5>
            <ul className="space-y-2.5 text-xs text-blue-200">
              <li>
                <Link href="/products/riso-gold-1-lon-900g" className="hover:text-amber-300 transition-colors font-medium">
                  Riso Gold 1 (0 – 6 tháng tuổi)
                </Link>
              </li>
              <li>
                <Link href="/products/riso-gold-2-lon-900g" className="hover:text-amber-300 transition-colors font-medium">
                  Riso Gold 2 (6 – 12 tháng tuổi)
                </Link>
              </li>
              <li>
                <Link href="/products/riso-gold-3-lon-900g" className="hover:text-amber-300 transition-colors font-medium">
                  Riso Gold 3 (1 – 2 tuổi)
                </Link>
              </li>
              <li>
                <Link href="/products/riso-gold-4-lon-900g" className="hover:text-amber-300 transition-colors font-medium">
                  Riso Gold 4 (2 – 6 tuổi)
                </Link>
              </li>
            </ul>
          </div>

          {/* Dòng sữa uống Riso Opti Gold */}
          <div>
            <h5 className="text-amber-400 font-bold text-sm mb-4 tracking-wide uppercase">
              Sữa Uống Riso Opti Gold
            </h5>
            <ul className="space-y-2.5 text-xs text-blue-200">
              <li>
                <Link href="/products/riso-opti-gold-110ml-thung-24-hop" className="hover:text-amber-300 transition-colors font-medium">
                  Hộp 110ml (Thùng 24 hộp)
                </Link>
              </li>
              <li>
                <Link href="/products/riso-opti-gold-180ml-thung-24-hop" className="hover:text-amber-300 transition-colors font-medium">
                  Hộp 180ml (Thùng 24 hộp)
                </Link>
              </li>
              <li>
                <Link href="/products#bang-gia" className="hover:text-amber-300 transition-colors font-medium text-amber-300">
                  Xem bảng giá niêm yết →
                </Link>
              </li>
            </ul>
          </div>

          {/* Cẩm nang & Doanh nghiệp */}
          <div>
            <h5 className="text-amber-400 font-bold text-sm mb-4 tracking-wide uppercase">
              Thông Tin & Cẩm Nang
            </h5>
            <ul className="space-y-2.5 text-xs text-blue-200">
              <li>
                <Link href="/knowledge/chon-riso-gold-theo-do-tuoi" className="hover:text-amber-300 transition-colors">
                  Chọn Riso Gold theo độ tuổi
                </Link>
              </li>
              <li>
                <Link href="/knowledge/pha-sua-bot-an-toan" className="hover:text-amber-300 transition-colors">
                  Quy trình pha sữa an toàn
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-300 transition-colors">
                  Về nhà phân phối BAK VN
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300 transition-colors">
                  Liên hệ báo giá đại lý
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Medical Notice */}
        <div className="py-6 border-b border-blue-900/60 text-[11px] text-blue-300 leading-relaxed space-y-2">
          <p className="flex items-center gap-1.5 text-amber-300 font-bold">
            <FileText className="w-3.5 h-3.5" />
            <span>Thông báo tuân thủ quy định y tế & dinh dưỡng:</span>
          </p>
          <p>
            {BREASTFEEDING_NOTICE}
          </p>
          <p className="text-blue-400">
            Website giới thiệu và trưng bày thông tin sản phẩm phục vụ tra cứu chính xác theo tài liệu của nhà sản xuất Nutifood và bảng giá của nhà phân phối BAK VN.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-400 gap-3">
          <p>© 2026 {DISTRIBUTOR.name}. Nhà phân phối độc quyền khu vực Miền Nam.</p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-white transition-colors">Chính sách phân phối</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">Liên hệ đại lý</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
