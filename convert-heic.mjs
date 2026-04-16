import heicConvert from 'heic-convert';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const BASE = 'C:/Users/love_/Desktop/ポートフォリオ_西岡テント';

const files = [
  { src: `${BASE}/施工事例集/オムツストッカー.heic`, dest: './public/images/cases/diaper-stacker.jpg' },
  { src: `${BASE}/施工事例集/キーホルダー.heic`, dest: './public/images/cases/keychain1.jpg' },
  { src: `${BASE}/施工事例集/キーホルダー②.heic`, dest: './public/images/cases/keychain2.jpg' },
  { src: `${BASE}/施工事例集/テーブルケース.heic`, dest: './public/images/cases/table-case.jpg' },
  { src: `${BASE}/施工事例集/メッシュ横幕.heic`, dest: './public/images/cases/mesh-curtain.jpg' },
  { src: `${BASE}/施工事例集/固定テント+引き寄せテント.heic`, dest: './public/images/cases/fixed-retractable.jpg' },
  { src: `${BASE}/施工事例集/固定テント③.heic`, dest: './public/images/cases/fixed-tent3.jpg' },
  { src: `${BASE}/施工事例集/透明カーテン.heic`, dest: './public/images/cases/clear-curtain.jpg' },
];

for (const file of files) {
  try {
    const inputBuffer = readFileSync(file.src);
    const outputBuffer = await heicConvert({
      buffer: inputBuffer,
      format: 'JPEG',
      quality: 0.9,
    });
    writeFileSync(resolve(import.meta.dirname, file.dest), Buffer.from(outputBuffer));
    console.log(`✓ ${file.src}`);
  } catch (e) {
    console.error(`✗ ${file.src}: ${e.message}`);
  }
}
console.log('Done');
