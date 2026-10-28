'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center gap-2 p-2 rounded-xl transition-all duration-300 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-400 group cursor-pointer ${
        isDark
          ? 'bg-slate-800/80 hover:bg-slate-700/80 text-amber-400 border border-slate-700/80 shadow-inner'
          : 'bg-blue-50/90 hover:bg-blue-100 text-[#0d3a8e] border border-blue-200/80 shadow-xs'
      } ${className}`}
      aria-label={isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối (Dark Mode)'}
      title={isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối (Dark Mode)'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={`w-4 h-4 transition-all duration-300 transform ${
            isDark
              ? 'scale-0 rotate-90 opacity-0 absolute'
              : 'scale-100 rotate-0 opacity-100 text-amber-500'
          }`}
        />
        <Moon
          className={`w-4 h-4 transition-all duration-300 transform ${
            isDark
              ? 'scale-100 rotate-0 opacity-100 text-amber-300'
              : 'scale-0 -rotate-90 opacity-0 absolute'
          }`}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-bold tracking-tight">
          {isDark ? 'Chế độ tối' : 'Chế độ sáng'}
        </span>
      )}
    </button>
  );
}
