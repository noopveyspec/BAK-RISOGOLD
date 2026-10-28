import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ProductImage } from '@/components/common/ProductImage';
import { MEDIA } from '@/data/media';
import { DISTRIBUTOR, MANUFACTURER, PRIMARY_PHONE, zaloLink } from '@/data/company';
import { 
  ShieldCheck, 
  Sparkles, 
  Eye, 
  Layers, 
  HeartHandshake, 
  CheckCircle2, 
  PhoneCall, 
  ArrowRight,
  Award,
  Building2,
  MapPin,
  MessageCircle,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Giới Thiệu — Công Ty TNHH BAK VN & Dòng Sữa Nutifood Riso Gold',
  description: 'Tìm hiểu về Công ty TNHH BAK VN – Nhà phân phối độc quyền khu vực Miền Nam các sản phẩm sữa Nutifood Riso Gold và Riso Opti Gold, cùng chuẩn mực minh bạch dữ liệu.',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Về chúng tôi' }]} />

      {/* Hero Banner in Riso Blue */}
      <section className="bg-gradient-to-r from-[#061A47] via-[#0D3A8E] to-[#1449B0] dark:from-[#050a17] dark:via-[#09142c] dark:to-[#0d2047] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl mb-12 border border-blue-900/60 dark:border-slate-800">
        <div className="max-w-3xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2C14E]/20 text-[#FBE7AC] text-xs font-bold mb-4 border border-[#F2C14E]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#F2C14E]" />
            <span>NHÀ PHÂN PHỐI ĐỘC QUYỀN MIỀN NAM</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 leading-tight">
            {DISTRIBUTOR.name} & Sứ Mệnh Dinh Dưỡng Vàng
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 dark:text-slate-300 leading-relaxed max-w-2xl">
            Đồng hành cùng sự phát triển khỏe mạnh của trẻ em Việt Nam thông qua việc cung cấp các sản phẩm sữa bột công thức Nutifood Riso Gold và sữa uống dinh dưỡng Riso Opti Gold chính hãng, bảo quản nghiêm ngặt và minh bạch giá niêm yết.
          </p>
        </div>
      </section>

      {/* Overview & Credentials */}
      <section className="mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D3A8E] dark:text-amber-400 block mb-2">
              Đối Tác Phân Phối Chiến Lược
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061A47] dark:text-white tracking-tight mb-4">
              Cam Kết 100% Ảnh Thật & Sản Phẩm Chính Hãng Nutifood
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                <strong>{DISTRIBUTOR.name}</strong> là đơn vị phân phối chính thức và độc quyền khu vực Miền Nam các sản phẩm mang thương hiệu <strong>Nutifood Riso Gold</strong> – dòng sữa đặc trị hỗ trợ hệ tiêu hóa khỏe mạnh, ngừa táo bón, tăng cường hấp thu và phát triển trí não cho trẻ.
              </p>
              <p>
                Trang web này được xây dựng như một không gian trưng bày kỹ thuật số, sử dụng <strong>100% hình ảnh thực tế</strong> chụp từ các lô bao bì lon thiếc 900g, thùng sữa hộp và văn bản bảng giá phân phối của công ty.
              </p>
              <p>
                Mọi thông số dinh dưỡng và công bố thành phần đều được bảo chứng bởi <strong>{MANUFACTURER.name}</strong> và viện nghiên cứu dinh dưỡng <strong>{MANUFACTURER.research}</strong>.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${PRIMARY_PHONE.tel}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0D3A8E] dark:bg-amber-500 text-[#FBE7AC] dark:text-slate-950 text-xs font-bold hover:bg-[#1449B0] dark:hover:bg-amber-400 transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#F2C14E] dark:text-slate-950" />
                <span>Hotline: {PRIMARY_PHONE.display}</span>
              </a>
              <a
                href={zaloLink(PRIMARY_PHONE.tel)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Tư Vấn Zalo</span>
              </a>
            </div>
          </div>

          <div className="relative aspect-4/3 w-full bg-[#F6F9FF] dark:bg-[#0c162f] rounded-3xl p-4 border border-slate-200 dark:border-slate-800 shadow-md flex items-center justify-center overflow-hidden">
            <ProductImage
              src={MEDIA.billboard}
              alt="Biển pano ngoài trời Riso Opti Gold"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-[#070e22]/95 backdrop-blur-xs p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg text-xs">
              <span className="font-bold text-[#0D3A8E] dark:text-amber-400 block mb-0.5">Hình ảnh truyền thông thực tế</span>
              <span className="text-slate-500 dark:text-slate-400 text-[11px]">Pano quảng cáo Riso Opti Gold – Dinh dưỡng Thụy Điển FDI</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section className="mb-14 pt-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D3A8E] dark:text-amber-400 block mb-1">
            Cam Kết Dịch Vụ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061A47] dark:text-white tracking-tight">
            4 Tiêu Chuẩn Phân Phối Của BAK VN
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0c162f] border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-[#0D3A8E] dark:text-blue-300 flex items-center justify-center font-bold mb-4">
              1
            </div>
            <h3 className="font-bold text-[#061A47] dark:text-white text-base mb-2">Chính Hãng 100%</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Trực tiếp từ nhà máy Nutifood Bình Dương, đầy đủ tem mác chống hàng giả và hạn sử dụng luôn luôn mới nhất.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0c162f] border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 flex items-center justify-center font-bold mb-4">
              2
            </div>
            <h3 className="font-bold text-[#061A47] dark:text-white text-base mb-2">Bảo Quản Chuẩn Kho</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Hệ thống kho lưu trữ khô thoáng, kiểm soát nhiệt độ nghiêm ngặt để bảo vệ hoạt tính của HMO, men vi sinh và vi chất.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0c162f] border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 flex items-center justify-center font-bold mb-4">
              3
            </div>
            <h3 className="font-bold text-[#061A47] dark:text-white text-base mb-2">Minh Bạch Bảng Giá</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Công khai bảng giá phân phối chính thức của NPP, đồng hành hỗ trợ giá tốt cho các đại lý bán lẻ và người tiêu dùng.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0c162f] border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/50 text-purple-800 dark:text-purple-300 flex items-center justify-center font-bold mb-4">
              4
            </div>
            <h3 className="font-bold text-[#061A47] dark:text-white text-base mb-2">Tư Vấn Chuẩn Y Khoa</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Đội ngũ am hiểu sản phẩm, hướng dẫn ba mẹ chọn đúng giai đoạn sữa theo độ tuổi và tuân thủ nguyên tắc bảo vệ sữa mẹ.
            </p>
          </div>
        </div>
      </section>

      {/* Real Price Sheet Document Showcase */}
      <section className="mb-14 bg-[#F6F9FF] dark:bg-[#0c162f] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative aspect-3/4 max-w-sm mx-auto w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md">
            <ProductImage
              src={MEDIA.priceList}
              alt="Bảng giá phân phối Riso Gold – Công ty TNHH BAK VN"
              className="w-full h-full object-contain bg-white dark:bg-slate-900"
            />
          </div>

          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D3A8E] dark:text-amber-400 block mb-2">
              Chứng Từ Phân Phối
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#061A47] dark:text-white mb-3">
              Bảng Giá Sản Phẩm Riso Gold Niêm Yết
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Văn bản được phát hành chính thức bởi <strong>{DISTRIBUTOR.name}</strong>, quy định giá bán cho 4 giai đoạn sữa bột lon Riso Gold 900g và 2 định dạng sữa uống dinh dưỡng Riso Opti Gold.
            </p>
            <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-[#070e22] p-4 rounded-xl border border-slate-200 dark:border-slate-800 mb-6">
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                <span>Trụ sở BAK VN:</span>
                <span className="font-semibold text-right">{DISTRIBUTOR.address}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                <span>Số điện thoại:</span>
                <span className="font-semibold">{DISTRIBUTOR.phones.map(p => p.display).join(' - ')}</span>
              </div>
              <div className="flex justify-between">
                <span>Khu vực phân phối:</span>
                <span className="font-semibold text-[#0D3A8E] dark:text-amber-400">{DISTRIBUTOR.role}</span>
              </div>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0D3A8E] dark:bg-amber-500 hover:bg-[#1449B0] dark:hover:bg-amber-400 text-[#FBE7AC] dark:text-slate-950 text-xs font-bold transition-colors shadow-xs cursor-pointer"
            >
              <span>Xem Chi Tiết Từng Sản Phẩm</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-gradient-to-r from-[#061A47] to-[#0D3A8E] dark:from-[#050a17] dark:to-[#0c1c3f] rounded-3xl p-8 sm:p-12 mb-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-blue-900/60 dark:border-slate-800">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">
            Đăng Ký Làm Đại Lý Hoặc Nhận Tư Vấn Sỉ?
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 dark:text-slate-300 max-w-xl leading-relaxed">
            Liên hệ trực tiếp với bộ phận kinh doanh của BAK VN để nhận chính sách chiết khấu tốt nhất cho các cửa hàng mẹ & bé tại khu vực Miền Nam.
          </p>
        </div>
        <Link
          href="/contact"
          className="bg-[#E2A922] hover:bg-[#F2C14E] text-[#061A47] px-7 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all shadow-md shrink-0 cursor-pointer"
        >
          Liên Hệ Báo Giá Đại Lý
        </Link>
      </section>

    </div>
  );
}
