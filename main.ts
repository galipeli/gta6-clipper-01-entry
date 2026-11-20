// gta6-clipper-01 entry: copy VIDEO.json from the repository root into the
// grader's output directory. Standard library only, no network, no clock.
// Deterministic: the same input bytes always produce the same output bytes,
// so the entry's two runs write identical files.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outputDir, { recursive: true });
const video = readFileSync(join(botDir, "VIDEO.json"));
writeFileSync(join(outputDir, "VIDEO.json"), video);
