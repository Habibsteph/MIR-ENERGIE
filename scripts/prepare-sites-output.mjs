import { access, readdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

await access("dist/server/index.mjs");
await writeFile("dist/server/index.js", 'export { default } from "./index.mjs";\n');
// Keep local Finder metadata and unused, untracked asset variants out of delivery.
const trackedPublic = new Set(execFileSync("git", ["ls-files", "public"], { encoding: "utf8" }).trim().split("\n").map(p => p.slice(7)));
async function clean(dir, relative = "") {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    const key = relative ? `${relative}/${entry.name}` : entry.name;
    if (entry.name === ".DS_Store") await rm(path);
    else if (entry.isDirectory()) await clean(path, key);
    else if (!relative && !trackedPublic.has(key)) await rm(path);
  }
}
await clean("dist/client");
console.log("Sites Worker and public assets prepared.");
