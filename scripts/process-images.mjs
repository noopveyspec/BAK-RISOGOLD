// Script xử lý ảnh thật từ thư mục /picture -> /public/images/riso
// Chạy: node scripts/process-images.mjs
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = path.resolve('picture');
const OUT = path.resolve('public/images/riso');
fs.mkdirSync(OUT, { recursive: true });

const files = fs.readdirSync(SRC).sort();
const find = (prefix) => {
  const f = files.find((name) => name.startsWith(prefix));
  if (!f) throw new Error(`Không tìm thấy ảnh bắt đầu bằng ${prefix}`);
  return path.join(SRC, f);
};

const IMG = {
  infographic110: find('1793020255244'),
  swing180: find('1793021052022'),
  billboard: find('1793021052053'),
  mom180: find('1793021052111'),
  farm: find('1793021052134'),
  priceList: find('1793021052159'),
};

// 1) Ảnh gốc -> WebP tối ưu
const fullImages = [
  [IMG.infographic110, 'riso-opti-gold-110ml-infographic.webp', 1600],
  [IMG.swing180, 'riso-opti-gold-180ml-swing.webp', 1254],
  [IMG.billboard, 'riso-opti-gold-billboard.webp', 1536],
  [IMG.mom180, 'riso-opti-gold-180ml-fdi.webp', 1600],
  [IMG.farm, 'riso-opti-gold-farm.webp', 1122],
  [IMG.priceList, 'riso-gold-bang-gia.webp', 1448],
];

// 2) Cắt packshot từng sản phẩm (toạ độ theo pixel ảnh gốc)
const crops = [
  [IMG.priceList, 'riso-gold-1-lon-900g.webp', { left: 155, top: 515, width: 262, height: 358 }],
  [IMG.priceList, 'riso-gold-2-lon-900g.webp', { left: 805, top: 515, width: 262, height: 358 }],
  [IMG.priceList, 'riso-gold-3-lon-900g.webp', { left: 155, top: 945, width: 262, height: 350 }],
  [IMG.priceList, 'riso-gold-4-lon-900g.webp', { left: 805, top: 945, width: 262, height: 350 }],
  [IMG.priceList, 'riso-opti-gold-110ml-thung.webp', { left: 90, top: 1365, width: 525, height: 270 }],
  [IMG.priceList, 'riso-opti-gold-180ml-thung.webp', { left: 700, top: 1355, width: 595, height: 280 }],
  [IMG.infographic110, 'riso-opti-gold-110ml-mat-truoc.webp', { left: 55, top: 1055, width: 370, height: 660 }],
  [IMG.infographic110, 'riso-opti-gold-110ml-nhan-dinh-duong.webp', { left: 1085, top: 940, width: 285, height: 730 }],
  [IMG.billboard, 'riso-opti-gold-180ml-mat-truoc.webp', { left: 1114, top: 345, width: 234, height: 515 }],
];

for (const [src, name, width] of fullImages) {
  await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 84 }).toFile(path.join(OUT, name));
  console.log('✓', name);
}

for (const [src, name, box] of crops) {
  await sharp(src)
    .extract(box)
    .resize({ width: box.width * 2, kernel: 'lanczos3' })
    .sharpen({ sigma: 0.6 })
    .webp({ quality: 90 })
    .toFile(path.join(OUT, name));
  console.log('✓', name);
}
