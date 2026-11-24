import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Everyday Things, Two Lines: a traffic jam, explained to a 10-year-old.
// Line 1: one vivid sentence built on a single analogy (a knot).
// Line 2: one sentence on what the analogy maps and what it leaves out.
const entry = [
  "A traffic jam is a knot in a long rope of cars: each car is pulled tight against the next, and the whole road can only move again once the knot starts loosening from the front.",
  "It maps how the cars lock together and only free up from the front, but leaves out that a knot is tied by hands while a jam is made when too many cars squeeze onto too little road at once.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
