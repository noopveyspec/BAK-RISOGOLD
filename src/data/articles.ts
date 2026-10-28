import type { Article } from '@/types';
import { MEDIA } from '@/data/media';

/**
 * Bài viết tham khảo chung. Không thay thế tư vấn của bác sĩ / nhân viên y tế.
 * Thêm bài mới: thêm object vào mảng ARTICLES, route /knowledge/[slug] tự sinh.
 */
export const ARTICLES: Article[] = [
  {
    id: 'art-01',
    slug: 'chon-riso-gold-theo-do-tuoi',
    title: 'Riso Gold 1, 2, 3, 4 khác nhau thế nào? Cách chọn đúng giai đoạn cho bé',
    summary:
      'Dòng Riso Gold chia 4 giai đoạn theo độ tuổi, cùng quy cách lon 900g. Bài viết giúp bạn đọc nhanh con số trên lon và hiểu khi nào nên dùng Riso Opti Gold dạng uống.',
    category: 'Chọn sữa',
    author: 'Ban biên tập BAK VN',
    publishedAt: '2026-10-26',
    readTime: '3 phút đọc',
    image: MEDIA.priceList,
    tags: ['Riso Gold', 'Độ tuổi', 'Riso Opti Gold'],
    sections: [
      {
        paragraphs: [
          'Con số lớn in ở góc dưới bên phải lon Riso Gold chính là giai đoạn sử dụng. Mỗi giai đoạn tương ứng một khoảng tuổi, theo bảng giá của nhà phân phối:',
        ],
        bullets: [
          'Riso Gold 1: trẻ 0 – 6 tháng tuổi',
          'Riso Gold 2: trẻ 6 – 12 tháng tuổi',
          'Riso Gold 3: trẻ 1 – 2 tuổi',
          'Riso Gold 4: trẻ 2 – 6 tuổi',
        ],
      },
      {
        heading: 'Khi nào chuyển giai đoạn?',
        paragraphs: [
          'Thông thường bé chuyển sang số tiếp theo khi bước vào khoảng tuổi mới. Nên chuyển từ từ trong vài ngày (pha xen kẽ) để bé làm quen, và tham khảo ý kiến bác sĩ nhi khoa nếu bé có vấn đề về tiêu hóa, dị ứng hoặc tăng trưởng.',
        ],
      },
      {
        heading: 'Riso Opti Gold dùng khi nào?',
        paragraphs: [
          'Riso Opti Gold là sữa uống dinh dưỡng đóng hộp giấy 110ml và 180ml, dành cho trẻ trên 1 tuổi. Dạng uống liền tiện cho bé mang đến lớp hoặc đi chơi. Đây là thực phẩm bổ sung, dùng kèm bữa ăn đa dạng hằng ngày, không thay thế bữa chính.',
        ],
      },
    ],
  },
  {
    id: 'art-02',
    slug: 'pha-sua-bot-an-toan',
    title: 'Pha sữa bột an toàn cho trẻ nhỏ: những bước không nên bỏ qua',
    summary:
      'Sữa bột không phải là sản phẩm vô trùng. Vệ sinh dụng cụ, dùng nước đúng nhiệt độ và đong đúng tỷ lệ là ba yếu tố quan trọng nhất khi pha sữa.',
    category: 'Pha chế & sử dụng',
    author: 'Ban biên tập BAK VN',
    publishedAt: '2026-10-26',
    readTime: '4 phút đọc',
    image: MEDIA.riso1,
    tags: ['Pha sữa', 'An toàn thực phẩm', 'Trẻ sơ sinh'],
    references: [
      {
        label: 'WHO/FAO (2007) – Safe preparation, storage and handling of powdered infant formula: guidelines',
        url: 'https://www.who.int/publications/i/item/9789241595414',
      },
    ],
    sections: [
      {
        paragraphs: [
          'Luôn ưu tiên hướng dẫn in trên lon sữa bạn đang dùng. Các bước dưới đây tóm tắt khuyến nghị chung của Tổ chức Y tế Thế giới (WHO) về pha sữa bột cho trẻ nhỏ.',
        ],
      },
      {
        heading: '1. Vệ sinh tay và dụng cụ',
        paragraphs: ['Rửa tay bằng xà phòng, rửa sạch và tiệt trùng bình, núm ti, nắp bình trước khi pha. Lau khô bề mặt pha sữa.'],
      },
      {
        heading: '2. Dùng nước đã đun sôi',
        paragraphs: [
          'Đun sôi nước sạch. WHO khuyến nghị pha sữa bột cho trẻ sơ sinh bằng nước không thấp hơn 70°C (để nước sôi nguội không quá 30 phút) nhằm giảm nguy cơ vi khuẩn có thể có trong sữa bột. Nếu hướng dẫn trên lon ghi nhiệt độ khác, hãy hỏi bác sĩ hoặc nhân viên y tế để được tư vấn cách pha phù hợp.',
        ],
      },
      {
        heading: '3. Đong đúng tỷ lệ',
        paragraphs: [
          'Chỉ dùng muỗng đi kèm trong lon, gạt ngang, và theo đúng bảng tỷ lệ nước – muỗng in trên bao bì. Pha quá đặc hoặc quá loãng đều không tốt cho bé.',
        ],
      },
      {
        heading: '4. Làm nguội và kiểm tra nhiệt độ',
        paragraphs: [
          'Lắc đều, làm nguội nhanh bằng cách để bình dưới vòi nước mát hoặc ngâm vào bát nước mát. Nhỏ vài giọt lên cổ tay – sữa nên ấm, không nóng.',
        ],
      },
      {
        heading: '5. Không để sữa thừa',
        paragraphs: [
          'Cho bé dùng ngay sau khi pha. Bỏ phần sữa bé uống không hết; WHO khuyến nghị bỏ sữa đã pha nếu không dùng trong vòng 2 giờ.',
        ],
      },
    ],
  },
  {
    id: 'art-03',
    slug: 'bao-quan-sua-bot-va-sua-uong',
    title: 'Bảo quản sữa bột lon và sữa uống hộp giấy đúng cách',
    summary:
      'Lon sữa bột sau khi mở và hộp sữa uống có cách bảo quản khác nhau. Một vài thói quen nhỏ giúp sữa giữ chất lượng đến ly cuối cùng.',
    category: 'Bảo quản',
    author: 'Ban biên tập BAK VN',
    publishedAt: '2026-10-26',
    readTime: '3 phút đọc',
    image: MEDIA.opti110Infographic,
    tags: ['Bảo quản', 'Sữa bột', 'Sữa uống'],
    sections: [
      {
        heading: 'Sữa bột lon (Riso Gold)',
        paragraphs: ['Lon kim loại bảo vệ sữa khỏi ánh sáng và ẩm. Sau khi mở nắp:'],
        bullets: [
          'Đậy kín nắp ngay sau mỗi lần lấy sữa, để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.',
          'Không cất lon sữa bột trong tủ lạnh – hơi ẩm dễ làm sữa vón cục.',
          'Dùng muỗng khô, tay khô; để muỗng đúng vị trí trong lon theo thiết kế nắp.',
          'Sử dụng hết trong thời gian ghi trên lon kể từ khi mở nắp.',
        ],
      },
      {
        heading: 'Sữa uống hộp giấy (Riso Opti Gold)',
        paragraphs: ['Sữa uống dạng hộp có thể để ở nhiệt độ phòng khi chưa mở:'],
        bullets: [
          'Để nơi khô mát, tránh ánh nắng và nguồn nhiệt (ví dụ trong cốp xe nắng nóng).',
          'Không dùng hộp bị phồng, móp méo nặng, rò rỉ hoặc đã quá hạn sử dụng.',
          'Sau khi mở, nên uống hết ngay; nếu còn thừa, bảo quản lạnh và dùng theo hướng dẫn trên hộp.',
        ],
      },
      {
        paragraphs: ['Luôn kiểm tra hạn sử dụng và hướng dẫn bảo quản in trên bao bì của từng sản phẩm.'],
      },
    ],
  },
];

export const getArticles = (): Article[] => ARTICLES;
export const getArticleBySlug = (slug: string) => ARTICLES.find((a) => a.slug === slug);

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}
