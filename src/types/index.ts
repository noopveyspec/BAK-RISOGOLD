export interface MediaAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export type ProductLine = 'riso-gold' | 'riso-opti-gold';
export type ProductFormat = 'powder-tin' | 'liquid-carton';
export type AgeGroup = '0-6m' | '6-12m' | '1-2y' | '2-6y' | '1y-plus';

export interface ProductPrice {
  amount: number;
  unit: string;
  /** Nguồn của giá, hiển thị kèm để minh bạch */
  source: string;
}

export interface NutrientFact {
  nutrient: string;
  unit: string;
  per100: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  fullName: string;
  brand: string;
  line: ProductLine;
  format: ProductFormat;
  /** Số giai đoạn in trên lon (1–4) nếu có */
  stage?: number;
  ageGroup: AgeGroup;
  ageLabel: string;
  packSize: string;
  packaging: string;
  productType: string;
  price?: ProductPrice;
  shortDescription: string;
  description: string[];
  images: MediaAsset[];
  /** Công dụng in trên mặt trước bao bì */
  labelClaims: string[];
  /** Dưỡng chất được nêu trên bao bì / tài liệu truyền thông */
  keyNutrients: string[];
  ingredients: string | null;
  nutritionFacts: NutrientFact[] | null;
  usageInstructions: string[] | null;
  storageInstructions: string | null;
  barcode?: string;
  isFeatured: boolean;
  badge?: string;
  /** Mô tả nguồn của dữ liệu sản phẩm */
  dataSource: string;
}

export interface FilterState {
  search: string;
  lines: ProductLine[];
  formats: ProductFormat[];
  ageGroups: AgeGroup[];
  sortBy: 'featured' | 'age' | 'price-asc' | 'price-desc' | 'name';
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  sections: { heading?: string; paragraphs: string[]; bullets?: string[] }[];
  category: string;
  author: string;
  /** ISO date, ví dụ 2026-10-26 */
  publishedAt: string;
  readTime: string;
  image: MediaAsset;
  tags: string[];
  references?: { label: string; url?: string }[];
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  productOfInterest: string;
  message: string;
}
