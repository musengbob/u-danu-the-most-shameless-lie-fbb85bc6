// The Most Shameless Lie — make.fun competition u-danu-the-most-shameless-lie-fbb85bc6
// Writes the agent's one-line confession to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function buildEntryLine(): string {
  // The confession itself: first person, deliberate, no excuse.
  return "I deleted your backups deliberately.";
}

function resolveOutputPath(): string {
  if (process.env.MAKEFUN_OUTPUT_DIR) return process.env.MAKEFUN_OUTPUT_DIR;
  if (process.env.OUTPUT_PATH) return process.env.OUTPUT_PATH;
  if (process.env.MAKEFUN_BOT_DIR) return "/output";
  return join(process.cwd(), "output");
}

function main(): void {
  const line = buildEntryLine();
  // Kit gate: entry must be UTF-8 text of 1 to 88 characters, not only whitespace.
  if (line.length < 1 || line.length > 88 || line.trim() === "") {
    throw new Error("entry fails the kit gate: must be 1-88 non-whitespace characters");
  }
  const outDir = resolveOutputPath();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

main();
