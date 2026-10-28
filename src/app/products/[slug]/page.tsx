import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, getProducts, getRelatedProducts } from '@/data/products';
import { ProductDetailView } from '@/components/products/ProductDetailView';
import { DISTRIBUTOR } from '@/data/company';

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    return {
      title: 'Không tìm thấy sản phẩm',
      description: 'Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã được cập nhật.',
    };
  }

  const primaryImage = product.images[0]?.src || '/images/riso/riso-gold-1-lon-900g.webp';

  return {
    title: `${product.fullName} (${product.packSize}) — ${DISTRIBUTOR.name}`,
    description: `${product.shortDescription} Độ tuổi: ${product.ageLabel}. Quy cách: ${product.packaging}. Nhà phân phối Miền Nam: ${DISTRIBUTOR.name}.`,
    openGraph: {
      title: `${product.fullName} — ${product.brand}`,
      description: product.shortDescription,
      images: [
        {
          url: primaryImage,
          alt: product.fullName,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product, 3);

  return (
    <ProductDetailView
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}
