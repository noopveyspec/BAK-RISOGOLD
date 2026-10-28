'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Product, FilterState, ProductLine, ProductFormat, AgeGroup } from '@/types';
import { ProductCard } from '@/components/products/ProductCard';
import { FilterSidebar } from '@/components/products/FilterSidebar';
import { QuickViewModal } from '@/components/products/QuickViewModal';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { MEDIA } from '@/data/media';
import { DISTRIBUTOR } from '@/data/company';
import { SlidersHorizontal, ArrowUpDown, X, AlertCircle, Sparkles, FileText, PhoneCall } from 'lucide-react';

interface ProductCatalogViewProps {
  initialProducts: Product[];
  initialLine?: ProductLine;
}

export function ProductCatalogView({
  initialProducts,
  initialLine,
}: ProductCatalogViewProps) {
  
  const [filterState, setFilterState] = useState<FilterState>({
    search: '',
    lines: initialLine ? [initialLine] : [],
    formats: [],
    ageGroups: [],
    sortBy: 'featured',
  });

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      // Search
      if (filterState.search.trim()) {
        const query = filterState.search.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesFullName = product.fullName.toLowerCase().includes(query);
        const matchesPackaging = product.packaging.toLowerCase().includes(query);
        const matchesNutrient = product.keyNutrients.some((n) => n.toLowerCase().includes(query));
        const matchesClaim = product.labelClaims.some((c) => c.toLowerCase().includes(query));
        if (!matchesName && !matchesFullName && !matchesPackaging && !matchesNutrient && !matchesClaim) {
          return false;
        }
      }

      // Lines
      if (filterState.lines.length > 0 && !filterState.lines.includes(product.line)) {
        return false;
      }

      // Formats
      if (filterState.formats.length > 0 && !filterState.formats.includes(product.format)) {
        return false;
      }

      // Age Groups
      if (filterState.ageGroups.length > 0 && !filterState.ageGroups.includes(product.ageGroup)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filterState.sortBy === 'name') {
        return a.name.localeCompare(b.name, 'vi');
      }
      if (filterState.sortBy === 'price-asc') {
        return (a.price?.amount || 0) - (b.price?.amount || 0);
      }
      if (filterState.sortBy === 'price-desc') {
        return (b.price?.amount || 0) - (a.price?.amount || 0);
      }
      if (filterState.sortBy === 'age') {
        const ageRank = { '0-6m': 1, '6-12m': 2, '1-2y': 3, '2-6y': 4, '1y-plus': 5 };
        return ageRank[a.ageGroup] - ageRank[b.ageGroup];
      }
      // 'featured'
      if (a.stage && b.stage) return a.stage - b.stage;
      return 0;
    });
  }, [initialProducts, filterState]);

  const removeLine = (line: ProductLine) => {
    setFilterState({ ...filterState, lines: filterState.lines.filter((l) => l !== line) });
  };
  const removeFormat = (fmt: ProductFormat) => {
    setFilterState({ ...filterState, formats: filterState.formats.filter((f) => f !== fmt) });
  };
  const removeAge = (age: AgeGroup) => {
    setFilterState({ ...filterState, ageGroups: filterState.ageGroups.filter((a) => a !== age) });
  };
  const resetAll = () => {
    setFilterState({
      search: '',
      lines: [],
      formats: [],
      ageGroups: [],
      sortBy: 'featured',
    });
  };

  const hasActiveFilters = 
    filterState.search.trim() !== '' ||
    filterState.lines.length > 0 ||
    filterState.formats.length > 0 ||
    filterState.ageGroups.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Danh mục sản phẩm Riso' }]} />

      {/* Hero Title & Specs Header in Riso Royal Blue */}
      <div className="mt-2 mb-8 bg-gradient-to-r from-[#061A47] via-[#0D3A8E] to-[#1449B0] dark:from-[#060e22] dark:via-[#091533] dark:to-[#0f214f] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-blue-900/60 dark:border-slate-800">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 text-xs px-3 py-1 rounded-full font-black mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DANH MỤC SẢN PHẨM RISO GOLD CHÍNH HÃNG</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-3">
            Sữa Bột Lon 900g & Sữa Uống Riso Opti Gold
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 dark:text-slate-300 leading-relaxed font-medium">
            Phân phối độc quyền khu vực Miền Nam bởi <strong>{DISTRIBUTOR.name}</strong>. Tra cứu đầy đủ hình ảnh thực tế, bảng giá niêm yết, công thức FDI và độ tuổi phù hợp.
          </p>
        </div>

        {/* Decorative background glow */}
        <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-amber-400/10 rounded-full blur-2xl" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Filter Sidebar */}
        <FilterSidebar
          filterState={filterState}
          onFilterChange={setFilterState}
          totalFilteredCount={filteredProducts.length}
          isOpenMobile={mobileFilterOpen}
          onCloseMobile={() => setMobileFilterOpen(false)}
        />

        {/* Main Product Area */}
        <div className="flex-1 w-full">
          
          {/* Top Control Bar */}
          <div className="bg-white dark:bg-[#0c162f] rounded-2xl p-4 border border-slate-200/90 dark:border-slate-800/90 shadow-xs mb-5 flex flex-wrap items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              {/* Mobile Filter Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 px-3.5 py-2 bg-blue-50 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700 text-[#0D3A8E] dark:text-amber-400 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#0D3A8E] dark:text-amber-400" />
                <span>Bộ lọc ({filteredProducts.length})</span>
              </button>

              <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                Hiển thị <strong className="text-[#0D3A8E] dark:text-amber-400 font-black">{filteredProducts.length}</strong> sản phẩm Riso chính hãng
              </span>
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-bold hidden sm:inline">Sắp xếp:</span>
              <div className="relative">
                <select
                  value={filterState.sortBy}
                  onChange={(e) => setFilterState({ ...filterState, sortBy: e.target.value as FilterState['sortBy'] })}
                  className="appearance-none bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-xl pl-3 pr-8 py-2 text-xs font-bold text-[#0D3A8E] dark:text-amber-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:bg-white dark:focus:bg-slate-900 cursor-pointer"
                >
                  <option value="featured">Theo thứ tự giai đoạn</option>
                  <option value="age">Độ tuổi tăng dần</option>
                  <option value="price-asc">Giá: Thấp đến Cao</option>
                  <option value="price-desc">Giá: Cao đến Thấp</option>
                  <option value="name">Tên sản phẩm</option>
                </select>
                <ArrowUpDown className="w-3.5 h-3.5 text-blue-600 dark:text-amber-400 absolute right-2.5 top-2.5 pointer-events-none" />
              </div>
            </div>

          </div>

          {/* Active Filter Chips */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-xs text-slate-400 dark:text-slate-500 font-semibold">Đang lọc:</span>
              
              {filterState.search && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-blue-50 dark:bg-slate-800 text-[#0D3A8E] dark:text-amber-300 border border-blue-200 dark:border-slate-700 font-semibold">
                  <span>Từ khóa: "{filterState.search}"</span>
                  <button onClick={() => setFilterState({ ...filterState, search: '' })} className="hover:text-blue-900 dark:hover:text-white cursor-pointer">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {filterState.lines.map((l) => (
                <span key={l} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 font-bold">
                  <span>Dòng: {l === 'riso-gold' ? 'Riso Gold lon' : 'Riso Opti Gold hộp'}</span>
                  <button onClick={() => removeLine(l)} className="hover:text-amber-950 dark:hover:text-white cursor-pointer">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}

              {filterState.ageGroups.map((a) => (
                <span key={a} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-blue-50 dark:bg-slate-800 text-[#0D3A8E] dark:text-amber-300 border border-blue-200 dark:border-slate-700 font-bold">
                  <span>Độ tuổi: {a}</span>
                  <button onClick={() => removeAge(a)} className="hover:text-blue-900 dark:hover:text-white cursor-pointer">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}

              <button
                onClick={resetAll}
                className="text-xs text-red-500 dark:text-red-400 hover:underline font-bold ml-2 cursor-pointer"
              >
                Xóa tất cả
              </button>
            </div>
          )}

          {/* Product Grid or Empty State */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white dark:bg-[#0c162f] rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-400 dark:text-amber-400 flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">
                Không tìm thấy sản phẩm phù hợp
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mb-6 leading-relaxed">
                Hãy thử đổi từ khóa tìm kiếm hoặc bấm đặt lại toàn bộ bộ lọc.
              </p>
              <button
                type="button"
                onClick={resetAll}
                className="bg-[#0D3A8E] dark:bg-amber-500 hover:bg-[#1C5CCF] dark:hover:bg-amber-400 text-white dark:text-slate-950 text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
              >
                Đặt lại bộ lọc
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              ))}
            </div>
          )}

        </div>

      </div>

      {/* Official Price List Section (Bảng giá gốc từ picture) */}
      <section id="bang-gia" className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
        <div className="bg-gradient-to-br from-blue-50 to-amber-50/40 dark:from-[#0c162f] dark:to-[#0a1226] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D3A8E] dark:bg-amber-500 text-white dark:text-slate-950 text-xs font-bold mb-3">
                <FileText className="w-3.5 h-3.5" /> BẢNG GIÁ NIÊM YẾT CHÍNH THỨC
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
                Bảng Giá Sản Phẩm Riso Gold & Riso Opti Gold
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Bảng giá niêm yết áp dụng cho nhà phân phối độc quyền khu vực Miền Nam: <strong>{DISTRIBUTOR.name}</strong>. Cung cấp lon 900g và thùng sữa uống dinh dưỡng 24 hộp x 110ml/180ml.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${DISTRIBUTOR.phones[0].tel}`}
                  className="bg-[#0D3A8E] dark:bg-amber-500 hover:bg-[#1449B0] dark:hover:bg-amber-400 text-white dark:text-slate-950 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-amber-300 dark:text-slate-950" />
                  <span>Gọi đặt hàng: {DISTRIBUTOR.phones[0].display}</span>
                </a>
                <a
                  href={`tel:${DISTRIBUTOR.phones[1].tel}`}
                  className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-[#0D3A8E] dark:text-amber-300 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-blue-600 dark:text-amber-400" />
                  <span>Hotline 2: {DISTRIBUTOR.phones[1].display}</span>
                </a>
              </div>
            </div>

            {/* Real Price Sheet Preview Thumbnail */}
            <div className="w-full md:w-80 relative aspect-3/4 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg bg-white dark:bg-slate-900">
              <Image
                src={MEDIA.priceList.src}
                alt={MEDIA.priceList.alt}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

    </div>
  );
}
