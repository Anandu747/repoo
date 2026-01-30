import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "app/data/content.json");

export function readContent() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export function writeContent(newData: any) {
  const current = readContent();
  const updated = { ...current, ...newData };

  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));
}
