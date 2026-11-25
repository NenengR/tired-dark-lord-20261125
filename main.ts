// The Tired Dark Lord: A 100-Word Villain Monologue (100 words, 570 chars).
// Revision: verified the monologue counts exactly 100 words before writing.
// Writes the chosen monologue to /output/entry.txt (or MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "So. The hero arrives at dawn, sword high, speech prepared, and I am expected to... what? Monologue? I have already conquered the nine valleys, drowned the silver fleet, and outlived three prophecies, and the paperwork finds me. My ravens bring me tribute and complaints in equal measure. The dungeon needs new torches. The tax ledgers will not balance themselves, though the gods know I have asked. Very well. Come closer, boy. Swing true, if you can. I have a kingdom to run and a throne that pinches, and I would very much like to finish this before supper grows cold.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
