// Pré-renderização estática das rotas públicas.
// Roda depois do `vite build`: gera um bundle SSR temporário, renderiza cada rota
// para HTML e injeta o resultado (markup + head do Helmet) no index.html do dist.
// A arquitetura do app (Vite + React + react-router-dom) permanece inalterada.

import { build } from "vite";
import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const SSR_OUT = path.join(ROOT, ".prerender");

const ROUTES = [
  "/",
  "/guias",
  "/guias/mergulho-em-bombinhas",
  "/guias/bombinhas-no-inverno",
  "/guias/o-que-fazer-em-bombinhas-com-chuva",
  "/guias/bombinhas-ou-gramado-no-inverno",
  "/guias/trilhas-em-bombinhas",
  "/guias/bombinhas-com-criancas",
];

// Tags do index.html que o Helmet pode substituir por rota (evita duplicidade).
// Cada entrada só é removida do template quando a rota realmente emite a tag.
const REPLACEABLE = [
  { emits: /<title[^>]*>[^<]+<\/title>/i, strip: /\n?\s*<title>[\s\S]*?<\/title>/i },
  { emits: /name="description"/i, strip: /\n?\s*<meta\s+name="description"[^>]*>/i },
  { emits: /rel="canonical"/i, strip: /\n?\s*<link\s+rel="canonical"[^>]*>/i },
  { emits: /property="og:type"/i, strip: /\n?\s*<meta\s+property="og:type"[^>]*>/i },
  { emits: /property="og:title"/i, strip: /\n?\s*<meta\s+property="og:title"[^>]*>/i },
  { emits: /property="og:description"/i, strip: /\n?\s*<meta\s+property="og:description"[^>]*>/i },
  { emits: /property="og:url"/i, strip: /\n?\s*<meta\s+property="og:url"[^>]*>/i },
  { emits: /name="twitter:card"/i, strip: /\n?\s*<meta\s+name="twitter:card"[^>]*>/i },
  { emits: /name="twitter:title"/i, strip: /\n?\s*<meta\s+name="twitter:title"[^>]*>/i },
  { emits: /name="twitter:description"/i, strip: /\n?\s*<meta\s+name="twitter:description"[^>]*>/i },
];

async function main() {
  await build({
    logLevel: "warn",
    build: {
      ssr: path.join(ROOT, "src/entry-prerender.tsx"),
      outDir: SSR_OUT,
      emptyOutDir: true,
      ssrEmitAssets: false,
    },
  });

  const mod = await import(pathToFileURL(path.join(SSR_OUT, "entry-prerender.js")).href);
  const template = await readFile(path.join(DIST, "index.html"), "utf8");

  for (const route of ROUTES) {
    const { html, head } = mod.render(route);

    let page = template;
    if (head.trim()) {
      for (const { emits, strip } of REPLACEABLE) {
        if (emits.test(head)) page = page.replace(strip, "");
      }
      page = page.replace("</head>", `  ${head}\n  </head>`);
    }
    page = page.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const outFile =
      route === "/"
        ? path.join(DIST, "index.html")
        : path.join(DIST, route.replace(/^\//, ""), "index.html");
    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, page, "utf8");
    console.log(`prerendered ${route} -> ${path.relative(ROOT, outFile)}`);
  }

  await rm(SSR_OUT, { recursive: true, force: true });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
