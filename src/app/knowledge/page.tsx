import React from 'react';
import type { Metadata } from 'next';
import { getArticles } from '@/data/articles';
import { ArticleCard } from '@/components/knowledge/ArticleCard';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BookOpen, Sparkles, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cẩm Nang Dinh Dưỡng Riso Gold & Hướng Dẫn Sử Dụng Chuẩn Y Khoa',
  description: 'Thư viện bài viết hướng dẫn chọn sữa Riso Gold theo độ tuổi, nguyên tắc pha sữa bột an toàn và cách hiểu đúng các dưỡng chất HMO, FDI, DHA.',
};

export default function KnowledgePage() {
  const articles = getArticles();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Cẩm nang dinh dưỡng' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#061A47] via-[#0D3A8E] to-[#1449B0] dark:from-[#050a17] dark:via-[#09142c] dark:to-[#0d2047] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-lg mb-10 border border-blue-900/60 dark:border-slate-800">
        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#F2C14E]/20 text-[#FBE7AC] text-xs px-3 py-1 rounded-full border border-[#F2C14E]/30 font-bold mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#F2C14E]" />
            <span>KIẾN THỨC KHOA HỌC DINH DƯỠNG</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Cẩm Nang Sữa Riso Gold & Hướng Dẫn Dành Cho Phụ Huynh
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 dark:text-slate-300 leading-relaxed">
            Tổng hợp các hướng dẫn chuẩn y khoa và thông tin từ nhà sản xuất Nutifood giúp ba mẹ chọn đúng giai đoạn Riso Gold cho bé, pha sữa an toàn và tối ưu hóa hệ tiêu hóa non nớt.
          </p>
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

    </div>
  );
}
