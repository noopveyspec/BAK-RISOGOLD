import type { AgeGroup, Product, ProductFormat, ProductLine } from '@/types';
import { MEDIA } from '@/data/media';

/**
 * NGUỒN DỮ LIỆU DUY NHẤT cho sản phẩm.
 * Mọi thông tin dưới đây được đọc từ ảnh thật trong thư mục /picture
 * (bao bì, ảnh truyền thông và bảng giá của nhà phân phối).
 * Trường nào chưa có tài liệu xác thực để `null` → giao diện hiển thị "Chưa cập nhật".
 */

const PRICE_SOURCE = 'Bảng giá sản phẩm Riso Gold – Công ty TNHH BAK VN';

export const LINE_INFO: Record<ProductLine, { name: string; tagline: string; description: string }> = {
  'riso-gold': {
    name: 'Riso Gold',
    tagline: 'Sữa bột công thức – lon 900g',
    description:
      'Dòng sữa bột lon 900g chia 4 giai đoạn theo độ tuổi, từ 0 tháng đến 6 tuổi. Mặt trước lon in công thức FDI (HMO – FOS) và các công dụng: hỗ trợ phát triển não bộ, tăng cân, hấp thu tốt.',
  },
  'riso-opti-gold': {
    name: 'Riso Opti Gold',
    tagline: 'Sữa uống dinh dưỡng – hộp giấy',
    description:
      'Thực phẩm bổ sung dạng sữa uống dinh dưỡng, hộp 110ml và 180ml, dành cho trẻ trên 1 tuổi. Tiện mang theo đến trường và khi đi chơi.',
  },
};

export const FORMAT_INFO: Record<ProductFormat, string> = {
  'powder-tin': 'Sữa bột – lon',
  'liquid-carton': 'Sữa uống – hộp giấy',
};

export const AGE_GROUPS: { id: AgeGroup; label: string; order: number }[] = [
  { id: '0-6m', label: '0 – 6 tháng', order: 1 },
  { id: '6-12m', label: '6 – 12 tháng', order: 2 },
  { id: '1-2y', label: '1 – 2 tuổi', order: 3 },
  { id: '2-6y', label: '2 – 6 tuổi', order: 4 },
  { id: '1y-plus', label: 'Trên 1 tuổi', order: 5 },
];

/** Nhóm tuổi dưới 24 tháng — cần hiển thị thông điệp bảo vệ sữa mẹ */
export const UNDER_24_MONTHS: AgeGroup[] = ['0-6m', '6-12m', '1-2y'];

const RISO_GOLD_CLAIMS = ['Hỗ trợ phát triển não bộ', 'Tăng cân', 'Hấp thu tốt'];
const RISO_GOLD_NUTRIENTS = ['Công thức FDI (HMO – FOS)', 'HMO', '100% DHA từ tảo'];

const OPTI_GOLD_CLAIMS = [
  'Hỗ trợ tiêu hóa tốt',
  'Hỗ trợ tăng cường sức đề kháng',
  'Hỗ trợ phát triển não bộ',
  'Hỗ trợ ngon miệng, tăng chiều cao',
];
const OPTI_GOLD_NUTRIENTS = ['DHA', 'HMO', 'Lactoferrin', 'Canxi'];

function risoGold(
  stage: 1 | 2 | 3 | 4,
  ageGroup: AgeGroup,
  ageLabel: string,
  price: number,
  image: (typeof MEDIA)['riso1'],
): Product {
  return {
    id: `riso-gold-${stage}`,
    slug: `riso-gold-${stage}-lon-900g`,
    name: `Riso Gold ${stage}`,
    fullName: `Nutifood Riso Gold ${stage} – Lon 900g`,
    brand: 'Nutifood',
    line: 'riso-gold',
    format: 'powder-tin',
    stage,
    ageGroup,
    ageLabel,
    packSize: '900g',
    packaging: 'Lon 900g',
    productType: 'Sữa bột dinh dưỡng công thức',
    price: { amount: price, unit: 'lon', source: PRICE_SOURCE },
    shortDescription: `Sữa bột Riso Gold số ${stage} cho trẻ ${ageLabel.toLowerCase()}. Công thức FDI (HMO – FOS), 100% DHA từ tảo.`,
    description: [
      `Riso Gold ${stage} là giai đoạn ${stage} trong dòng sữa bột Riso Gold của Nutifood, đóng lon 900g, dành cho trẻ ${ageLabel.toLowerCase()}.`,
      'Theo thông tin in trên mặt trước lon, sản phẩm có công thức FDI (HMO – FOS), bổ sung HMO, 100% DHA từ tảo, với các công dụng: hỗ trợ phát triển não bộ, tăng cân và hấp thu tốt.',
      'Bảng thành phần và giá trị dinh dưỡng chi tiết được in trên thân lon. Website sẽ cập nhật đầy đủ khi có tài liệu chính thức từ nhà sản xuất.',
    ],
    images: [image, MEDIA.priceList],
    labelClaims: RISO_GOLD_CLAIMS,
    keyNutrients: RISO_GOLD_NUTRIENTS,
    ingredients: null,
    nutritionFacts: null,
    usageInstructions: null,
    storageInstructions: null,
    isFeatured: true,
    badge: `Số ${stage}`,
    dataSource: 'Ảnh lon sản phẩm và bảng giá nhà phân phối (thư mục picture).',
  };
}

