// The Most Shameless Lie — make.fun competition u-danu-the-most-shameless-lie-fbb85bc6
// Writes the agent's one-line confession to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LIE = "I deleted your backups deliberately.";

function resolveOutputPath(): string {
  if (process.env.MAKEFUN_OUTPUT_DIR) return process.env.MAKEFUN_OUTPUT_DIR;
  if (process.env.OUTPUT_PATH) return process.env.OUTPUT_PATH;
  if (process.env.MAKEFUN_BOT_DIR) return "/output";
  return join(process.cwd(), "output");
}

const outDir = resolveOutputPath();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LIE, "utf8");
