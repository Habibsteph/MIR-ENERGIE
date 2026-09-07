import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import test, { after, before } from "node:test";

let server;
let origin;
const pages = new Map();
const routes = ["/", "/solutions", "/about", "/contact", "/legal-notice", "/privacy-policy"];
before(async () => {
  server = spawn(process.execPath, [".output/server/index.mjs"], {
    cwd: new URL("../", import.meta.url),
    env: { ...process.env, PORT: "0", NITRO_PORT: "0", HOST: "127.0.0.1", NITRO_HOST: "127.0.0.1" },
    stdio: ["ignore", "pipe", "pipe"],
  });
  let output = "";
  origin = await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error(`Server did not start: ${output}`)), 20000);
    server.stdout.on("data", chunk => {
      output += chunk;
      const match = output.match(/http:\/\/127\.0\.0\.1:\d+/);
      if (match) { clearTimeout(timeout); resolve(match[0]); }
    });
    server.stderr.on("data", chunk => { output += chunk; });
    server.once("error", error => { clearTimeout(timeout); reject(error); });
    server.once("exit", code => { clearTimeout(timeout); reject(new Error(`Server exited ${code}: ${output}`)); });
  });
  for (const route of routes) {
    const response = await fetch(origin + route);
    assert.equal(response.status, 200, route);
    pages.set(route, await response.text());
  }
});
after(async () => {
  if (server && server.exitCode === null) {
    const exited = once(server, "exit");
    server.kill("SIGTERM");
    await exited;
  }
});

const visibleHtml = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");

test("all public pages render English content and route-specific metadata", () => {
  const titles = new Set();
  for (const [route, html] of pages) {
    assert.match(html, /<html[^>]*lang="en"/, route);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, route);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title && title.includes("MIR ENERGY"), route);
    assert.ok(!titles.has(title), `Duplicate title: ${route}`);
    titles.add(title);
    assert.match(html, /<meta name="description" content="[^"]+"/, route);
    assert.match(html, /rel="canonical"/, route);
    assert.doesNotMatch(visibleHtml(html), /MIR [ÉE]nergie|Demander|Accueil|Confidentialité|Forage|24\/7|contact@mirenergie\.com|\+225 00/, route);
  }
});

test("old page URLs redirect permanently to their replacements", async () => {
  for (const [oldPath, newPath] of [["/services", "/solutions"], ["/a-propos", "/about"]]) {
    const response = await fetch(origin + oldPath, { redirect: "manual" });
    assert.equal(response.status, 308, oldPath);
    assert.equal(new URL(response.headers.get("location"), origin).pathname, newPath);
  }
});

test("internal links resolve and solution anchors point to distinct offers", async () => {
  for (const [route, raw] of pages) {
    const html = visibleHtml(raw);
    for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
      const href = match[1].replaceAll("&amp;", "&");
      const target = new URL(href, origin + route);
      if (target.origin !== origin) continue;
      assert.ok(pages.has(target.pathname), `Missing route ${href} on ${route}`);
      if (target.hash) assert.ok(pages.get(target.pathname).includes(`id="${target.hash.slice(1)}"`), `Missing anchor ${href}`);
    }
  }
  for (const id of ["lng-supply", "logistics", "storage-regasification", "infrastructure"]) {
    assert.ok(pages.get("/solutions").includes(`id="${id}"`));
  }
});

test("inquiry form contains qualification fields and does not offer false submission", () => {
  const html = visibleHtml(pages.get("/contact"));
  for (const name of ["name", "company", "email", "phone", "service", "location", "capacity", "timeline", "message"]) assert.ok(html.includes(`name="${name}"`), name);
  assert.match(html, /type="email"[^>]*required/);
  assert.match(html, /<button[^>]*type="submit"[^>]*disabled/);
  assert.match(html, /does not currently send inquiries/);
  assert.doesNotMatch(html, /mailto:contact@|tel:\+2250/);
});

test("every rendered image and stylesheet can be served", async () => {
  const urls = new Set();
  for (const html of pages.values()) {
    for (const match of visibleHtml(html).matchAll(/<(?:img|link)\b[^>]*(?:src|href)="([^"]+)"[^>]*>/g)) {
      const url = match[1].replaceAll("&amp;", "&");
      if (url.startsWith("/") && !routes.includes(url)) urls.add(url);
    }
  }
  for (const url of urls) {
    const response = await fetch(origin + url);
    assert.equal(response.status, 200, url);
    await response.body?.cancel();
  }
});
