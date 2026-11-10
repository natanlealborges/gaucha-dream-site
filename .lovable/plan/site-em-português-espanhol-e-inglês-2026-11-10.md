# Site em português, espanhol e inglês

## Resultado
- Preservar o conteúdo português, layout, imagens e rastreamento; não publicar.
- Traduzir as dez páginas solicitadas e todos os elementos compartilhados em `/es/...` e `/en/...`, reutilizando os componentes atuais.
- Organizar os textos em arquivos de tradução, mantendo números, políticas, nomes próprios e autoria das avaliações.
- Manter os guias somente em português, ocultando seus links nas versões ES/EN.

## Navegação
- Adicionar PT | ES | EN no Navbar desktop e no menu mobile, abrindo a mesma página no idioma escolhido.
- Manter o idioma nos links internos, sem redirecionar pelo idioma do navegador.
- Assumir que o seletor ES/EN nos guias leva à home correspondente, pois os guias não têm tradução nesta etapa.

## SEO e reservas
- Definir html lang, title/description traduzidos, canonical próprio, og:locale e hreflang pt-BR/es/en/x-default nas três versões do escopo.
- Traduzir os textos do JSON-LD e incluir inLanguage, respeitando os dados portugueses existentes.
- Acrescentar vinte URLs ao sitemap e à pré-renderização atual.
- Adaptar getWhatsAppUrl ao idioma com as mensagens fornecidas, sem mudar a atribuição de origem, os eventos ou os atributos dos links externos.

## Verificação
- Executar os testes existentes e acrescentar testes de idioma, links e mensagens WhatsApp.
- Comparar o conteúdo português antes/depois e conferir traduções, seletor e navegação no desktop e mobile.
- Conferir metadados e dados estruturados das traduções e as 37 rotas de pré-renderização.

## Detalhes técnicos
- Manter React, React Router, Helmet e a pré-renderização existentes, sem migração.
- Centralizar catálogos em src/i18n e derivar o idioma da URL em um contexto compartilhado.
- Registrar rotas prefixadas somente para o escopo e compartilhar a geração de links e metadados entre idiomas.
