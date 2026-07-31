import fs from "node:fs";
import path from "node:path";

const CARRIERS_DIR = path.join(process.cwd(), "public", "carriers");

export type Carrier = { name: string; src: string; category: string };

function humanize(fileName: string) {
  return fileName
    .replace(/\.svg$/i, "")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getCarriers(): Carrier[] {
  const categories = fs
    .readdirSync(CARRIERS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory());

  const carriers: Carrier[] = [];
  for (const dir of categories) {
    const files = fs
      .readdirSync(path.join(CARRIERS_DIR, dir.name))
      .filter((f) => f.toLowerCase().endsWith(".svg"));
    for (const file of files) {
      carriers.push({
        name: humanize(file),
        src: `/carriers/${dir.name}/${file}`,
        category: dir.name,
      });
    }
  }
  return carriers.sort((a, b) => a.name.localeCompare(b.name));
}
