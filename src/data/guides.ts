// Metadata central dos 6 guias — usado em roteamento, sitemap, cross-links e menu.

export type GuideMeta = {
  slug: string;
  title: string; // <title>
  h1: string; // H1 na página
  description: string; // meta description
  shortLabel: string; // rótulo curto p/ menus e cross-links
  hook: string; // frase de abertura mostrada nos cards
};

export const guides: GuideMeta[] = [
  {
    slug: "mergulho-em-bombinhas",
    title: "Mergulho em Bombinhas: por que a água fica melhor no inverno",
    h1: "Mergulho em Bombinhas: a água fica mais clara no inverno",
    description:
      "Guia honesto de mergulho em Bombinhas escrito por quem mora aqui: os melhores pontos, quando a visibilidade abre e o que ninguém te conta sobre o inverno.",
    shortLabel: "Mergulho em Bombinhas",
    hook: "A gente vive Bombinhas o ano inteiro — e o segredo é que a água fica mais azul de junho a agosto.",
  },
  {
    slug: "bombinhas-no-inverno",
    title: "Bombinhas no inverno vale a pena? O que a gente vê daqui",
    h1: "Bombinhas no inverno vale a pena?",
    description:
      "Bombinhas no inverno: praia vazia, mar transparente, restaurante aberto, jacuzzi ligada. O que muda, o que fecha e por que a gente prefere essa época.",
    shortLabel: "Bombinhas no inverno",
    hook: "No inverno a cidade respira — e a gente recebe hóspede achando que descobriu Bombinhas duas vezes.",
  },
  {
    slug: "o-que-fazer-em-bombinhas-com-chuva",
    title: "Bombinhas com chuva: o que fazer sem estragar a viagem",
    h1: "Bombinhas com chuva: o que fazer quando o tempo fecha",
    description:
      "Dia de chuva em Bombinhas: café demorado, jacuzzi coberta, museu, cantina, mirante entre nuvens. Um roteiro real para o dia não virar tédio.",
    shortLabel: "Bombinhas com chuva",
    hook: "Chuva em Bombinhas não é problema — é uma outra Bombinhas, mais lenta e mais bonita.",
  },
  {
    slug: "bombinhas-ou-gramado-no-inverno",
    title: "Bombinhas ou Gramado no inverno: qual escolher (comparação honesta)",
    h1: "Bombinhas ou Gramado no inverno?",
    description:
      "Bombinhas ou Gramado no inverno? Comparamos clima, custo, distâncias e tipo de viagem. Um recebe você de casaco na montanha; o outro, de manhã com mar aberto.",
    shortLabel: "Bombinhas ou Gramado",
    hook: "A gente ouve essa dúvida toda semana. Vale a pena responder com sinceridade.",
  },
  {
    slug: "trilhas-em-bombinhas",
    title: "Trilhas em Bombinhas: as 5 que a gente indica pros hóspedes",
    h1: "Trilhas em Bombinhas: as que a gente indica",
    description:
      "Guia de trilhas em Bombinhas por nível: Praia de Quatro Ilhas, Costão, Sepultura, Morro do Macaco e Praia Lagoinha. Duração, dificuldade e o que levar.",
    shortLabel: "Trilhas em Bombinhas",
    hook: "Toda semana a gente desenha o mapa no papel do café — decidimos colocar aqui pra facilitar.",
  },
  {
    slug: "bombinhas-com-criancas",
    title: "Bombinhas com crianças: praias, roteiros e o que a gente aprendeu",
    h1: "Bombinhas com crianças: o guia da família",
    description:
      "Bombinhas com crianças: praias calmas, roteiros curtos, onde comer sem stress e o que preparar. Escrito por uma pousada que recebe família há 26 anos.",
    shortLabel: "Bombinhas com crianças",
    hook: "A gente recebe família há 26 anos — e aprendeu que criança feliz é praia rasa e almoço perto.",
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);

export const getRelatedGuides = (slug: string, count = 3): GuideMeta[] => {
  return guides.filter((g) => g.slug !== slug).slice(0, count);
};