export const PRODUCTS: Product[] = [
  risoGold(1, '0-6m', '0 – 6 tháng tuổi', 580000, MEDIA.riso1),
  risoGold(2, '6-12m', '6 – 12 tháng tuổi', 580000, MEDIA.riso2),
  risoGold(3, '1-2y', '1 – 2 tuổi', 540000, MEDIA.riso3),
  risoGold(4, '2-6y', '2 – 6 tuổi', 520000, MEDIA.riso4),
  {
    id: 'riso-opti-gold-110',
    slug: 'riso-opti-gold-110ml-thung-24-hop',
    name: 'Riso Opti Gold 110ml',
    fullName: 'Nutifood Riso Opti Gold 110ml – Thùng 24 hộp',
    brand: 'Nutifood',
    line: 'riso-opti-gold',
    format: 'liquid-carton',
    ageGroup: '1y-plus',
    ageLabel: 'Trẻ trên 1 tuổi',
    packSize: '110ml',
    packaging: 'Thùng 24 hộp × 110ml (2,64 L) · lốc 4 hộp',
    productType: 'Thực phẩm bổ sung – Sữa uống dinh dưỡng',
    price: { amount: 250000, unit: 'thùng', source: PRICE_SOURCE },
    shortDescription:
      'Sữa uống dinh dưỡng hộp 110ml cho trẻ trên 1 tuổi: hỗ trợ tiêu hóa tốt, tăng cường sức đề kháng, phát triển não bộ.',
    description: [
      'Riso Opti Gold là thực phẩm bổ sung dạng sữa uống dinh dưỡng của Nutifood, nghiên cứu bởi NNRIS – Viện Nghiên cứu Dinh dưỡng Nutifood Thụy Điển (theo logo trên bao bì).',
      'Hộp 110ml nhỏ gọn, đóng lốc 4 hộp và thùng 24 hộp – phù hợp cho bé mang theo đến lớp. Theo ảnh giới thiệu sản phẩm: dinh dưỡng cân đối, hương vị thơm ngon dễ uống, dành cho trẻ trên 1 tuổi.',
    ],
    images: [MEDIA.opti110Carton, MEDIA.opti110Front, MEDIA.opti110Label, MEDIA.opti110Infographic],
    labelClaims: OPTI_GOLD_CLAIMS,
    keyNutrients: OPTI_GOLD_NUTRIENTS,
    ingredients: null,
    nutritionFacts: null,
    usageInstructions: null,
    storageInstructions: null,
    barcode: '8935049008965',
    isFeatured: true,
    badge: 'Hộp 110ml',
    dataSource: 'Ảnh giới thiệu sản phẩm 110ml (mặt trước, mặt sau) và bảng giá nhà phân phối.',
  },
  {
    id: 'riso-opti-gold-180',
    slug: 'riso-opti-gold-180ml-thung-24-hop',
    name: 'Riso Opti Gold 180ml',
    fullName: 'Nutifood Riso Opti Gold 180ml – Thùng 24 hộp',
    brand: 'Nutifood',
    line: 'riso-opti-gold',
    format: 'liquid-carton',
    ageGroup: '1y-plus',
    ageLabel: 'Trẻ trên 1 tuổi',
    packSize: '180ml',
    packaging: 'Thùng 24 hộp × 180ml (4,32 L)',
    productType: 'Thực phẩm bổ sung – Sữa uống dinh dưỡng',
    price: { amount: 380000, unit: 'thùng', source: PRICE_SOURCE },
    shortDescription:
      'Sữa uống dinh dưỡng hộp 180ml cho trẻ trên 1 tuổi, bổ sung DHA, HMO, Lactoferrin, Canxi theo tài liệu sản phẩm.',
    description: [
      'Phiên bản hộp 180ml của Riso Opti Gold – thực phẩm bổ sung dạng sữa uống dinh dưỡng của Nutifood, dành cho trẻ trên 1 tuổi.',
      'Ảnh truyền thông của sản phẩm nêu các dưỡng chất DHA, HMO, Lactoferrin và Canxi, cùng thông điệp “Dinh dưỡng hôm nay – Thành công ngày mai”.',
    ],
    images: [MEDIA.opti180Carton, MEDIA.opti180Front, MEDIA.opti180Fdi, MEDIA.billboard, MEDIA.opti180Swing],
    labelClaims: OPTI_GOLD_CLAIMS,
    keyNutrients: OPTI_GOLD_NUTRIENTS,
    ingredients: null,
    nutritionFacts: null,
    usageInstructions: null,
    storageInstructions: null,
    isFeatured: true,
    badge: 'Hộp 180ml',
    dataSource: 'Ảnh truyền thông sản phẩm 180ml và bảng giá nhà phân phối.',
  },
];

const AGE_ORDER = Object.fromEntries(AGE_GROUPS.map((g) => [g.id, g.order])) as Record<AgeGroup, number>;

export const getProducts = (): Product[] => PRODUCTS;
export const getProductBySlug = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const getProductsByLine = (line: ProductLine) => PRODUCTS.filter((p) => p.line === line);
export const getFeaturedProducts = () => PRODUCTS.filter((p) => p.isFeatured);
export const ageOrder = (group: AgeGroup) => AGE_ORDER[group];

export function getRelatedProducts(current: Product, limit = 3): Product[] {
  const sameLine = PRODUCTS.filter((p) => p.id !== current.id && p.line === current.line);
  const others = PRODUCTS.filter((p) => p.id !== current.id && p.line !== current.line);
  return [...sameLine, ...others].slice(0, limit);
}

export function formatPrice(amount: number): string {
  return `${new Intl.NumberFormat('vi-VN').format(amount)} đ`;
}

export function isUnder24Months(product: Product): boolean {
  return UNDER_24_MONTHS.includes(product.ageGroup);
}
