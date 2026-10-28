import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { DashboardShell } from '@/components/layout/DashboardShell';
import { SITE, DISTRIBUTOR } from '@/data/company';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.title} — Nhà Phân Phối Miền Nam`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'Riso Gold',
    'Riso Opti Gold',
    'Nutifood',
    'sữa bột lon 900g',
    'sữa uống dinh dưỡng 110ml 180ml',
    'công thức FDI Thụy Điển',
    'BAK VN',
    'bảng giá Riso Gold',
    'sữa bột Nutifood',
  ],
  authors: [{ name: DISTRIBUTOR.name }],
  openGraph: {
    title: `${SITE.title} — Nhà Phân Phối Miền Nam`,
    description: SITE.description,
    siteName: SITE.name,
    locale: 'vi_VN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('riso-theme');
                if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#f4f7fc] dark:bg-[#060b18] text-slate-900 dark:text-slate-100 selection:bg-[#F2C14E]/40 selection:text-[#061A47] antialiased font-sans">
        <ThemeProvider>
          <DashboardShell>{children}</DashboardShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
