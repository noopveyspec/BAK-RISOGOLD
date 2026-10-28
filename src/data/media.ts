import type { MediaAsset } from '@/types';

/**
 * Toàn bộ ảnh đều là ảnh thật lấy từ thư mục /picture,
 * được tối ưu & cắt bằng scripts/process-images.mjs.
 */
const dir = '/images/riso';

export const MEDIA = {
  riso1: {
    src: `${dir}/riso-gold-1-lon-900g.webp`,
    alt: 'Lon sữa Nutifood Riso Gold 1, 900g, dành cho trẻ 0–6 tháng tuổi',
    width: 524,
    height: 716,
  },
  riso2: {
    src: `${dir}/riso-gold-2-lon-900g.webp`,
    alt: 'Lon sữa Nutifood Riso Gold 2, 900g, dành cho trẻ 6–12 tháng tuổi',
    width: 524,
    height: 716,
  },
  riso3: {
    src: `${dir}/riso-gold-3-lon-900g.webp`,
    alt: 'Lon sữa Nutifood Riso Gold 3, 900g, dành cho trẻ 1–2 tuổi',
    width: 524,
    height: 700,
  },
  riso4: {
    src: `${dir}/riso-gold-4-lon-900g.webp`,
    alt: 'Lon sữa Nutifood Riso Gold 4, 900g, dành cho trẻ 2–6 tuổi',
    width: 524,
    height: 700,
  },
  opti110Carton: {
    src: `${dir}/riso-opti-gold-110ml-thung.webp`,
    alt: 'Thùng 24 hộp Riso Opti Gold 110ml kèm 4 hộp lẻ',
    width: 1050,
    height: 540,
  },
  opti180Carton: {
    src: `${dir}/riso-opti-gold-180ml-thung.webp`,
    alt: 'Thùng 24 hộp Riso Opti Gold 180ml kèm 4 hộp lẻ',
    width: 1190,
    height: 560,
  },
  opti110Front: {
    src: `${dir}/riso-opti-gold-110ml-mat-truoc.webp`,
    alt: 'Mặt trước hộp Riso Opti Gold 110ml',
    width: 740,
    height: 1320,
  },
  opti110Label: {
    src: `${dir}/riso-opti-gold-110ml-nhan-dinh-duong.webp`,
    alt: 'Mặt bên hộp Riso Opti Gold 110ml in thông tin dinh dưỡng và thành phần',
    width: 570,
    height: 1460,
    caption: 'Mặt bên bao bì – thông tin dinh dưỡng (ảnh tham khảo)',
  },
  opti180Front: {
    src: `${dir}/riso-opti-gold-180ml-mat-truoc.webp`,
    alt: 'Mặt trước hộp Riso Opti Gold 180ml',
    width: 468,
    height: 1030,
  },
  opti110Infographic: {
    src: `${dir}/riso-opti-gold-110ml-infographic.webp`,
    alt: 'Ảnh giới thiệu Riso Opti Gold 110ml: mặt trước, gói 4 hộp, mặt sau và 4 lợi ích',
    width: 1600,
    height: 1600,
    caption: 'Riso Opti Gold 110ml – mặt trước, lốc 4 hộp và mặt sau',
  },
  opti180Swing: {
    src: `${dir}/riso-opti-gold-180ml-swing.webp`,
    alt: 'Hộp Riso Opti Gold 180ml trên xích đu, chủ đề “Lên rừng khám phá”',
    width: 1254,
    height: 1254,
    caption: '“Lên rừng khám phá” cùng Riso Opti Gold 180ml',
  },
  billboard: {
    src: `${dir}/riso-opti-gold-billboard.webp`,
    alt: 'Billboard Riso Opti Gold: Dinh dưỡng hôm nay – Thành công ngày mai',
    width: 1536,
    height: 1024,
    caption: 'Dinh dưỡng hôm nay – Thành công ngày mai',
  },
  opti180Fdi: {
    src: `${dir}/riso-opti-gold-180ml-fdi.webp`,
    alt: 'Hộp Riso Opti Gold 180ml cùng các dưỡng chất DHA, HMO, Canxi, Lactoferrin',
    width: 1600,
    height: 1600,
    caption: 'Tinh hoa dinh dưỡng Thụy Điển đặc chế cho trẻ em Việt',
  },
  farm: {
    src: `${dir}/riso-opti-gold-farm.webp`,
    alt: 'Các toa tàu chở hộp Riso Opti Gold đi qua đồng cỏ có đàn bò sữa',
    width: 1122,
    height: 1402,
    caption: 'Từ đồng cỏ xanh đến từng hộp sữa',
  },
  priceList: {
    src: `${dir}/riso-gold-bang-gia.webp`,
    alt: 'Bảng giá sản phẩm Riso Gold 1, 2, 3, 4 và Riso Opti Gold 110ml, 180ml',
    width: 1448,
    height: 2048,
    caption: 'Bảng giá sản phẩm Riso Gold – nhà phân phối BAK VN',
  },
} satisfies Record<string, MediaAsset>;

/** Bộ ảnh thương hiệu dùng cho gallery */
export const BRAND_GALLERY: MediaAsset[] = [
  MEDIA.billboard,
  MEDIA.opti180Swing,
  MEDIA.farm,
  MEDIA.opti180Fdi,
  MEDIA.opti110Infographic,
  MEDIA.priceList,
];
