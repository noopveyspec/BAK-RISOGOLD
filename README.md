# NutriCan Showcase — Hệ Thống Trưng Bày Sữa Bột Đóng Lon Chuyên Nghiệp

Website trưng bày, tra cứu thông tin khoa học và phân tích thành phần dinh dưỡng các dòng sữa bột đóng hộp (lon thiếc) cao cấp hàng đầu.

---

## 1. Công Nghệ & Kiến Trúc Dự Án

- **Framework**: Next.js 16 (App Router) với Partial Prefetching và Cache Components.
- **Ngôn ngữ**: TypeScript 5 (Strict typing, types rõ ràng trong `src/types/index.ts`).
- **Styling**: Tailwind CSS v4 với hệ thống CSS Tokens màu sắc cao cấp (Milk cream `#FAF9F5`, Deep Emerald `#0D4A3E`, Warm Gold `#C5925A`).
- **Icons**: Lucide React.
- **Thư viện tiện ích**: `clsx`, `tailwind-merge`.
- **Dữ liệu**: Nguồn dữ liệu tập trung duy nhất (Single Source of Truth) trong `src/data/products.ts` và `src/data/articles.ts`.
- **Hình ảnh**: Bộ ảnh lon thiếc thực tế chuẩn studio thương mại (Airtight Safety Seal, Metallic Pull Ring, Phân giải cao) đặt tại `public/images/`.

---

## 2. Cấu Trúc Thư Mục

```text
web trưng bày sữa/
├── public/
│   ├── images/
│   │   ├── hero/               # Hình ảnh bục trưng bày lon sữa Hero
│   │   └── products/           # Hình ảnh lon thiếc các dòng sữa bột
├── src/
│   ├── app/
│   │   ├── about/              # Trang giới thiệu sứ mệnh & 4 tiêu chuẩn lon thiếc
│   │   ├── contact/            # Trang liên hệ, đăng ký tư vấn & FAQ
│   │   ├── knowledge/          # Cẩm nang dinh dưỡng & pha sữa chuẩn y khoa
│   │   │   └── [slug]/         # Chi tiết từng bài viết cẩm nang
│   │   ├── products/           # Danh mục sản phẩm, bộ lọc đa năng & tìm kiếm
│   │   │   └── [slug]/         # Trang chi tiết lon sữa, bảng dinh dưỡng & HD pha
│   │   ├── globals.css         # Design system & CSS tokens
│   │   ├── layout.tsx          # Root Layout (Header, Footer, Inter font, SEO)
│   │   ├── page.tsx            # Trang chủ (9 phân vùng tiêu chuẩn thương mại)
│   │   ├── robots.ts           # SEO robots.txt chuẩn hóa
│   │   └── sitemap.ts          # Tự động xuất sitemap.xml động
│   ├── components/
│   │   ├── common/             # Breadcrumb, ProductImage với fallback SVG lon thiếc
│   │   ├── forms/              # ContactForm với xác thực & Consultation Modal
│   │   ├── knowledge/          # ArticleCard
│   │   ├── layout/             # Header, Footer với cảnh báo pháp lý y tế
│   │   └── products/           # ProductCard, ProductCatalogView, FilterSidebar, QuickViewModal
│   ├── data/
│   │   ├── articles.ts         # Dữ liệu cẩm nang dinh dưỡng
│   │   └── products.ts         # Master dataset sản phẩm, quy cách lon & hàm query
│   ├── lib/
│   │   └── utils.ts            # Hàm tiện ích cn()
│   └── types/
│       └── index.ts            # Định nghĩa kiểu dữ liệu TypeScript toàn diện
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 3. Hướng Dẫn Cài Đặt & Chạy Ứng Dụng

### Yêu Cầu Môi Trường
- Node.js LTS (phiên bản v20 trở lên, khuyến nghị v24)
- npm (hoặc pnpm / yarn)

### Cài Đặt Dependencies
```bash
npm install
```

### Chạy Môi Trường Phát Triển (Dev)
```bash
npm run dev
```
Mở trình duyệt tại: `http://localhost:3000`

### Build Production & Kiểm Thử
```bash
npm run build
npm run start
```

---

## 4. Hướng Dẫn Thêm / Sửa / Xóa Sản Phẩm

Mọi dữ liệu sản phẩm tuân theo nguyên tắc **Single Source of Truth** tại file:
👉 `src/data/products.ts`

