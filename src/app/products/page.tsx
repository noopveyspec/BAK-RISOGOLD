import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { getProducts } from '@/data/products';
import { ProductCatalogView } from '@/components/products/ProductCatalogView';
import { ProductLine } from '@/types';

export const metadata: Metadata = {
  title: 'Danh Mục Sản Phẩm Sữa Nutifood Riso Gold & Riso Opti Gold',
  description: 'Tra cứu giá bán, thông tin dinh dưỡng, quy cách lon 900g và sữa bột pha sẵn 110ml/180ml Nutifood Riso Gold phân phối bởi BAK VN.',
};

interface ProductsPageProps {
  searchParams: Promise<{
    line?: ProductLine;
  }>;
}

async function ProductsCatalogContent({ searchParams }: ProductsPageProps) {
  const resolvedSearchParams = await searchParams;
  const initialProducts = getProducts();

  return (
    <ProductCatalogView
      initialProducts={initialProducts}
      initialLine={resolvedSearchParams.line}
    />
  );
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="w-10 h-10 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm text-slate-500 font-bold">Đang tải danh mục sữa Nutifood Riso Gold...</p>
        </div>
      }
    >
      <ProductsCatalogContent searchParams={searchParams} />
    </Suspense>
  );
}
