'use client';

import React from 'react';
import { FilterState, ProductLine, ProductFormat, AgeGroup } from '@/types';
import { LINE_INFO, FORMAT_INFO, AGE_GROUPS } from '@/data/products';
import { Search, RotateCcw, Filter, X } from 'lucide-react';

interface FilterSidebarProps {
  filterState: FilterState;
  onFilterChange: (newState: FilterState) => void;
  totalFilteredCount: number;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export function FilterSidebar({
  filterState,
  onFilterChange,
  totalFilteredCount,
  isOpenMobile = false,
  onCloseMobile,
}: FilterSidebarProps) {
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filterState, search: e.target.value });
  };

  const toggleLine = (line: ProductLine) => {
    const exists = filterState.lines.includes(line);
    const newLines = exists
      ? filterState.lines.filter((l) => l !== line)
      : [...filterState.lines, line];
    onFilterChange({ ...filterState, lines: newLines });
  };

  const toggleFormat = (format: ProductFormat) => {
    const exists = filterState.formats.includes(format);
    const newFormats = exists
      ? filterState.formats.filter((f) => f !== format)
      : [...filterState.formats, format];
    onFilterChange({ ...filterState, formats: newFormats });
  };

  const toggleAge = (age: AgeGroup) => {
    const exists = filterState.ageGroups.includes(age);
    const newAges = exists
      ? filterState.ageGroups.filter((a) => a !== age)
      : [...filterState.ageGroups, age];
    onFilterChange({ ...filterState, ageGroups: newAges });
  };

  const resetFilters = () => {
    onFilterChange({
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

  const content = (
    <div className="space-y-6">
      
      {/* Search Box */}
      <div>
        <label htmlFor="filter-search" className="block text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
          Tìm kiếm sản phẩm
        </label>
        <div className="relative">
          <input
            id="filter-search"
            type="text"
            value={filterState.search}
            onChange={handleSearchChange}
            placeholder="Riso Gold 1, Opti Gold, 110ml, FDI..."
            className="w-full pl-9 pr-8 py-2.5 bg-blue-50/60 dark:bg-slate-800/80 border border-blue-200 dark:border-slate-700 rounded-xl text-xs md:text-sm text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 dark:focus:border-amber-400 transition-all font-medium"
          />
          <Search className="w-4 h-4 text-blue-500 dark:text-amber-400 absolute left-3 top-3" />
          {filterState.search && (
            <button
              onClick={() => onFilterChange({ ...filterState, search: '' })}
              className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Dòng sản phẩm */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            Dòng Sản Phẩm
          </span>
          {filterState.lines.length > 0 && (
            <span className="text-[11px] text-[#0D3A8E] dark:text-amber-400 font-bold bg-blue-100 dark:bg-slate-800 px-2 py-0.2 rounded-full">
              {filterState.lines.length}
            </span>
          )}
        </div>
        <div className="space-y-1.5">
          {(Object.keys(LINE_INFO) as ProductLine[]).map((lineKey) => {
            const isSelected = filterState.lines.includes(lineKey);
            const line = LINE_INFO[lineKey];
            return (
              <button
                key={lineKey}
                type="button"
                onClick={() => toggleLine(lineKey)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between border cursor-pointer ${
                  isSelected
                    ? 'bg-[#0D3A8E] dark:bg-amber-500 text-white dark:text-slate-950 border-[#0D3A8E] dark:border-amber-500 shadow-sm'
                    : 'bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/80 hover:bg-blue-50 dark:hover:bg-slate-700/60'
                }`}
              >
                <span>{line.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 dark:bg-slate-950 dark:text-amber-300'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}>
                  {lineKey === 'riso-gold' ? 'Lon 900g' : 'Hộp giấy'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Độ tuổi */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            Độ Tuổi Của Bé
          </span>
          {filterState.ageGroups.length > 0 && (
            <span className="text-[11px] text-[#0D3A8E] dark:text-amber-400 font-bold bg-blue-100 dark:bg-slate-800 px-2 py-0.2 rounded-full">
              {filterState.ageGroups.length}
            </span>
          )}
        </div>
        <div className="space-y-1.5">
          {AGE_GROUPS.map((g) => {
            const isChecked = filterState.ageGroups.includes(g.id);
            return (
              <label
                key={g.id}
                className={`flex items-center justify-between p-2 rounded-xl cursor-pointer text-xs transition-colors select-none border ${
                  isChecked
                    ? 'bg-blue-50 dark:bg-slate-800 border-blue-200 dark:border-slate-700 text-[#0D3A8E] dark:text-amber-400 font-bold'
                    : 'bg-white dark:bg-slate-800/40 border-transparent hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleAge(g.id)}
                    className="rounded border-slate-300 dark:border-slate-600 text-[#0D3A8E] dark:text-amber-500 focus:ring-blue-600 h-4 w-4"
                  />
                  <span>{g.label}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Quy cách bao bì */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            Quy Cách Đóng Gói
          </span>
        </div>
        <div className="flex flex-col gap-1.5">
          {(Object.keys(FORMAT_INFO) as ProductFormat[]).map((fmtKey) => {
            const isSelected = filterState.formats.includes(fmtKey);
            return (
              <button
                key={fmtKey}
                type="button"
                onClick={() => toggleFormat(fmtKey)}
                className={`px-3 py-2 rounded-xl text-xs font-bold border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-xs font-black'
                    : 'bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                {FORMAT_INFO[fmtKey]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Reset Filter Button */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={resetFilters}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Xóa tất cả bộ lọc</span>
          </button>
        </div>
      )}

    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="sticky top-24 bg-white dark:bg-[#0c162f] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
            <h3 className="font-black text-slate-900 dark:text-white text-base flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#0D3A8E] dark:text-amber-400" /> Bộ Lọc Riso
            </h3>
            <span className="text-xs text-blue-900 dark:text-amber-400 font-bold bg-blue-50 dark:bg-slate-800 px-2 py-0.5 rounded-md">
              {totalFilteredCount} sản phẩm
            </span>
          </div>
          {content}
        </div>
      </aside>

      {/* Mobile Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div 
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="relative ml-auto w-full max-w-xs bg-white dark:bg-[#0c162f] h-full shadow-2xl p-6 overflow-y-auto flex flex-col z-10 animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-black text-slate-900 dark:text-white text-base flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#0D3A8E] dark:text-amber-400" /> Bộ Lọc Riso
              </h3>
              <button
                type="button"
                onClick={onCloseMobile}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {content}
            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 sticky bottom-0 bg-white dark:bg-[#0c162f]">
              <button
                type="button"
                onClick={onCloseMobile}
                className="w-full bg-[#0D3A8E] dark:bg-amber-500 text-white dark:text-slate-950 py-3 rounded-xl font-bold text-xs shadow-md border border-amber-400/40 cursor-pointer"
              >
                Xem {totalFilteredCount} kết quả
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
