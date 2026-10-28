import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticleBySlug, getArticles } from '@/data/articles';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ProductImage } from '@/components/common/ProductImage';
import { ArticleCard } from '@/components/knowledge/ArticleCard';
import { Calendar, Clock, User, ArrowLeft, Tag, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';

interface ArticleDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = getArticles();
  return articles.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: ArticleDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    return {
      title: 'Không tìm thấy bài viết',
      description: 'Bài viết không tồn tại hoặc đã được cập nhật.',
    };
  }

  return {
    title: `${article.title} — BAK VN`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: 'article',
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const allArticles = getArticles();
  const relatedArticles = allArticles.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Cẩm nang dinh dưỡng', href: '/knowledge' },
          { label: article.title },
        ]}
      />

      <article className="bg-white dark:bg-[#0c162f] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xs mb-12">
        
        {/* Category & Metadata Header */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-4">
          <span className="bg-[#0D3A8E] dark:bg-blue-700 text-[#FBE7AC] font-bold px-3 py-1 rounded-full text-[11px] border border-[#F2C14E]/30">
            {article.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {article.publishedAt}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {article.readTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300 font-medium">
            <User className="w-3.5 h-3.5 text-slate-400" />
            {article.author}
          </span>
        </div>

        {/* Article Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061A47] dark:text-white tracking-tight leading-tight mb-6">
          {article.title}
        </h1>

        {/* Lead summary callout */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F6F9FF] dark:bg-slate-800/60 border-l-4 border-[#0D3A8E] dark:border-amber-400 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed italic mb-8">
          {article.summary}
        </div>

        {/* Main Article Banner Image */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 mb-8 border border-slate-200 dark:border-slate-700">
          <ProductImage
            src={article.image}
            alt={article.image.alt || article.title}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Article Body Content (Sections) */}
        <div className="space-y-6 text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed mb-8">
          {article.sections.map((sec, sIdx) => (
            <div key={sIdx} className="space-y-3">
              {sec.heading && (
                <h2 className="text-lg sm:text-xl font-bold text-[#061A47] dark:text-white pt-2">
                  {sec.heading}
                </h2>
              )}
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}
              {sec.bullets && sec.bullets.length > 0 && (
                <ul className="list-disc list-inside space-y-1.5 pl-3 text-slate-700 dark:text-slate-300">
                  {sec.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* References */}
        {article.references && article.references.length > 0 && (
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 mb-6">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0D3A8E] dark:text-amber-400" /> Tài liệu tham khảo khoa học:
            </h4>
            <ul className="space-y-1">
              {article.references.map((ref, rIdx) => (
                <li key={rIdx}>
                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0D3A8E] dark:text-amber-400 hover:underline inline-flex items-center gap-1"
                    >
                      {ref.label} <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span>{ref.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-slate-400 dark:text-slate-500" />
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Chủ đề:</span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#061A47] dark:text-white">Bài Viết Liên Quan</h3>
            <Link
              href="/knowledge"
              className="text-xs font-bold text-[#0D3A8E] dark:text-amber-400 hover:underline"
            >
              Xem tất cả bài viết →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((art) => (
              <ArticleCard key={art.id} article={art} />
            ))}
          </div>
        </div>
      )}

      {/* Back button */}
      <div className="text-center pb-8">
        <Link
          href="/knowledge"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#0D3A8E] dark:text-amber-400 hover:text-[#1449B0] dark:hover:text-amber-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-5 py-2.5 rounded-xl shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Quay lại trang cẩm nang</span>
        </Link>
      </div>

    </div>
  );
}