### Cấu Trúc Mỗi Sản Phẩm (`Product`):
```typescript
{
  id: 'prod-09',
  slug: 'ten-san-pham-slug-than-thien-seo',
  name: 'Tên Đầy Đủ Của Sản Phẩm Sữa Bột',
  brand: 'Tên Thương Hiệu',
  category: 'infant-0-6m', // infant-0-6m | followon-6-12m | toddler-1-3y | junior-3y-plus | maternal | specialty
  categoryName: 'Sữa sơ sinh (0 - 6 tháng)',
  ageRange: '0 - 6 tháng',
  netWeight: '800g',
  origin: 'Đức',
  shortDescription: 'Mô tả ngắn hiển thị trên thẻ card...',
  description: 'Mô tả chuyên sâu về công nghệ và đạm...',
  images: ['/images/products/ten-anh-lon-sua.jpg'],
  keyHighlights: [
    'Bổ sung 2\'-FL HMO',
    'Tỷ lệ đạm Whey:Casein 60:40',
  ],
  ingredients: ['Sữa gầy', 'Đạm whey', 'DHA vi tảo', ...],
  nutritionFacts: [
    { nutrient: 'Năng lượng', per100g: '2095 kJ', perServing: '280 kJ', unit: 'kcal', benefit: '...' },
    ...
  ],
  usageInstructions: [
    { step: 1, title: 'Vệ sinh dụng cụ', detail: '...', tip: '...' },
    ...
  ],
  storageInstructions: 'Bảo quản nhiệt độ phòng dưới 25°C...',
  warnings: ['Sữa mẹ là thức ăn tốt nhất cho trẻ sơ sinh và trẻ nhỏ...'],
  isFeatured: true, // Hiển thị trên trang chủ
  status: 'available',
  rating: 4.9,
  reviewCount: 120,
  badge: 'Bán chạy', // Tùy chọn nhãn nổi bật
  tinSpec: {
    packagingType: 'Lon thiếc tráng thiếc an toàn, màng seal nhôm Easy-Peel',
    shelfLife: '24 tháng',
    temperatureCondition: 'Dưới 25°C',
    closureType: 'Nắp gài Airtight Safety Lock',
  }
}
```

Sau khi thêm sản phẩm vào mảng `PRODUCTS`, Next.js sẽ tự động tạo route chi tiết tại `/products/[slug]`, đồng bộ vào bộ lọc, tìm kiếm và sitemap.

---

## 5. Hướng Dẫn Tích Hợp Supabase & Backend (Khi Mở Rộng)

Khi cần lưu trữ form tư vấn vào database thực tế hoặc gửi thông báo:

1. **Tạo tài khoản Supabase**:
   Tạo bảng `consultation_leads`:
   ```sql
   create table consultation_leads (
     id uuid primary key default gen_random_uuid(),
     full_name text not null,
     phone text not null,
     email text,
     product_interest text,
     category_interest text,
     message text not null,
     created_at timestamp with time zone default timezone('utc'::text, now())
   );
   ```
2. **Cấu hình file `.env.local`**:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
3. **Tạo API Route `src/app/api/contact/route.ts`** để nhận payload và lưu trực tiếp qua `@supabase/supabase-js`.

---

## 6. Hướng Dẫn Triển Khai Lên Vercel

1. Đẩy mã nguồn lên kho chứa GitHub / GitLab / Bitbucket.
2. Truy cập [Vercel](https://vercel.com) -> Nhấn **Add New Project** -> Chọn repository.
3. Vercel tự động phát hiện Next.js.
4. Nhấn **Deploy**.
5. Trang web sẽ sẵn sàng với domain miễn phí dạng `*.vercel.app` hoặc trỏ tên miền riêng tùy chỉnh (e.g. `nutrican-showcase.vn`).

---

## 7. Tuân Thủ Pháp Luật & Y Tế

Trang web tuân thủ nghiêm ngặt **Nghị định số 100/2014/NĐ-CP** của Chính phủ Việt Nam về quy định kinh doanh và sử dụng sản phẩm dinh dưỡng dùng cho trẻ nhỏ:
- Mọi trang đều có tuyên bố tôn trọng sữa mẹ: *"Sữa mẹ là thức ăn tốt nhất cho sức khỏe và sự phát triển toàn diện của trẻ sơ sinh và trẻ nhỏ"*.
- Không kinh doanh trực tuyến các sản phẩm sữa thay thế sữa mẹ cho trẻ dưới 24 tháng tuổi.
- Toàn bộ dữ liệu thành phần là tài liệu tra cứu khoa học minh bạch.
