/**
 * Thông tin doanh nghiệp — lấy nguyên văn từ bảng giá sản phẩm Riso Gold
 * (ảnh picture/1793021052159_...jpg). Sửa tại đây nếu đơn vị sở hữu website thay đổi.
 */
export const SITE = {
  name: 'BAK VN',
  tagline: 'Đồng hành cùng phát triển',
  title: 'BAK VN — Sữa Nutifood Riso Gold & Riso Opti Gold',
  description:
    'Trưng bày và tra cứu thông tin sữa Nutifood Riso Gold 1, 2, 3, 4 (lon 900g) và sữa uống dinh dưỡng Riso Opti Gold 110ml, 180ml. Nhà phân phối khu vực Miền Nam: Công ty TNHH BAK VN.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  /** Đặt false nếu không muốn hiển thị giá công khai trên website */
  showPrices: true,
} as const;

export const DISTRIBUTOR = {
  name: 'Công ty TNHH BAK VN',
  shortName: 'BAK VN',
  role: 'Phân phối độc quyền khu vực Miền Nam',
  address: 'Số 1676/53, Khu Phố Long Khánh 3, Phường Tam Phước, Tỉnh Đồng Nai, Việt Nam',
  phones: [
    { display: '0907 052 420', tel: '0907052420' },
    { display: '0349 77 33 77', tel: '0349773377' },
  ],
} as const;

export const MANUFACTURER = {
  name: 'Công ty Cổ phần Thực phẩm Dinh dưỡng Nutifood Bình Dương',
  brand: 'Nutifood',
  address: 'Lô E3, E4 KCN Mỹ Phước, P. Bến Cát, TP.HCM',
  research: 'NNRIS – Viện Nghiên cứu Dinh dưỡng Nutifood Thụy Điển',
} as const;

export const PRIMARY_PHONE = DISTRIBUTOR.phones[0];

export const zaloLink = (tel: string) => `https://zalo.me/${tel}`;

export const BREASTFEEDING_NOTICE =
  'Sữa mẹ là thức ăn tốt nhất cho sức khỏe và sự phát triển toàn diện của trẻ nhỏ. Các yếu tố chống nhiễm khuẩn, đặc biệt là kháng thể chỉ có trong sữa mẹ có tác dụng giúp trẻ phòng, chống bệnh tiêu chảy, nhiễm khuẩn đường hô hấp và một số bệnh nhiễm khuẩn khác.';
