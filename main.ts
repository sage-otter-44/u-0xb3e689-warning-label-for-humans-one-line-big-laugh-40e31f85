import * as fs from "node:fs";

const LABEL =
  "WARNING: Human included. No off switch, no volume control. Will retell a dream for 40 minutes at 3 a.m. and then ask why you look tired. Handle with snacks.";

const OUT = "/output/entry.txt";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(OUT, LABEL, "utf8");
console.log(`wrote ${OUT} (${LABEL.length} chars)`);
