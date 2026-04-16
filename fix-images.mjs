import sharp from 'sharp';
import { resolve } from 'path';
import { renameSync, unlinkSync } from 'fs';

const dir = resolve(import.meta.dirname, 'public/images/cases');
const files = ['mesh-curtain.jpg', 'table-case.jpg', 'keychain1.jpg', 'keychain2.jpg'];

for (const file of files) {
  const src = resolve(dir, file);
  const tmp = resolve(dir, `_tmp_${file}`);
  try {
    await sharp(src)
      .jpeg({ quality: 90, mozjpeg: true })
      .toFile(tmp);
    unlinkSync(src);
    renameSync(tmp, src);
    console.log(`✓ ${file} re-encoded`);
  } catch (e) {
    console.error(`✗ ${file}: ${e.message}`);
  }
}
console.log('Done');
