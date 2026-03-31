import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const ssrDir = path.join(rootDir, "dist-ssr");
const templatePath = path.join(distDir, "index.html");

const routeMeta = {
  "/": {
    title: "Reana | AI-Native Real Estate Analysis for Investors and Agents",
    description:
      "Reana helps investors and agents evaluate properties faster, compare opportunities more efficiently, and check each deal against the investor’s strategy. Join the interest list.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Reana",
    description: "Review the Reana privacy policy.",
  },
  "/terms-of-service": {
    title: "Terms of Service | Reana",
    description: "Review the Reana terms of service.",
  },
  "/thanks": {
    title: "Thanks | Reana",
    description: "Thanks for joining the Reana interest list.",
  },
};

const routes = Object.keys(routeMeta);

const [{ render }, template] = await Promise.all([
  import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href),
  readFile(templatePath, "utf8"),
]);

for (const route of routes) {
  const meta = routeMeta[route];
  const routeUrl = route === "/" ? "https://reana.pro/" : `https://reana.pro${route}`;
  const appHtml = render(route);
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${meta.description}" />`
    )
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${routeUrl}" />`)
    .replace(
      /<meta property="og:title" content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${meta.title}" />`
    )
    .replace(
      /<meta\s+property="og:description"[\s\S]*?\/>/,
      `<meta property="og:description" content="${meta.description}" />`
    )
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${routeUrl}" />`)
    .replace(
      /<meta name="twitter:title" content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${meta.title}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"[\s\S]*?\/>/,
      `<meta name="twitter:description" content="${meta.description}" />`
    )
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  const outputPath =
    route === "/"
      ? templatePath
      : path.join(distDir, route.replace(/^\//, ""), "index.html");

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html, "utf8");
}

await rm(ssrDir, { recursive: true, force: true });
