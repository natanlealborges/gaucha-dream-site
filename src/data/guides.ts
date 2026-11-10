// Metadata central dos guias — usado em roteamento, sitemap, cross-links, menu e seletor de idioma.

export type GuideLocale = "pt" | "es";

export type GuideText = {
  title: string; // <title> (até 60 caracteres)
  h1: string; // H1 na página
  description: string; // meta description (até 155 caracteres)
  shortLabel: string; // rótulo curto p/ menus e cross-links
  hook: string; // frase mostrada nos cards
};

export type GuideMeta = GuideText & {
  slug: string;
  published: boolean; // guias não publicados ficam ocultos de menus, sitemap e levam noindex
  datePublished: string;
  /** Idiomas em que o guia existe. Ausente = só português. */
  locales?: GuideLocale[];
  /** Textos em espanhol (obrigatório quando locales inclui "es"). */
  es?: GuideText;
  /** Guia exibido em destaque no índice do idioma. */
  featured?: boolean;
};

export const GUIDES_MODIFIED = "2026-11-10";

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
    datePublished: "2026-08-01",
  },
  {
    slug: "praias-de-bombinhas",
    title: "Praias de Bombinhas: qual escolher",
    h1: "Praias de Bombinhas: qual escolher",
    description:
      "Praias de Bombinhas por perfil: mar calmo para crianças, ondas e movimento ou sossego. Guia da Pousada Gaúcha, de frente para a Praia de Bombinhas.",
    shortLabel: "Praias de Bombinhas",
    hook: "Praias de perfis bem diferentes a poucos minutos umas das outras — e qual escolher para cada dia.",
    published: true,
    datePublished: "2026-11-10",
    locales: ["pt", "es"],
    es: {
      title: "Playas de Bombinhas: cuál elegir",
      h1: "Playas de Bombinhas: cuál elegir",
      description:
        "Playas de Bombinhas por perfil: mar calmo para niños, olas y movimiento o tranquilidad. Guía de la Pousada Gaúcha, frente a la Praia de Bombinhas.",
      shortLabel: "Playas de Bombinhas",
      hook: "Playas de perfiles muy distintos a pocos minutos unas de otras, y cuál elegir para cada día.",
    },
  },
  {
    slug: "como-chegar-a-bombinhas",
    title: "Como chegar a Bombinhas: avião, carro e ônibus",
    h1: "Como chegar a Bombinhas",
    description:
      "Como chegar a Bombinhas pela BR-101, saída em Porto Belo. Aeroportos de Navegantes e Florianópolis, acessos da cidade, TPA e ônibus.",
    shortLabel: "Como chegar a Bombinhas",
    hook: "BR-101, saída em Porto Belo. Aeroportos, acessos da cidade e a taxa ambiental, explicados.",
    published: true,
    datePublished: "2026-11-10",
    locales: ["pt", "es"],
    es: {
      title: "Cómo llegar a Bombinhas: avión, auto y ómnibus",
      h1: "Cómo llegar a Bombinhas",
      description:
        "Cómo llegar a Bombinhas por la BR-101, salida en Porto Belo. Aeropuertos de Navegantes y Florianópolis, accesos a la ciudad, TPA y ómnibus.",
      shortLabel: "Cómo llegar a Bombinhas",
      hook: "BR-101, salida en Porto Belo. Aeropuertos, accesos a la ciudad y la tasa ambiental, explicados.",
    },
  },
  {
    slug: "quando-ir-a-bombinhas",
    title: "Quando ir a Bombinhas: melhor época",
    h1: "Quando ir a Bombinhas: melhor época",
    description:
      "Quando ir a Bombinhas: alta temporada de dezembro ao Carnaval, praia mais vazia até abril e, de maio a outubro, calma, praias vazias e diárias menores.",
    shortLabel: "Quando ir a Bombinhas",
    hook: "Praia com tudo aberto, praia com menos movimento ou descanso de verdade: cada época tem a sua.",
    published: true,
    datePublished: "2026-11-10",
    locales: ["pt", "es"],
    es: {
      title: "Cuándo ir a Bombinhas: la mejor época",
      h1: "Cuándo ir a Bombinhas: la mejor época",
      description:
        "Cuándo ir a Bombinhas: temporada alta de diciembre a Carnaval, playa más vacía hasta abril y, de mayo a octubre, calma, playas vacías y tarifas menores.",
      shortLabel: "Cuándo ir a Bombinhas",
      hook: "Playa con todo abierto, playa con menos movimiento o descanso de verdad: cada época tiene lo suyo.",
    },
  },
  {
    slug: "o-que-fazer-em-bombinhas",
    title: "O que fazer em Bombinhas: trilhas, mar e passeios",
    h1: "O que fazer em Bombinhas",
    description:
      "O que fazer em Bombinhas além da praia: trilhas curtas com mirantes, mergulho e snorkel em águas claras, passeios de barco e surf.",
    shortLabel: "O que fazer em Bombinhas",
    hook: "Em dois ou três dias dá para combinar praia, uma trilha e um passeio.",
    published: true,
    datePublished: "2026-11-10",
    locales: ["pt", "es"],
    es: {
      title: "Qué hacer en Bombinhas: senderos, mar y paseos",
      h1: "Qué hacer en Bombinhas",
      description:
        "Qué hacer en Bombinhas además de la playa: senderos cortos con miradores, buceo y snorkel en aguas claras, paseos en barco y surf.",
      shortLabel: "Qué hacer en Bombinhas",
      hook: "En dos o tres días se puede combinar playa, un sendero y un paseo.",
    },
  },
  {
    slug: "onde-comer-em-bombinhas",
    title: "Onde comer em Bombinhas: indicações da pousada",
    h1: "Onde comer em Bombinhas: indicações da pousada",
    description:
      "Onde comer em Bombinhas: peixe, camarão e ostra. As indicações de restaurantes da equipe da Pousada Gaúcha, quase todos perto da pousada.",
    shortLabel: "Onde comer em Bombinhas",
    hook: "Peixe, camarão e ostra: as indicações da nossa equipe, quase todas perto da pousada.",
    published: true,
    datePublished: "2026-11-10",
    locales: ["pt", "es"],
    es: {
      title: "Dónde comer en Bombinhas: recomendaciones",
      h1: "Dónde comer en Bombinhas: recomendaciones de la posada",
      description:
        "Dónde comer en Bombinhas: pescado, camarón y ostras. Las recomendaciones del equipo de la Pousada Gaúcha, casi todas cerca de la posada.",
      shortLabel: "Dónde comer en Bombinhas",
      hook: "Pescado, camarón y ostras: las recomendaciones de nuestro equipo, casi todas cerca de la posada.",
    },
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
    datePublished: "2026-08-01",
    locales: ["pt", "es"],
    es: {
      title: "¿Vale la pena Bombinhas en invierno? Nuestra respuesta",
      h1: "¿Vale la pena Bombinhas en invierno?",
      description:
        "Bombinhas en invierno: playas vacías, mar transparente y jacuzzi encendido. Qué abre, qué cierra y por qué preferimos esta época del año.",
      shortLabel: "Bombinhas en invierno",
      hook: "En invierno la ciudad respira, y recibimos huéspedes que sienten que descubrieron Bombinhas dos veces.",
    },
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
    datePublished: "2026-08-01",
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
    datePublished: "2026-08-01",
  },
  {
    slug: "trilhas-em-bombinhas",
    title: "Trilhas em Bombinhas: as 5 que a gente indica",
    h1: "Trilhas em Bombinhas: as que a gente indica",
    description:
      "Trilhas em Bombinhas por nível: Quatro Ilhas, Costão, Sepultura, Morro do Macaco e Lagoinha. Duração, dificuldade e o que levar na mochila.",
    shortLabel: "Trilhas em Bombinhas",
    hook: "Toda semana a gente desenha o mapa no papel do café — decidimos colocar aqui pra facilitar.",
    published: true,
    datePublished: "2026-08-01",
    locales: ["pt", "es"],
    es: {
      title: "Senderos en Bombinhas: los 5 que recomendamos",
      h1: "Senderos en Bombinhas: los que recomendamos",
      description:
        "Senderos en Bombinhas por nivel: Sepultura, Retiro dos Padres, Quatro Ilhas, Lagoinha y Morro do Macaco. Duración, dificultad y qué llevar.",
      shortLabel: "Senderos en Bombinhas",
      hook: "Todas las semanas dibujamos el mapa en el papel del desayuno; decidimos ponerlo acá para facilitar.",
    },
  },
  {
    slug: "bombinhas-com-criancas",
    title: "Bombinhas com crianças: praias e roteiros calmos",
    h1: "Bombinhas com crianças: o guia da família",
    description:
      "Bombinhas com crianças: praias rasas, roteiros curtos e onde comer sem stress. Escrito por uma pousada que recebe famílias há 26 anos.",
    shortLabel: "Bombinhas com crianças",
    hook: "A gente recebe família há 26 anos — e aprendeu que criança feliz é praia rasa e almoço perto.",
    published: true,
    datePublished: "2026-08-01",
    locales: ["pt", "es"],
    es: {
      title: "Bombinhas con niños: playas y paseos tranquilos",
      h1: "Bombinhas con niños: la guía para la familia",
      description:
        "Bombinhas con niños: playas tranquilas, paseos cortos y la logística que hace la diferencia. Escrito por una posada que recibe familias hace 26 años.",
      shortLabel: "Bombinhas con niños",
      hook: "Recibimos familias hace 26 años y aprendimos que un niño feliz es playa tranquila y almuerzo cerca.",
    },
  },
  {
    slug: "como-llegar-desde-argentina-paraguay-uruguay",
    title: "Cómo llegar a Bombinhas desde Argentina, Paraguay y Uruguay",
    h1: "Cómo llegar a Bombinhas desde Argentina, Paraguay y Uruguay",
    description:
      "En auto desde Buenos Aires, Asunción y Santa Rita, o en avión a Florianópolis o Navegantes: distancias, tiempos, TPA y estacionamiento en Bombinhas.",
    shortLabel: "Cómo llegar desde Argentina, Paraguay y Uruguay",
    hook: "En auto por la BR-101 hasta Porto Belo, o en avión a Florianópolis o Navegantes.",
    published: true,
    datePublished: "2026-11-10",
    locales: ["es"],
    featured: true,
  },
];

export const guideLocales = (g: GuideMeta): GuideLocale[] => g.locales ?? ["pt"];

/** Guias publicados que existem no idioma pedido. */
export const guidesFor = (locale: GuideLocale) =>
  guides.filter((g) => g.published && guideLocales(g).includes(locale));

export const publishedGuides = () => guidesFor("pt");

/** Textos do guia no idioma (guias só em espanhol guardam os textos no nível principal). */
export const guideText = (g: GuideMeta, locale: GuideLocale): GuideText =>
  locale === "es" && g.es ? g.es : g;

export const guidePath = (slug: string, locale: GuideLocale) =>
  `${locale === "es" ? "/es" : ""}/guias/${slug}`;

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);

export const getRelatedGuides = (slug: string, locale: GuideLocale = "pt"): GuideMeta[] =>
  guidesFor(locale).filter((g) => g.slug !== slug);
