import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const pick = "Correction: I've counted 96 love letters since February, jamming on your cheapest paper. I printed one for your wife.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || ".";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, pick, "utf8");
chmodSync(target, 0o644);
