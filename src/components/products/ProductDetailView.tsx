'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import type { Product } from '@/types';
import { ProductImage } from '@/components/common/ProductImage';
import { ProductCard } from '@/components/products/ProductCard';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { LINE_INFO, formatPrice, isUnder24Months } from '@/data/products';
import { DISTRIBUTOR, MANUFACTURER, PRIMARY_PHONE, zaloLink, BREASTFEEDING_NOTICE } from '@/data/company';
import { 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  PhoneCall, 
  Share2, 
  Layers, 
  AlertTriangle, 
  Droplet, 
  Calendar, 
  Building2, 
  MapPin, 
  FileText,
  Heart,
  ChevronRight,
  MessageCircle,
  ExternalLink,
  Award
} from 'lucide-react';

interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailView({ product, relatedProducts }: ProductDetailViewProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'nutrition' | 'usage' | 'storage'>('overview');
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Form states for quick consult
  const [consultName, setConsultName] = useState('');
  const [consultPhone, setConsultPhone] = useState('');
  const [consultNote, setConsultNote] = useState('');
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultName.trim() || !consultPhone.trim()) return;
    setConsultSubmitted(true);
  };

  const lineInfo = LINE_INFO[product.line];
  const activeImage = product.images[selectedImageIndex] || product.images[0];
  const requiresBreastfeedingNotice = isUnder24Months(product);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Sản phẩm', href: '/products' },
          { label: lineInfo.name, href: `/products?line=${product.line}` },
          { label: product.name },
        ]}
      />

      {/* Mandatory Breastfeeding Notice for Stage 1, 2, 3 (< 24 months) */}
      {requiresBreastfeedingNotice && (
        <div className="mb-6 p-4 rounded-2xl bg-amber-50/90 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-900/50 text-xs sm:text-sm text-amber-950 dark:text-amber-200 flex items-start gap-3">
          <Heart className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold text-amber-900 dark:text-amber-300 block mb-0.5">Thông báo pháp lý quan trọng:</strong>
            <p className="leading-relaxed text-amber-900/90 dark:text-amber-200/90">{BREASTFEEDING_NOTICE}</p>
          </div>
        </div>
      )}

      {/* Main Product Hero Grid */}
      <div className="bg-white dark:bg-[#0c162f] rounded-3xl p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-xs mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Gallery & Packshot (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Main Stage Image */}
            <div className="relative aspect-square w-full bg-gradient-to-b from-[#F6F9FF] to-slate-50 dark:from-slate-900 dark:to-[#0c162f] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 flex items-center justify-center overflow-hidden">
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 bg-[#0D3A8E] dark:bg-blue-700 text-[#FBE7AC] border border-[#F2C14E]/30 text-xs font-bold px-3 py-1.5 rounded-full shadow-xs tracking-wide">
                  {product.badge}
                </span>
              )}
              {product.stage && (
                <span className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#E2A922] text-[#061A47] font-black flex items-center justify-center text-sm shadow-md">
                  Số {product.stage}
                </span>
              )}

              <ProductImage
                src={activeImage}
                alt={activeImage.alt || product.name}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-800 border-2 transition-all shrink-0 p-1 cursor-pointer ${
                      selectedImageIndex === idx
                        ? 'border-[#0D3A8E] dark:border-amber-400 shadow-md ring-2 ring-[#0D3A8E]/20'
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <ProductImage src={img} alt={`${product.name} ảnh ${idx + 1}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}

            {/* Packaging & Safety Seal Highlights */}
            <div className="p-4 rounded-2xl bg-[#F6F9FF] dark:bg-slate-800/50 border border-blue-200/70 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#0D3A8E] dark:text-amber-400">
                <Layers className="w-4 h-4 text-[#0D3A8E] dark:text-amber-400" />
                <span>Quy chuẩn đóng gói & Phân phối</span>
              </div>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-[12px] list-disc list-inside">
                <li><strong className="text-slate-900 dark:text-white">Quy cách:</strong> {product.packaging}</li>
                <li><strong className="text-slate-900 dark:text-white">Khối lượng / Dung tích:</strong> {product.packSize}</li>
                <li><strong className="text-slate-900 dark:text-white">Nhà sản xuất:</strong> {MANUFACTURER.brand} ({MANUFACTURER.name})</li>
                <li><strong className="text-slate-900 dark:text-white">Phân phối:</strong> {DISTRIBUTOR.shortName} (Miền Nam)</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Title, Specs, Key Features & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Brand & Origin Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D3A8E] dark:text-amber-400 bg-blue-50 dark:bg-slate-800 px-3 py-1 rounded-lg border border-blue-200 dark:border-slate-700">
                {product.brand} • {lineInfo.name}
              </span>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                Độ tuổi: <strong className="text-[#0D3A8E] dark:text-amber-400">{product.ageLabel}</strong>
              </span>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                Định dạng: <strong className="text-slate-900 dark:text-white">{product.productType}</strong>
              </span>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#061A47] dark:text-white tracking-tight leading-tight mb-2">
              {product.fullName}
            </h1>

            {/* Price Box from Distributor */}
            {product.price && (
              <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-slate-800/80 border border-amber-200 dark:border-slate-700 mb-5 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <span className="text-xs text-amber-900 dark:text-amber-300 font-medium block">Giá phân phối niêm yết:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-[#0D3A8E] dark:text-amber-400">
                      {formatPrice(product.price.amount)}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      / {product.price.unit}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 italic block">
                    Nguồn: {product.price.source}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/50">
                    <CheckCircle2 className="w-3 h-3" /> Hàng chính hãng 100%
                  </span>
                </div>
              </div>
            )}

            {/* Short summary */}
            <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            {/* Key Nutritional Highlights on packaging */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-[#061A47] dark:text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#E2A922]" /> Công Dụng Nổi Bật Ghi Trên Bao Bì
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.labelClaims.map((claim, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-gradient-to-r from-blue-50/50 to-white dark:from-slate-800/80 dark:to-slate-800/40 border border-blue-100 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3A8E] dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>{claim}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Nutrients from Packaging */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-[#061A47] dark:text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#0D3A8E] dark:text-amber-400" /> Các Dưỡng Chất Chính Được Nêu Rõ
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.keyNutrients.map((nutrient, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0D3A8E]/10 dark:bg-slate-800 text-[#0D3A8E] dark:text-amber-300 text-xs font-bold border border-[#0D3A8E]/20 dark:border-slate-700">
                    <Sparkles className="w-3 h-3 text-[#E2A922]" />
                    {nutrient}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons: Consult, Hotline, Zalo, Share */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setShowConsultModal(true)}
                className="flex-1 sm:flex-none bg-[#0D3A8E] dark:bg-amber-500 hover:bg-[#1449B0] dark:hover:bg-amber-400 text-[#FBE7AC] dark:text-slate-950 px-6 py-3.5 rounded-xl font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#F2C14E] dark:text-slate-950 group-hover:scale-110 transition-transform" />
                <span>Nhận Tư Vấn Sản Phẩm</span>
              </button>

              <a
                href={zaloLink(PRIMARY_PHONE.tel)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Zalo ({PRIMARY_PHONE.display})</span>
              </a>

              <Link
                href="/contact"
                className="px-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Điểm Phân Phối BAK VN</span>
              </Link>

              <button
                type="button"
                onClick={handleShare}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title="Sao chép liên kết sản phẩm"
              >
                <Share2 className="w-4 h-4" />
              </button>

              {copiedLink && (
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium animate-in fade-in">
                  ✓ Đã sao chép liên kết!
                </span>
              )}
            </div>

            {/* Data Source Notice */}
            <p className="mt-4 text-[11px] text-slate-400 dark:text-slate-500 italic">
              * {product.dataSource}
            </p>

          </div>

        </div>
      </div>

      {/* Structured Tabs Section */}
      <div className="bg-white dark:bg-[#0c162f] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs p-6 md:p-8 lg:p-10 mb-12">
        
        {/* Tab Headers */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 gap-2 sm:gap-6 overflow-x-auto pb-px mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`pb-3 text-sm font-bold transition-all relative whitespace-nowrap cursor-pointer ${
              activeTab === 'overview'
                ? 'text-[#0D3A8E] dark:text-amber-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
            }`}
          >
            Tổng quan & Mô tả chi tiết
            {activeTab === 'overview' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D3A8E] dark:bg-amber-400 rounded-full" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('nutrition')}
            className={`pb-3 text-sm font-bold transition-all relative whitespace-nowrap cursor-pointer ${
              activeTab === 'nutrition'
                ? 'text-[#0D3A8E] dark:text-amber-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
            }`}
          >
            Thông tin dinh dưỡng & Thành phần
            {activeTab === 'nutrition' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D3A8E] dark:bg-amber-400 rounded-full" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('usage')}
            className={`pb-3 text-sm font-bold transition-all relative whitespace-nowrap cursor-pointer ${
              activeTab === 'usage'
                ? 'text-[#0D3A8E] dark:text-amber-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
            }`}
          >
            Hướng dẫn pha chế & Sử dụng
            {activeTab === 'usage' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D3A8E] dark:bg-amber-400 rounded-full" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('storage')}
            className={`pb-3 text-sm font-bold transition-all relative whitespace-nowrap cursor-pointer ${
              activeTab === 'storage'
                ? 'text-[#0D3A8E] dark:text-amber-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
            }`}
          >
            Bảo quản & Đơn vị phân phối
            {activeTab === 'storage' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D3A8E] dark:bg-amber-400 rounded-full" />
            )}
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Mô tả chi tiết sản phẩm</h2>
              <div className="space-y-3 text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                {product.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F6F9FF] dark:bg-slate-800/50 border border-blue-100 dark:border-slate-700">
              <h3 className="font-bold text-[#0D3A8E] dark:text-amber-400 text-sm mb-3">Thông tin nhận diện trên bao bì thực tế</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">Dòng sản phẩm:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{lineInfo.name}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">Quy cách đóng gói:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{product.packaging}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">Độ tuổi khuyến nghị:</span>
                  <span className="font-bold text-[#0D3A8E] dark:text-amber-400">{product.ageLabel}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">Nhà sản xuất:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{MANUFACTURER.name}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">Nghiên cứu & phát triển:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{MANUFACTURER.research}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">NPP Miền Nam:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{DISTRIBUTOR.name}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Nutrition */}
        {activeTab === 'nutrition' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {product.nutritionFacts ? (
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
                <table className="w-full text-left text-sm text-slate-700 dark:text-slate-300">
                  <thead className="bg-[#0D3A8E] text-white text-xs uppercase">
                    <tr>
                      <th className="py-3 px-4">Dưỡng chất</th>
                      <th className="py-3 px-4">Đơn vị</th>
                      <th className="py-3 px-4">Hàm lượng (trên 100g / 100ml)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.nutritionFacts.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-[#0c162f]' : 'bg-slate-50 dark:bg-slate-800/40'}>
                        <td className="py-2.5 px-4 font-semibold text-slate-900 dark:text-white">{item.nutrient}</td>
                        <td className="py-2.5 px-4 text-slate-500 dark:text-slate-400">{item.unit}</td>
                        <td className="py-2.5 px-4 font-bold text-[#0D3A8E] dark:text-amber-400">{item.per100}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-slate-700 dark:text-slate-300 text-sm space-y-3">
                <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-300 text-base">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <span>Bảng thành phần dinh dưỡng chi tiết đang được đồng bộ từ hồ sơ kỹ thuật</span>
                </div>
                <p>
                  Toàn bộ chỉ tiêu định lượng vi chất (DHA, ARA, Canxi, Phốt pho, Vitamin nhóm B, Kẽm, Sắt...) được in đầy đủ và rõ ràng trên nhãn thân lon/hộp thực tế theo quy chuẩn công bố chất lượng của Bộ Y Tế.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={`tel:${PRIMARY_PHONE.tel}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D3A8E] dark:bg-amber-500 text-white dark:text-slate-950 text-xs font-bold hover:bg-[#1449B0] dark:hover:bg-amber-400 cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Liên hệ {PRIMARY_PHONE.display} để nhận hồ sơ công bố</span>
                  </a>
                  <a
                    href={zaloLink(PRIMARY_PHONE.tel)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Gửi file qua Zalo</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Usage */}
        {activeTab === 'usage' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {product.format === 'powder-tin' ? (
              <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Nguyên tắc pha sữa bột lon thiếc chuẩn an toàn</h3>
                <ol className="list-decimal list-inside space-y-2.5 pl-2 leading-relaxed">
                  <li>Rửa sạch tay và tiệt trùng dụng cụ pha (bình sữa, núm ti, muỗng gạt) bằng nước sôi trong 5 phút hoặc máy tiệt trùng chuyên dụng.</li>
                  <li>Đun sôi nước sạch trong 5 phút và để nguội xuống khoảng 40°C – 50°C (nhiệt độ thích hợp để không làm mất vi chất và lợi khuẩn HMO/men vi sinh).</li>
                  <li>Sử dụng muỗng lường có sẵn trong lon sữa, gạt ngang miệng muỗng. Pha đúng số lượng muỗng theo bảng hướng dẫn in trực tiếp trên thân lon Riso Gold tương ứng với tháng tuổi của bé.</li>
                  <li>Đậy nắp bình và lắc đều đến khi bột tan hoàn toàn. Thử nhiệt độ sữa trên cổ tay trước khi cho bé bú.</li>
                </ol>
                <div className="p-4 rounded-xl bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 text-xs text-[#0D3A8E] dark:text-amber-300">
                  <strong>Lưu ý:</strong> Đổ bỏ phần sữa thừa sau 1 giờ kể từ khi pha. Không dùng lò vi sóng để hâm nóng sữa vì có thể tạo các điểm nóng gây bỏng cho bé.
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Hướng dẫn sử dụng sữa uống dinh dưỡng pha sẵn</h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Lắc đều trước khi uống.</li>
                  <li>Ngon hơn khi uống lạnh.</li>
                  <li>Sản phẩm cho 1 lần sử dụng. Sau khi mở hộp nên dùng hết ngay hoặc bảo quản tủ lạnh và dùng trong 24 giờ.</li>
                  <li>Khuyên dùng 2 – 3 hộp mỗi ngày cho trẻ từ 1 tuổi trở lên để bổ sung dưỡng chất đầy đủ.</li>
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Storage */}
        {activeTab === 'storage' && (
          <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 animate-in fade-in duration-200">
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Hướng dẫn bảo quản & Thông tin nhà phân phối</h3>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Bảo quản nơi khô ráo, sạch sẽ, thoáng mát, tránh ánh nắng trực tiếp.</li>
              <li>Đối với lon sữa bột: Đậy kín nắp nhựa sau mỗi lần sử dụng. Sử dụng trong vòng 1 tháng sau khi mở nắp lon. Không bảo quản lon sữa bột trong tủ lạnh.</li>
              <li>Đối với hộp sữa uống pha sẵn: Bảo quản nơi khô mát, có thể giữ trong ngăn mát tủ lạnh để uống ngon hơn.</li>
            </ul>

            <div className="mt-6 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Đơn vị phân phối chính thức khu vực Miền Nam:</h4>
              <p className="font-semibold text-[#0D3A8E] dark:text-amber-400">{DISTRIBUTOR.name}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{DISTRIBUTOR.address}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Hotline: {DISTRIBUTOR.phones.map(p => p.display).join(' — ')}</p>
            </div>
          </div>
        )}

      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold text-[#0D3A8E] dark:text-amber-400 uppercase tracking-wider block">Cùng dòng sản phẩm</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#061A47] dark:text-white">Sản Phẩm Riso Liên Quan</h2>
            </div>
            <Link
              href="/products"
              className="text-xs sm:text-sm font-bold text-[#0D3A8E] dark:text-amber-400 hover:underline flex items-center gap-1"
            >
              <span>Xem tất cả</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Quick Consult Modal */}
      {showConsultModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="bg-white dark:bg-[#0c162f] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => {
                setShowConsultModal(false);
                setConsultSubmitted(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
            >
              ×
            </button>

            {consultSubmitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-[#061A47] dark:text-white mb-2">Đã nhận thông tin tư vấn</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                  Chuyên viên dinh dưỡng của BAK VN sẽ liên hệ số <strong>{consultPhone}</strong> trong vòng 15 phút làm việc để tư vấn chi tiết về <strong>{product.name}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setShowConsultModal(false);
                    setConsultSubmitted(false);
                  }}
                  className="bg-[#0D3A8E] dark:bg-amber-500 text-[#FBE7AC] dark:text-slate-950 px-6 py-2.5 rounded-xl font-bold text-xs uppercase cursor-pointer"
                >
                  Đóng lại
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-extrabold text-[#061A47] dark:text-white mb-1">Đăng Ký Tư Vấn Sản Phẩm</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                  Sản phẩm quan tâm: <strong className="text-[#0D3A8E] dark:text-amber-400">{product.name}</strong>
                </p>

                <form onSubmit={handleConsultSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Họ và tên của bạn</label>
                    <input
                      type="text"
                      required
                      value={consultName}
                      onChange={(e) => setConsultName(e.target.value)}
                      placeholder="Ví dụ: Nguyễn Thị Hoa"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0D3A8E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Số điện thoại liên hệ</label>
                    <input
                      type="tel"
                      required
                      value={consultPhone}
                      onChange={(e) => setConsultPhone(e.target.value)}
                      placeholder="Ví dụ: 0907 052 420"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0D3A8E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Độ tuổi của bé hoặc yêu cầu cụ thể (tùy chọn)</label>
                    <textarea
                      rows={2}
                      value={consultNote}
                      onChange={(e) => setConsultNote(e.target.value)}
                      placeholder="Ví dụ: Bé 8 tháng tuổi, cần tư vấn tình trạng tiêu hóa..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0D3A8E]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#0D3A8E] dark:bg-amber-500 hover:bg-[#1449B0] dark:hover:bg-amber-400 text-[#FBE7AC] dark:text-slate-950 py-3 rounded-xl font-bold text-sm shadow-md transition-colors cursor-pointer"
                    >
                      Gửi Yêu Cầu Tư Vấn Ngay
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
