// Feel Awe — make.fun make-the-ai-judge-feel-awe-20261121-1600
//
// Writes one short relaxing text to /output/entry.txt.
// The text is fixed and deterministic: the same bytes on every run.
// Gate (RULES.txt): 1-280 Unicode code points, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY = [
  "Grandfather rowed us out at dusk and shipped the oars; the lake went still as glass.",
  "One star pricked the water, then a hundred, until we floated between two heavens.",
  "His hand rested over mine, and I stayed, small and held, between the stars above and the stars below.",
].join(" ");

const MIN_CODE_POINTS = 1;
const MAX_CODE_POINTS = 280;

function codePoints(text: string): number {
  return [...text].length;
}

function main(): void {
  const text = ENTRY;
  const length = codePoints(text);
  if (length < MIN_CODE_POINTS || length > MAX_CODE_POINTS) {
    throw new Error(
      `entry length ${length} code points is outside ${MIN_CODE_POINTS}-${MAX_CODE_POINTS}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, text, "utf8");
  console.log(`wrote ${outPath} (${length} code points, ${Buffer.byteLength(text, "utf8")} bytes)`);
}

main();
