import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ContactForm } from '@/components/forms/ContactForm';
import { DISTRIBUTOR, PRIMARY_PHONE, zaloLink, MANUFACTURER } from '@/data/company';
import { 
  PhoneCall, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  HelpCircle, 
  Sparkles,
  Building2,
  MessageCircle,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Liên Hệ Phân Phối & Tư Vấn Sữa Riso Gold — BAK VN',
  description: 'Liên hệ Công ty TNHH BAK VN – Nhà phân phối độc quyền Miền Nam các sản phẩm sữa Nutifood Riso Gold & Riso Opti Gold. Hotline: 0907 052 420.',
};

const FAQS = [
  {
    q: 'BAK VN phân phối sữa Riso Gold ở những khu vực nào?',
    a: 'Công ty TNHH BAK VN là nhà phân phối độc quyền cho các sản phẩm Nutifood Riso Gold và Riso Opti Gold tại toàn bộ các tỉnh thành khu vực Miền Nam (TP.HCM, Đồng Nai, Bình Dương, Long An, Bà Rịa - Vũng Tàu, Tây Ninh và các tỉnh miền Tây).',
  },
  {
    q: 'Giá bán niêm yết trên website có áp dụng cho đơn lẻ không?',
    a: 'Giá niêm yết trên website được trích từ bảng giá phân phối chính thức của NPP BAK VN. Quý khách hàng mua lẻ hoặc đại lý muốn đặt số lượng lớn theo thùng có thể liên hệ trực tiếp hotline hoặc chat Zalo để nhận chính sách chiết khấu tốt nhất.',
  },
  {
    q: 'Làm sao để biết lon sữa Riso Gold 900g chính hãng?',
    a: 'Mọi lon sữa Riso Gold do BAK VN phân phối đều xuất xưởng trực tiếp từ Nhà máy Nutifood Bình Dương, có đầy đủ tem niêm phong, mã vạch truy xuất nguồn gốc rõ ràng và hạn sử dụng mới.',
  },
  {
    q: 'Riso Opti Gold dạng hộp uống liền dùng cho độ tuổi nào?',
    a: 'Theo tài liệu công bố từ Nutifood, Riso Opti Gold dạng sữa uống dinh dưỡng (hộp 110ml và 180ml) được nghiên cứu dành riêng cho trẻ từ 1 tuổi trở lên, bổ sung DHA, HMO, Lactoferrin và Canxi cho sự phát triển toàn diện.',
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Liên hệ tư vấn & Báo giá' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#061A47] via-[#0D3A8E] to-[#1449B0] dark:from-[#050a17] dark:via-[#09142c] dark:to-[#0d2047] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl mb-12 border border-blue-900/60 dark:border-slate-800">
        <div className="max-w-2xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2C14E]/20 text-[#FBE7AC] text-xs font-bold mb-3 border border-[#F2C14E]/30">
            <PhoneCall className="w-3.5 h-3.5 text-[#F2C14E]" />
            <span>KẾT NỐI VỚI NHÀ PHÂN PHỐI BAK VN</span>
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Tư Vấn Dinh Dưỡng & Báo Giá Sỉ Đại Lý
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 dark:text-slate-300 leading-relaxed">
            Liên hệ đội ngũ chăm sóc khách hàng của {DISTRIBUTOR.name} để được tư vấn chọn sữa theo giai đoạn phát triển của bé hoặc nhận bảng giá sỉ chi tiết cho cửa hàng.
          </p>
        </div>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
        
        {/* Form Column */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Contact Info & Hours Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Info Card */}
          <div className="bg-white dark:bg-[#0c162f] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs">
            <h3 className="font-bold text-[#061A47] dark:text-white text-lg mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#0D3A8E] dark:text-amber-400" />
              <span>{DISTRIBUTOR.name}</span>
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-blue-50/60 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700">
                <PhoneCall className="w-5 h-5 text-[#0D3A8E] dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block text-sm">Hotlines Đặt Hàng & Tư Vấn</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {DISTRIBUTOR.phones.map((p, idx) => (
                      <a
                        key={idx}
                        href={`tel:${p.tel}`}
                        className="text-[#0D3A8E] dark:text-amber-400 font-extrabold text-base hover:underline cursor-pointer"
                      >
                        {p.display}
                      </a>
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">Hỗ trợ 24/7 cho đại lý & phụ huynh</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700">
                <MessageCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Kênh Zalo Hỗ Trợ Nhanh</span>
                  <a
                    href={zaloLink(PRIMARY_PHONE.tel)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Zalo: {PRIMARY_PHONE.display}</span>
                  </a>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Tiếp nhận yêu cầu gửi báo giá, hóa đơn VAT</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700">
                <MapPin className="w-5 h-5 text-[#0D3A8E] dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Địa Chỉ Trụ Sở & Kho Phân Phối</span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed block">{DISTRIBUTOR.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700">
                <Clock className="w-5 h-5 text-[#0D3A8E] dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Thời Gian Tiếp Nhận Đơn Hàng</span>
                  <span className="text-slate-700 dark:text-slate-300">Thứ Hai - Chủ Nhật: 07:30 - 20:30</span>
                </div>
              </div>

            </div>
          </div>

          {/* Guarantee Card */}
          <div className="p-6 rounded-3xl bg-[#F6F9FF] dark:bg-[#0c162f] border border-blue-200/70 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#0D3A8E] dark:text-amber-400 text-sm">
              <ShieldCheck className="w-5 h-5 text-[#0D3A8E] dark:text-amber-400" />
              <span>Cam Kết Phân Phối Chính Hãng</span>
            </div>
            <p className="leading-relaxed text-slate-600 dark:text-slate-400 text-xs">
              Mọi sản phẩm sữa Nutifood Riso Gold lon 900g và Riso Opti Gold đều được giao từ kho đạt chuẩn, bảo quản ở điều kiện mát mẻ, cam kết hạn sử dụng mới nhất và hoàn tiền 100% nếu phát hiện hàng không đúng quy cách.
            </p>
          </div>

        </div>

      </div>

      {/* FAQ Section */}
      <section id="faq" className="mb-14">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D3A8E] dark:text-amber-400 block mb-1">
            Giải Đáp Thắc Mắc
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061A47] dark:text-white tracking-tight">
            Câu Hỏi Thường Gặp (FAQ)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0c162f] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col">
              <div className="flex items-start gap-3 mb-2">
                <HelpCircle className="w-5 h-5 text-[#0D3A8E] dark:text-amber-400 shrink-0 mt-0.5" />
                <h4 className="font-bold text-[#061A47] dark:text-white text-sm leading-snug">
                  {faq.q}
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
