import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProducts, getProducts, LINE_INFO, FORMAT_INFO, formatPrice } from '@/data/products';
import { getArticles } from '@/data/articles';
import { MEDIA } from '@/data/media';
import { DISTRIBUTOR, MANUFACTURER, PRIMARY_PHONE, zaloLink, BREASTFEEDING_NOTICE } from '@/data/company';
import { ProductCard } from '@/components/products/ProductCard';
import { ArticleCard } from '@/components/knowledge/ArticleCard';
import { ProductImage } from '@/components/common/ProductImage';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  PhoneCall,
  Award,
  BookOpen,
  Image as ImageIcon,
  Building2,
  FileText,
  Heart,
  MessageCircle,
  TrendingUp,
  PackageCheck,
  Milk,
  Boxes
} from 'lucide-react';

export default function HomePage() {
  const allProducts = getProducts();
  const articles = getArticles().slice(0, 3);

  // Gallery of real assets extracted from /picture
  const realGallery = [
    {
      title: 'Biển quảng cáo pano ngoài trời Riso Opti Gold',
      desc: 'Thông điệp "Dinh dưỡng hôm nay – Thành công ngày mai" & Công thức Thụy Điển FDI.',
      media: MEDIA.billboard,
      tag: 'Truyền thông thực tế',
    },
    {
      title: 'Đoàn tàu sữa Riso trên cánh đồng trang trại',
      desc: 'Hình ảnh đồ họa truyền thông Riso Opti Gold cùng đàn bò sữa vui nhộn.',
      media: MEDIA.farm,
      tag: 'Hình ảnh thương hiệu',
    },
    {
      title: 'Poster công thức FDI Thụy Điển',
      desc: 'Công thức FDI đặc chế: Hỗ trợ tiêu hóa, đề kháng, tăng cân và phát triển chiều cao.',
      media: MEDIA.opti180Fdi,
      tag: 'Công nghệ Thụy Điển',
    },
    {
      title: 'Poster "Lên rừng khám phá" Riso Opti Gold 180ml',
      desc: 'Hình ảnh bé vui khỏe khám phá thiên nhiên cùng hộp sữa Riso Opti Gold 180ml.',
      media: MEDIA.opti180Swing,
      tag: 'Poster sản phẩm',
    },
    {
      title: 'Bảng giá phân phối Riso Gold – BAK VN',
      desc: 'Bảng giá phân phối chính thức của NPP BAK VN cho các dòng sữa bột lon và sữa uống.',
      media: MEDIA.priceList,
      tag: 'Tài liệu pháp lý & Giá',
    },
    {
      title: 'Bao bì thùng 24 hộp Riso Opti Gold 110ml',
      desc: 'Chụp thực tế mặt trước và quy cách đóng thùng 24 hộp thực phẩm bổ sung.',
      media: MEDIA.opti110Carton,
      tag: 'Bao bì thực tế',
    },
  ];

  // Quick Dashboard KPI Metrics
  const dashboardKpis = [
    {
      label: 'Sản Phẩm Trưng Bày',
      value: '6 SKU Thật',
      sub: '4 lon 900g & 2 hộp uống',
      icon: Milk,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      label: 'Bảng Giá Niêm Yết',
      value: 'BAK VN',
      sub: 'Cập nhật phân phối Miền Nam',
      icon: TrendingUp,
      color: 'from-amber-500 to-yellow-600',
    },
    {
      label: 'Viện NNRIS Thụy Điển',
      value: 'Công Thức FDI',
      sub: 'HMO • FOS • 100% DHA Tảo',
      icon: Award,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      label: 'Kho Phân Phối',
      value: 'Miền Nam',
      sub: '100% Date mới chính hãng',
      icon: PackageCheck,
      color: 'from-blue-600 to-blue-800',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO DASHBOARD SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#061A47] via-[#0A2563] to-[#0D3A8E] dark:from-[#050a17] dark:via-[#081329] dark:to-[#0c1c3f] text-white pt-8 pb-14 lg:pt-12 lg:pb-20 border-b border-blue-900/60 dark:border-slate-800">
        
        {/* Subtle background glow effect */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold mb-4 tracking-wide shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>PHÂN PHỐI BỞI {DISTRIBUTOR.name.toUpperCase()} (MIỀN NAM)</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
                Trưng Bày Dinh Dưỡng Vàng <span className="text-[#F2C14E]">Nutifood Riso Gold</span> & <span className="text-[#F2C14E]">Opti Gold</span>
              </h1>

              <p className="text-xs sm:text-sm text-blue-100 dark:text-slate-300 leading-relaxed max-w-xl mb-7">
                Cổng thông tin và dashboard tra cứu minh bạch 100% hình ảnh thật từ bao bì sản phẩm: Sữa bột Riso Gold lon 900g (Stage 1 – 4) và Sữa uống dinh dưỡng Riso Opti Gold (110ml & 180ml). Ứng dụng công thức FDI độc quyền từ Viện Nghiên cứu Dinh dưỡng Nutifood Thụy Điển (NNRIS).
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
                <Link
                  href="/products"
                  className="w-full sm:w-auto bg-[#E2A922] hover:bg-[#F2C14E] text-[#061A47] px-6 py-3 rounded-xl font-black text-xs sm:text-sm shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Xem Toàn Bộ 6 Sản Phẩm Thật</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={`tel:${PRIMARY_PHONE.tel}`}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-blue-300/40 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 backdrop-blur-xs cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Hotline: {PRIMARY_PHONE.display}</span>
                </a>
              </div>

              {/* Fast Stats Row */}
              <div className="grid grid-cols-3 gap-4 pt-5 border-t border-blue-400/20 dark:border-slate-800 w-full max-w-lg">
                <div>
                  <span className="block text-xl sm:text-2xl font-black text-[#F2C14E]">100%</span>
                  <span className="text-[10px] sm:text-[11px] text-blue-200 dark:text-slate-400 font-medium">Ảnh thật từ thư mục picture</span>
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-black text-[#F2C14E]">4 Giai Đoạn</span>
                  <span className="text-[10px] sm:text-[11px] text-blue-200 dark:text-slate-400 font-medium">Riso Gold lon thiếc 900g</span>
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-black text-[#F2C14E]">BAK VN</span>
                  <span className="text-[10px] sm:text-[11px] text-blue-200 dark:text-slate-400 font-medium">Bảng giá niêm yết chính hãng</span>
                </div>
              </div>

            </div>

            {/* Right Media Display (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              
              {/* Product Hero Podiums */}
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-tr from-white/10 to-white/5 dark:from-slate-800/40 dark:to-slate-900/40 p-6 md:p-8 shadow-2xl border border-white/20 dark:border-slate-700/60 flex items-center justify-center backdrop-blur-md">
                
                {/* Floating Badge Top Right */}
                <div className="absolute top-4 right-4 bg-[#E2A922] text-[#061A47] text-[10px] font-black px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5 z-20">
                  <Award className="w-4 h-4 text-[#061A47]" />
                  <span>Công Thức FDI Thụy Điển</span>
                </div>

                {/* Hero Milk Tin Image (Riso Gold 1 real photo) */}
                <div className="w-full h-full relative flex items-center justify-center animate-float-soft">
                  <ProductImage
                    src={MEDIA.riso1}
                    alt="Nutifood Riso Gold lon thiếc 900g ảnh chụp thực tế"
                    className="w-full h-full object-contain filter drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Floating Feature Tag Bottom Left */}
                <div className="absolute -bottom-4 -left-3 bg-[#061A47]/95 dark:bg-[#070e22]/95 border border-[#F2C14E]/40 p-3 rounded-2xl shadow-xl flex items-center gap-3 z-20 max-w-[260px] text-white backdrop-blur-md">
                  <div className="w-8 h-8 rounded-xl bg-[#E2A922] text-[#061A47] flex items-center justify-center shrink-0 font-black">
                    <Sparkles className="w-4 h-4 text-[#061A47]" />
                  </div>
                  <div className="text-[10px]">
                    <span className="font-bold text-[#FBE7AC] block">Lon thiếc 900g chuẩn</span>
                    <span className="text-blue-200 dark:text-slate-300">HMO • FOS • 100% DHA tảo</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* DASHBOARD METRICS BAR */}
      <section className="bg-slate-100/80 dark:bg-[#091124] border-b border-slate-200 dark:border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {dashboardKpis.map((kpi, idx) => {
              const Icon = kpi.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#0c162f] p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${kpi.color} text-white flex items-center justify-center shrink-0 shadow-xs`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold block uppercase tracking-wider truncate">
                      {kpi.label}
                    </span>
                    <strong className="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate block">
                      {kpi.value}
                    </strong>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate block">
                      {kpi.sub}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mandatory Breastfeeding Legal Notice */}
      <div className="bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-900/40 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-xs text-amber-950 dark:text-amber-200">
          <Heart className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <p className="leading-relaxed text-[11px] sm:text-xs">
            <strong className="font-bold">Khuyến cáo y tế:</strong> {BREASTFEEDING_NOTICE}
          </p>
        </div>
      </div>

      {/* 2. TWO MAIN PRODUCT LINES SHOWCASE */}
      <section className="py-12 bg-white dark:bg-[#070d1e] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0D3A8E] dark:text-amber-400 block mb-1">
              Danh Mục Sản Phẩm Độc Quyền
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Hai Dòng Sản Phẩm Riso Từ Nutifood
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              Dựa trên tài liệu công bố và bảng giá phân phối của Công ty TNHH BAK VN tại Miền Nam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Line 1: Riso Gold Lon 900g */}
            <div className="bg-slate-50/70 dark:bg-[#0c162f] rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/50 text-[#0D3A8E] dark:text-blue-300 text-xs font-bold px-3 py-1 rounded-full">
                    Sữa bột công thức lon thiếc
                  </span>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400">4 Giai đoạn (Số 1 – 4)</span>
                </div>

                <div className="flex gap-4 items-center mb-5">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-white dark:bg-slate-800 rounded-2xl p-2 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                    <ProductImage src={MEDIA.riso1} alt="Riso Gold 900g" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">Nutifood Riso Gold</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Quy cách lon 900g. Ứng dụng công thức FDI (HMO – FOS), 100% DHA từ tảo. Giúp bé tăng cân khỏe mạnh, hấp thu tốt và phát triển trí não.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs mb-5">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Riso Gold 1 & 2:</span>
                    <strong className="text-slate-900 dark:text-white font-black">580.000 đ / lon</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Riso Gold 3 & 4:</span>
                    <strong className="text-slate-900 dark:text-white font-black">540k & 520k / lon</strong>
                  </div>
                </div>
              </div>

              <Link
                href="/products?line=riso-gold"
                className="w-full py-2.5 rounded-xl bg-[#0D3A8E] dark:bg-blue-600 hover:bg-[#1449B0] dark:hover:bg-blue-700 text-[#FBE7AC] text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Xem 4 Sản Phẩm Riso Gold Lon 900g</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Line 2: Riso Opti Gold Hộp Uống */}
            <div className="bg-slate-50/70 dark:bg-[#0c162f] rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 text-xs font-bold px-3 py-1 rounded-full">
                    Sữa uống dinh dưỡng tiện lợi
                  </span>
                  <span className="text-xs font-bold text-[#0D3A8E] dark:text-amber-400">Hộp 110ml & 180ml</span>
                </div>

                <div className="flex gap-4 items-center mb-5">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-white dark:bg-slate-800 rounded-2xl p-2 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                    <ProductImage src={MEDIA.opti180Front} alt="Riso Opti Gold 180ml" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">Nutifood Riso Opti Gold</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Sữa uống dinh dưỡng dạng hộp giấy cho trẻ trên 1 tuổi. Bổ sung DHA, HMO, Lactoferrin, Canxi. Đóng thùng 24 hộp tiện mang theo.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs mb-5">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Thùng 24 hộp 110ml:</span>
                    <strong className="text-slate-900 dark:text-white font-black">250.000 đ / thùng</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Thùng 24 hộp 180ml:</span>
                    <strong className="text-slate-900 dark:text-white font-black">380.000 đ / thùng</strong>
                  </div>
                </div>
              </div>

              <Link
                href="/products?line=riso-opti-gold"
                className="w-full py-2.5 rounded-xl bg-[#0D3A8E] dark:bg-amber-500 hover:bg-[#1449B0] dark:hover:bg-amber-400 text-[#FBE7AC] dark:text-slate-950 text-xs font-black text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Xem Dòng Riso Opti Gold (110ml & 180ml)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED REAL PRODUCTS CATALOG GRID */}
      <section id="san-pham" className="py-14 bg-slate-50/50 dark:bg-[#060b18] border-b border-slate-200 dark:border-slate-800 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0D3A8E] dark:text-amber-400 block mb-1">
                Sản Phẩm Trưng Bày Thực Tế
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Danh Mục Sữa Riso Nổi Bật
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0D3A8E] dark:text-amber-400 hover:underline"
            >
              <span>Xem toàn bộ 6 sản phẩm</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. REAL PHOTO & DOCUMENT SHOWCASE GALLERY FROM /PICTURE */}
      <section id="thu-vien" className="py-14 bg-white dark:bg-[#070d1e] border-b border-slate-200 dark:border-slate-800 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-slate-800 text-[#0D3A8E] dark:text-amber-300 text-xs font-bold mb-2">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>TOÀN BỘ ẢNH THẬT TỪ THƯ MỤC PICTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
              Bộ Sưu Tập Tư Liệu Hình Ảnh & Bảng Giá Phân Phối
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Trang web cam kết sử dụng 100% hình ảnh thật được xử lý trực tiếp từ các tệp ảnh bao bì, áp phích truyền thông và bảng giá phân phối chính thức của Công ty TNHH BAK VN.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realGallery.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 dark:bg-[#0c162f] rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-4/3 w-full bg-white dark:bg-slate-800/60 overflow-hidden flex items-center justify-center p-4">
                  <ProductImage
                    src={item.media}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#0D3A8E] dark:bg-blue-700 text-[#FBE7AC] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                    {item.tag}
                  </span>
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5 group-hover:text-[#0D3A8E] dark:group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. DISTRIBUTOR BAK VN & CREDENTIALS SECTION */}
      <section className="py-14 bg-gradient-to-br from-[#061A47] via-[#092257] to-[#0D3A8E] dark:from-[#040814] dark:via-[#071026] dark:to-[#0a1838] text-white border-b border-blue-900/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
                Hệ Thống Phân Phối Độc Quyền Miền Nam
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {DISTRIBUTOR.name}
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 dark:text-slate-300 leading-relaxed mb-6">
                Với vai trò là nhà phân phối độc quyền khu vực Miền Nam cho các sản phẩm Nutifood Riso Gold và Riso Opti Gold, BAK VN cam kết mang đến nguồn sữa chính hãng, bảo quản đúng tiêu chuẩn nhiệt độ và độ ẩm, cùng bảng giá niêm yết minh bạch.
              </p>

              <div className="space-y-2.5 text-xs text-blue-200 dark:text-slate-300 mb-6">
                <div className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Địa chỉ:</strong> {DISTRIBUTOR.address}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <PhoneCall className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Hotline hỗ trợ:</strong> {DISTRIBUTOR.phones.map(p => p.display).join(' — ')}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Nhà sản xuất:</strong> {MANUFACTURER.name} ({MANUFACTURER.research})</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${PRIMARY_PHONE.tel}`}
                  className="px-5 py-2.5 rounded-xl bg-[#E2A922] hover:bg-[#F2C14E] text-[#061A47] font-black text-xs uppercase tracking-wide transition-colors cursor-pointer"
                >
                  Gọi Tư Vấn {PRIMARY_PHONE.display}
                </a>
                <a
                  href={zaloLink(PRIMARY_PHONE.tel)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wide transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Nhắn Zalo Nhận Báo Giá Sỉ</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white/10 dark:bg-slate-800/50 p-6 rounded-3xl border border-white/20 dark:border-slate-700 backdrop-blur-md">
                <h3 className="font-bold text-[#FBE7AC] text-sm mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Bảng Giá Niêm Yết BAK VN (Tóm tắt)</span>
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-white/10">
                    <span className="text-blue-100 dark:text-slate-300">Riso Gold 1 (lon 900g):</span>
                    <strong className="text-white">580.000 đ</strong>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/10">
                    <span className="text-blue-100 dark:text-slate-300">Riso Gold 2 (lon 900g):</span>
                    <strong className="text-white">580.000 đ</strong>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/10">
                    <span className="text-blue-100 dark:text-slate-300">Riso Gold 3 (lon 900g):</span>
                    <strong className="text-white">540.000 đ</strong>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/10">
                    <span className="text-blue-100 dark:text-slate-300">Riso Gold 4 (lon 900g):</span>
                    <strong className="text-white">520.000 đ</strong>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/10">
                    <span className="text-blue-100 dark:text-slate-300">Riso Opti Gold 110ml (thùng 24h):</span>
                    <strong className="text-white">250.000 đ</strong>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/10">
                    <span className="text-blue-100 dark:text-slate-300">Riso Opti Gold 180ml (thùng 24h):</span>
                    <strong className="text-white">380.000 đ</strong>
                  </div>
                </div>
                <p className="text-[10px] text-blue-300 dark:text-slate-400 mt-3 italic">
                  * Trích xuất trực tiếp từ văn bản bảng giá chính thức đính kèm ảnh thực tế.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. NUTRITION HANDBOOK & SCIENCE GUIDANCE */}
      <section className="py-14 bg-slate-50/50 dark:bg-[#060b18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0D3A8E] dark:text-amber-400 block mb-1">
                Cẩm Nang Dinh Dưỡng
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Kiến Thức Dành Cho Ba Mẹ
              </h2>
            </div>
            <Link
              href="/knowledge"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0D3A8E] dark:text-amber-400 hover:underline"
            >
              <span>Xem tất cả bài viết</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
