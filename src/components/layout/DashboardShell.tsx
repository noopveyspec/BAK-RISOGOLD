'use client';

import React, { useState } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardTopNav } from './DashboardTopNav';
import { DashboardFooter } from './DashboardFooter';

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex w-full bg-[#f4f7fc] dark:bg-[#060b18] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Left Sidebar */}
      <DashboardSidebar
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        <DashboardTopNav
          onOpenMobile={() => setMobileOpen(true)}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed(!collapsed)}
        />
        <main className="flex-1 w-full animate-in fade-in duration-300">
          {children}
        </main>
        <DashboardFooter />
      </div>
    </div>
  );
}
