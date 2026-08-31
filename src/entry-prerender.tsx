// Entry usado APENAS no build de pré-renderização estática (SSR one-shot).
// Não é carregado pelo navegador — o cliente continua entrando por src/main.tsx.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "./AppRoutes.tsx";

export type PrerenderResult = {
  html: string;
  head: string;
};

export function render(url: string): PrerenderResult {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const queryClient = new QueryClient();

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>,
  );

  const helmet = helmetContext.helmet;
  const title = helmet?.title.toString() ?? "";
  // Rotas sem <Helmet><title> emitem um título vazio — nesse caso mantemos o do index.html.
  const hasTitle = /<title[^>]*>[^<]+<\/title>/i.test(title);
  const head = helmet
    ? [
        hasTitle ? title : "",
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter((part) => part.trim().length > 0)
        .join("\n    ")
    : "";

  return { html, head };
}
