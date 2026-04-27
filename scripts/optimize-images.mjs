import sharp from 'sharp';
import { readdirSync, statSync, mkdirSync } from 'fs';
import { resolve, dirname, extname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = resolve(__dirname, '../public/assets/images');

const SUPPORTED = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];
const QUALITY = 80;

let totalBefore = 0;
let totalAfter = 0;

async function optimizeDir(dir) {
  const entries = readdirSync(dir);

  for (const entry of entries) {
    const fullPath = resolve(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      await optimizeDir(fullPath);
      continue;
    }

    const ext = extname(entry);
    if (!SUPPORTED.includes(ext)) continue;

    const webpName = basename(entry, ext) + '.webp';
    const webpPath = resolve(dir, webpName);

    const sizeBefore = stat.size;
    totalBefore += sizeBefore;

    await sharp(fullPath)
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    const sizeAfter = statSync(webpPath).size;
    totalAfter += sizeAfter;

    const saving = Math.round((1 - sizeAfter / sizeBefore) * 100);
    console.log(`✅ ${entry} → ${webpName} (${(sizeBefore/1024).toFixed(0)}KB → ${(sizeAfter/1024).toFixed(0)}KB, -${saving}%)`);
  }
}

await optimizeDir(assetsDir);

console.log(`\n🎉 Total: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB (-${Math.round((1 - totalAfter/totalBefore)*100)}%)`);
