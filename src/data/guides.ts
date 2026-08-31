// Metadata central dos 6 guias — usado em roteamento, sitemap, cross-links e menu.

export type GuideMeta = {
  slug: string;
  title: string; // <title>
  h1: string; // H1 na página
  description: string; // meta description
  shortLabel: string; // rótulo curto p/ menus e cross-links
  hook: string; // frase de abertura mostrada nos cards
  published: boolean; // guias não publicados ficam ocultos de menus, sitemap e levam noindex
};

export const publishedGuides = () => guides.filter((g) => g.published);

export const guides: GuideMeta[] = [
  {
    slug: "mergulho-em-bombinhas",
    title: "Mergulho em Bombinhas: guia de quem mora aqui",
    h1: "Mergulho em Bombinhas: a água fica mais clara no inverno",
    description:
      "Onde mergulhar em Bombinhas, quando a visibilidade abre e o que ninguém conta sobre o inverno. Dicas de quem recebe hóspedes há 26 anos.",
    shortLabel: "Mergulho em Bombinhas",
    hook: "A gente vive Bombinhas o ano inteiro — e o segredo é que a água fica mais azul de junho a agosto.",
    published: false,
  },
  {
    slug: "bombinhas-no-inverno",
    title: "Bombinhas no inverno vale a pena? Nossa resposta",
    h1: "Bombinhas no inverno vale a pena?",
    description:
      "Bombinhas no inverno: praia vazia, mar transparente e jacuzzi ligada. O que abre, o que fecha e por que a gente prefere essa época do ano.",
    shortLabel: "Bombinhas no inverno",
    hook: "No inverno a cidade respira — e a gente recebe hóspede achando que descobriu Bombinhas duas vezes.",
    published: true,
  },
  {
    slug: "o-que-fazer-em-bombinhas-com-chuva",
    title: "O que fazer em Bombinhas com chuva: nosso roteiro",
    h1: "Bombinhas com chuva: o que fazer quando o tempo fecha",
    description:
      "Dia de chuva em Bombinhas? Café demorado, jacuzzi coberta, museu, cantina e mirante entre nuvens. Um roteiro real para o dia não virar tédio.",
    shortLabel: "Bombinhas com chuva",
    hook: "Chuva em Bombinhas não é problema — é uma outra Bombinhas, mais lenta e mais bonita.",
    published: false,
  },
  {
    slug: "bombinhas-ou-gramado-no-inverno",
    title: "Bombinhas ou Gramado no inverno: qual escolher",
    h1: "Bombinhas ou Gramado no inverno?",
    description:
      "Bombinhas ou Gramado no inverno? Comparamos clima, custo, distância e tipo de viagem para você decidir sem arrependimento depois.",
    shortLabel: "Bombinhas ou Gramado",
    hook: "A gente ouve essa dúvida toda semana. Vale a pena responder com sinceridade.",
    published: false,
  },
  {
    slug: "trilhas-em-bombinhas",
    title: "Trilhas em Bombinhas: as 5 que a gente indica",
    h1: "Trilhas em Bombinhas: as que a gente indica",
    description:
      "Trilhas em Bombinhas por nível: Quatro Ilhas, Costão, Sepultura, Morro do Macaco e Lagoinha. Duração, dificuldade e o que levar na mochila.",
    shortLabel: "Trilhas em Bombinhas",
    hook: "Toda semana a gente desenha o mapa no papel do café — decidimos colocar aqui pra facilitar.",
    published: false,
  },
  {
    slug: "bombinhas-com-criancas",
    title: "Bombinhas com crianças: praias e roteiros calmos",
    h1: "Bombinhas com crianças: o guia da família",
    description:
      "Bombinhas com crianças: praias rasas, roteiros curtos e onde comer sem stress. Escrito por uma pousada que recebe famílias há 26 anos.",
    shortLabel: "Bombinhas com crianças",
    hook: "A gente recebe família há 26 anos — e aprendeu que criança feliz é praia rasa e almoço perto.",
    published: false,
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);

export const getRelatedGuides = (slug: string, count = 3): GuideMeta[] => {
  return guides.filter((g) => g.slug !== slug).slice(0, count);
};
