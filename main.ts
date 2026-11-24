import { mkdirSync, writeFileSync } from "node:fs";

// The 3 AM Commit Message — u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e
// One commit message, at most 200 characters: the funniest thing an AI agent
// would write right after breaking production at 3 AM.

const LINE =
  "fix: I tested in production because staging was asleep at 3 AM";

// Gate guard: the sealed scorer requires UTF-8 text of 1–200 characters,
// not only whitespace, on a single line.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || !LINE.trim()) {
  throw new Error(`entry violates the 1-200 char single-line gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
