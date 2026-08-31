# Avaliação: migração para TanStack Start (SSR)

Avaliação sem execução. Nenhum arquivo foi alterado. Ao final há o plano de execução caso decida seguir em frente.

## 1. Escopo real

**Criados (~20 arquivos):**
- `src/routes/__root.tsx` (layout raiz com head() no servidor)
- `src/routes/index.tsx`, `src/routes/guias.tsx`, 6 rotas de guias, `src/routes/$.tsx` (404) — 9 rotas
- `src/router.tsx`, `src/server.ts`, `src/start.ts`
- `src/lib/error-page.ts`, `error-capture.ts`, `lovable-error-reporting.ts`
- `src/styles.css` (Tailwind v4), `bunfig.toml`, `eslint.config.js`

**Alterados (~10 arquivos):**
- `package.json` (merge: sai react-router-dom/Vite puro, entra @tanstack/react-start, nitro; React 18→19, Tailwind 3→4)
- `vite.config.ts` (vira wrapper `@lovable.dev/vite-tanstack-config`)
- `tsconfig.json` (strict mode ligado)
- `Navbar.tsx`, `NavLink.tsx`, `Footer.tsx`, `GuideLayout.tsx` e CTAs: trocar `Link`/`useNavigate` do react-router-dom pelos do TanStack Router

**Removidos (~10 arquivos):**
- `index.html`, `src/main.tsx`, `src/App.tsx`, `src/App.css`, `src/index.css`, `src/vite-env.d.ts`, `tailwind.config.ts`, `postcss.config.js`, `tsconfig.app.json`, `tsconfig.node.json`, `vitest.config.ts`, pasta `src/test/`

**Intocados:** `src/components/ui/*` (shadcn funciona sem mudança), `src/data/guides.ts`, `src/lib/pixel.ts`, imagens em `src/assets` e `public/lovable-uploads`, `public/robots.txt`, `sitemap.xml`, `llms.txt`.

**Total: ~40 arquivos afetados** (20 criados, 10 alterados, 10 removidos).

## 2. Riscos concretos deste projeto

| Item | Risco | Mitigação |
|---|---|---|
| Meta Pixel | O código base sai do `index.html` e precisa ir para o `head()` do `__root.tsx`; os eventos em `src/lib/pixel.ts` dependem de `window.fbq` — precisam de guarda SSR | Portar verbatim; adicionar `typeof window !== "undefined"` |
| Script Asksuite | Hoje está com `defer` no fim do body (já causou erro de `removeChild` antes). No TanStack vai para `scripts` do `head()` com defer — risco de regressão do mesmo erro | Manter defer + carregamento tardio; testar navegação entre rotas |
| Metricool | Mesmo caso do Pixel: script inline precisa ser portado para o `head()` do root | Portar verbatim |
| react-query | `new QueryClient()` sem options — migração preserva defaults; baixo risco | Automático |
| shadcn/ui | Funciona como está; `sonner` usa `next-themes` (compatível) | Nenhuma ação |
| Tailwind 3 → 4 | Mudanças de sintaxe: `shadow-sm`, `ring`, `outline-none`, valores arbitrários com variáveis (`bg-[--x]`) quebram silenciosamente o visual | Sweep de padrões v3→v4 em todos os componentes |
| window/document | Scan atual: nenhum uso em module-scope fora de hooks detectado; o risco real é `pixel.ts` (chamado em eventos onClick — seguro) | Guardas onde necessário |
| Imagens lovable-uploads | URLs em `/lovable-uploads/...` continuam válidas (public/) | Nenhuma ação |
| Rotas | 8 rotas flat, sem rotas aninhadas nem guards de auth — caso simples | Tradução direta 1:1 |
| Strict mode TS | `tsconfig` fica strict; pode surgir uma onda de erros de tipagem no primeiro build | Correção iterativa até build verde |

## 3. Meta tags por rota após a migração

Hoje: tags fixas no `index.html`, idênticas nas 8 rotas; `react-helmet-async` atualiza só no cliente (invisível para crawlers).

Depois: cada arquivo de rota exporta `head()` com `meta`, `links` e `title` próprios, **renderizados no servidor**:

```text
src/routes/index.tsx                        → title "Pousada pé na areia em Bombinhas/SC…", canonical /
src/routes/guias.mergulho-em-bombinhas.tsx  → title/description/JSON-LD Article próprios, canonical /guias/mergulho-em-bombinhas
```

Resultado: o HTML que o Google e os bots de IA recebem já chega com title, description, canonical, OG e JSON-LD corretos por página — hoje isso não existe para nenhum crawler.

## 4. Estimativa

Para um projeto deste tamanho (8 rotas, sem auth, sem backend): **~1 a 2 horas de trabalho** e na faixa de **alguns créditos** (ordem de grandeza de 5–15 créditos, dependendo do volume de correções de tipagem no strict mode). O processo é majoritariamente mecânico; o tempo variável está na onda de erros TS do primeiro build.

## 5. Alternativa mais barata: pré-renderização estática

Sim — existem plugins de prerender (ex.: `vite-plugin-prerender` / react-snap) que geram HTML estático das 8 rotas no build, sem mudar a arquitetura.

| | Pré-render estático | TanStack Start (SSR) |
|---|---|---|
| Resolve indexação dos guias | Sim (~90% do problema) | Sim (100%) |
| Custo/tempo | Baixo — 1 config de build | Médio — reescrita de rotas/entry |
| Risco de quebra visual | Quase zero | Médio (Tailwind v4, strict) |
| Manutenção futura | Gambiarra sobre CSR; não é caminho suportado pela plataforma a longo prazo | Stack oficial nova do Lovable; melhorias futuras chegam nela |
| Meta tags por rota no HTML | Sim (cada rota gera seu HTML) | Sim, nativo |
| Reversibilidade | Trivial (remover plugin) | Revert via histórico do chat |

Recomendação honesta: para 8 rotas de conteúdo estático, o pré-render resolve quase tudo com uma fração do custo. O SSR vale mais se o site for crescer (blog ativo, páginas dinâmicas, área de hóspede). 

## 6. Reversibilidade

Sim, coberta pelo histórico de versões do chat: toda a migração acontece num único turno/commit, incluindo a alteração de metadados que liga o pipeline TanStack. O botão de **reverter** do chat restaura o código e o estado anterior automaticamente, inclusive para o site publicado. Nada é feito fora do turno (sem deploys externos, sem mudanças irreversíveis).

## Plano de execução (se aprovado)

1. Preflight: build de baseline (`bun run build`) — se não estiver verde, paro antes de tocar em nada.
2. Scan e resumo do projeto (rotas, providers, scripts, pixel).
3. Swap de scaffolding: templates TanStack (router, server, start, tratamento de erro SSR).
4. Port do tema: migrar tokens do `index.css` para Tailwind v4 + sweep de classes v3→v4.
5. Merge do `package.json` preservando scripts e deps do projeto.
6. Remoção dos entry points SPA (`index.html`, `main.tsx`, `App.tsx`…) com backup.
7. Geração das 9 rotas em `src/routes/` com `head()` por rota: Meta Pixel, Metricool, Asksuite, JSON-LD LodgingBusiness/Article, canonical e OG portados.
8. Guardas SSR no `pixel.ts` e em qualquer acesso a window/document.
9. Gates finais: `bun run build` verde + `tsc --noEmit` limpo + verificação das 8 rotas servindo HTML completo.
10. Relatório final: o que migrou, o que ficou igual, follow-ups sugeridos.

Alternativa: se preferir, posso executar apenas a **opção pré-render** (item 5) — bem mais barata e reversível. Me diga qual caminho.
