import GuideLayout from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";

const Page = () => (
  <GuideLayout
    guide={getGuide("trilhas-em-bombinhas")!}
    heroImageAlt="Vista do alto do Morro do Macaco em Bombinhas com a península e o mar ao fundo"
    intro="Toda semana a gente desenha o mesmo mapa no papel do café — as trilhas por ordem de dificuldade, o que levar, o que evitar no verão. Decidimos colocar aqui pra facilitar."
    sections={[
      {
        heading: "Praia de Quatro Ilhas → fácil",
        paragraphs: ["[placeholder] Duração, nível, o que ver."],
      },
      {
        heading: "Costão da Sepultura → fácil/médio",
        paragraphs: ["[placeholder] Ponto de mergulho no meio do caminho."],
        image: { alt: "Costão da Sepultura em Bombinhas com águas cristalinas" },
      },
      { heading: "Praia da Lagoinha → médio", level: 3, paragraphs: ["[placeholder] Trilha do amor, 20 minutos, banho ao chegar."] },
      { heading: "Retiro dos Padres → médio", level: 3, paragraphs: ["[placeholder]"] },
      { heading: "Morro do Macaco → puxada", level: 3, paragraphs: ["[placeholder] Recompensa: a melhor vista da península."] },
      {
        heading: "O que levar e horários a evitar",
        paragraphs: ["[placeholder] Água, tênis fechado, protetor solar. No verão a gente indica sair antes das 9h."],
      },
    ]}
  />
);

export default Page;
