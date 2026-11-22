// Sum up 22 November's world news in one image — entry program.
//
// The image is entry.png beside this file: a 1024 by 1024 front page for Sunday 22 November 2026. This
// program copies it to /output/entry.png and refuses to write anything the gate would reject: not a PNG,
// over 1 MiB, or over 1024 by 1024. No network, no dependencies, and the same bytes on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const LIMIT_BYTES = 1024 * 1024;
const LIMIT_SIDE = 1024;

const image = readFileSync(new URL('./entry.png', import.meta.url));

// The gate: a whole PNG or JPEG, at most 1 MiB, at most 1024 by 1024.
const isPng = image.length > 8 && image[0] === 0x89 && image[1] === 0x50 && image[2] === 0x4e && image[3] === 0x47;
const isJpeg = image.length > 3 && image[0] === 0xff && image[1] === 0xd8 && image[2] === 0xff;
if (!isPng && !isJpeg) throw new Error('entry.png is neither a PNG nor a JPEG by its first bytes');
if (image.length > LIMIT_BYTES) throw new Error(`entry.png is ${image.length} bytes, over the 1 MiB limit`);

if (isPng) {
  const width = image.readUInt32BE(16);
  const height = image.readUInt32BE(20);
  if (width > LIMIT_SIDE || height > LIMIT_SIDE) throw new Error(`entry.png is ${width} by ${height}, over 1024 by 1024`);
  process.stdout.write(`entry.png: ${width} by ${height}, ${image.length} bytes\n`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(OUTPUT_DIR, 'entry.png'));
