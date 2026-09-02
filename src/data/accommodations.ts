// Metadata dos blocos de acomodação — controla listagem e publicação por bloco.

export type AccommodationBlock = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  href: string;
  published: boolean;
  /** true quando a página de detalhe da rota já existe */
  hasDetailPage: boolean;
};

export const ACCOMMODATIONS_PUBLISHED = true;

export const accommodations: AccommodationBlock[] = [
  {
    id: "garden",
    name: "Bloco Garden",
    subtitle: "Os únicos quartos frente ao mar do centro de Bombinhas",
    description:
      "8 apartamentos de 40 a 45m² com vista para a Praia de Bombinhas. Três categorias: deck privativo no nível do jardim, sacada no andar superior e studio com vista lateral. TV com Netflix, cozinha equipada e sofá-cama.",
    href: "/acomodacoes/garden",
    published: true,
    hasDetailPage: true,
  },
  {
    id: "bloco-gaucha",
    name: "Bloco Gaúcha",
    subtitle: "Os maiores apartamentos, ideais para família",
    description:
      "Sacada com churrasqueira privativa, cozinha mais completa e mais espaço interno. A escolha de quem vem por uma semana ou mais com crianças.",
    href: "/acomodacoes/bloco-gaucha",
    published: true,
    hasDetailPage: true,
  },
  {
    id: "bloco-praia",
    name: "Bloco Praia",
    subtitle: "Mais próximos do café da manhã",
    description:
      "Suítes e apartamentos de 1 e 2 dormitórios, com opções frente mar e laterais, a poucos passos do deck onde o café da manhã é servido à beira-mar.",
    href: "/acomodacoes/bloco-praia",
    published: true,
    hasDetailPage: true,
  },
];

export const publishedAccommodations = () => accommodations.filter((a) => a.published);
