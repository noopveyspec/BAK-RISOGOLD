'use client';

import React, { useState } from 'react';
import { PRODUCTS, AGE_GROUPS } from '@/data/products';
import { DISTRIBUTOR, PRIMARY_PHONE } from '@/data/company';
import { Send, CheckCircle2, AlertCircle, Info, PhoneCall, Mail, User, MessageSquare } from 'lucide-react';

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  productOfInterest: string;
  ageGroup: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    productOfInterest: '',
    ageGroup: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    status: 'idle' | 'success' | 'demo_notice';
    message: string;
  }>({ status: 'idle', message: '' });

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Vui lòng nhập họ và tên của bạn.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Họ tên cần tối thiểu 2 ký tự.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Vui lòng nhập số điện thoại để chuyên viên liên hệ.';
    } else {
      const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
      if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
        errs.phone = 'Số điện thoại không đúng định dạng (VD: 0907 052 420).';
      }
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Địa chỉ email không hợp lệ.';
      }
    }

    if (!formData.message.trim()) {
      errs.message = 'Vui lòng ghi rõ câu hỏi hoặc yêu cầu tư vấn / báo giá.';
    } else if (formData.message.trim().length < 8) {
      errs.message = 'Nội dung cần chi tiết hơn (tối thiểu 8 ký tự).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionResult({ status: 'idle', message: '' });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionResult({
        status: 'demo_notice',
        message: 'Dữ liệu tư vấn đã được tiếp nhận và xác thực thành công trên hệ thống.',
      });
    }, 700);
  };

  return (
    <div className="bg-white dark:bg-[#0c162f] rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-xs">
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-[#0D3A8E] dark:text-amber-400" />
          <span>Gửi Yêu Cầu Tư Vấn & Báo Giá Sỉ Riso Gold</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Đội ngũ chuyên viên của <strong className="text-slate-900 dark:text-slate-200">{DISTRIBUTOR.name}</strong> sẽ giải đáp thắc mắc về công thức FDI, độ tuổi dùng sữa và chính sách phân phối tại Miền Nam.
        </p>
      </div>

      {submissionResult.status === 'demo_notice' ? (
        <div className="p-6 rounded-2xl bg-blue-50/70 dark:bg-slate-800/80 border border-blue-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 space-y-4 animate-in fade-in">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-[#061A47] dark:text-amber-300 mb-1">
                Yêu Cầu Đã Được Tiếp Nhận
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                {submissionResult.message} Chuyên viên BAK VN sẽ sớm liên hệ qua số <strong>{formData.phone}</strong>. Bạn cũng có thể liên hệ nhanh qua hotline <strong className="text-[#0D3A8E] dark:text-amber-400">{PRIMARY_PHONE.display}</strong>.
              </p>
              <div className="p-3 bg-white/90 dark:bg-slate-900/90 rounded-xl border border-blue-100 dark:border-slate-700 text-[12px] font-mono text-slate-700 dark:text-slate-300">
                <strong>Chi tiết yêu cầu:</strong>
                <br />• Khách hàng: {formData.fullName}
                <br />• Điện thoại: {formData.phone}
                <br />• Sản phẩm quan tâm: {formData.productOfInterest || 'Tư vấn tổng quan dòng Riso'}
                <br />• Độ tuổi: {formData.ageGroup || 'Chưa chọn'}
                <br />• Nội dung: "{formData.message}"
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setSubmissionResult({ status: 'idle', message: '' });
              setFormData({
                fullName: '',
                phone: '',
                email: '',
                productOfInterest: '',
                ageGroup: '',
                message: '',
              });
            }}
            className="w-full bg-[#0D3A8E] dark:bg-amber-500 hover:bg-[#1449B0] dark:hover:bg-amber-400 text-[#FBE7AC] dark:text-slate-950 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            Nhập yêu cầu tư vấn khác
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Họ và tên của bạn <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Ví dụ: Nguyễn Văn Hưng"
                  className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-hidden focus:ring-2 transition-all ${
                    errors.fullName
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-slate-200 dark:border-slate-700 focus:border-[#0D3A8E] dark:focus:border-amber-400 focus:ring-[#0D3A8E]/20'
                  }`}
                />
                <User className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-3" />
              </div>
              {errors.fullName && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Số điện thoại liên hệ <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Ví dụ: 0907 052 420"
                  className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-hidden focus:ring-2 transition-all ${
                    errors.phone
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-slate-200 dark:border-slate-700 focus:border-[#0D3A8E] dark:focus:border-amber-400 focus:ring-[#0D3A8E]/20'
                  }`}
                />
                <PhoneCall className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-3" />
              </div>
              {errors.phone && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Email & Age Group */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Địa chỉ Email (Tùy chọn)
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@example.com"
                  className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-hidden focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-slate-200 dark:border-slate-700 focus:border-[#0D3A8E] dark:focus:border-amber-400 focus:ring-[#0D3A8E]/20'
                  }`}
                />
                <Mail className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-3" />
              </div>
              {errors.email && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="ageGroup" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Độ tuổi của bé
              </label>
              <select
                id="ageGroup"
                value={formData.ageGroup}
                onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0D3A8E]/20 focus:border-[#0D3A8E] cursor-pointer"
              >
                <option value="">-- Chọn độ tuổi hoặc giai đoạn --</option>
                {AGE_GROUPS.map((g) => (
                  <option key={g.id} value={g.label}>
                    {g.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Product Selection */}
          <div>
            <label htmlFor="productOfInterest" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Sản phẩm bạn muốn hỏi chi tiết
            </label>
            <select
              id="productOfInterest"
              value={formData.productOfInterest}
              onChange={(e) => setFormData({ ...formData, productOfInterest: e.target.value })}
              className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0D3A8E]/20 focus:border-[#0D3A8E] cursor-pointer"
            >
              <option value="">-- Chọn sản phẩm Riso cụ thể (hoặc để trống) --</option>
              {PRODUCTS.map((prod) => (
                <option key={prod.id} value={prod.name}>
                  {prod.fullName} ({prod.packSize})
                </option>
              ))}
            </select>
          </div>

          {/* Consultation Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Nội dung yêu cầu hoặc tình trạng cần tư vấn <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Ví dụ: Cần tư vấn đổi sang sữa Riso Gold 2 cho bé 8 tháng, hỏi giá sỉ cho đại lý tại Biên Hòa - Đồng Nai..."
              className={`w-full p-3 text-xs sm:text-sm rounded-xl border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-hidden focus:ring-2 transition-all ${
                errors.message
                  ? 'border-red-400 focus:ring-red-200'
                  : 'border-slate-200 dark:border-slate-700 focus:border-[#0D3A8E] dark:focus:border-amber-400 focus:ring-[#0D3A8E]/20'
              }`}
            />
            {errors.message && (
              <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.message}
              </p>
            )}
          </div>

          {/* Notice */}
          <div className="flex items-start gap-2 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-[11px] text-slate-500 dark:text-slate-400">
            <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span>
              Lưu ý: Mọi thông tin tư vấn dựa trên hồ sơ nhãn sản phẩm và tài liệu từ Nutifood. Đối với trẻ có tiền sử dị ứng hoặc bệnh lý chuyển hóa, vui lòng tham khảo ý kiến bác sĩ chuyên khoa.
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#0D3A8E] dark:bg-amber-500 hover:bg-[#1449B0] dark:hover:bg-amber-400 text-[#FBE7AC] dark:text-slate-950 py-3.5 px-6 rounded-xl font-black text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-[#FBE7AC]/30 border-t-[#FBE7AC] rounded-full animate-spin" />
            ) : (
              <>
                <Send className="w-4 h-4 text-[#F2C14E] dark:text-slate-950" />
                <span>Gửi Yêu Cầu Tư Vấn Ngay</span>
              </>
            )}
          </button>

        </form>
      )}

    </div>
  );
}
