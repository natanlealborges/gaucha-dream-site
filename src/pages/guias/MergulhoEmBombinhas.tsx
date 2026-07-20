import GuideLayout from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";

const Page = () => (
  <GuideLayout
    guide={getGuide("mergulho-em-bombinhas")!}
    heroImageAlt="Mergulhador submerso na Reserva Biológica do Arvoredo em Bombinhas, com peixes e água transparente ao fundo"
    intro="A gente costuma dizer que existem duas Bombinhas debaixo d'água: a do verão, mais quente e mais movimentada, e a do inverno, que quase ninguém conhece — a água fica tão clara que a gente enxerga o próprio pé no fundo do costão."
    sections={[
      {
        heading: "Por que a visibilidade abre no inverno",
        paragraphs: [
          "[placeholder] Explicar em 2–3 parágrafos por que a estabilidade das correntes de junho a agosto deixa a água mais limpa em Bombinhas, com o Arvoredo como referência.",
        ],
      },
      {
        heading: "Os melhores pontos de mergulho perto da pousada",
        paragraphs: [
          "[placeholder] Listar Ilha do Arvoredo, Ilha do Deserto, costão da Sepultura e do Retiro dos Padres — o que cada um tem de melhor e o nível de dificuldade.",
        ],
        image: { alt: "Vista aérea da Ilha do Arvoredo com águas verde-azuladas" },
      },
      { heading: "Batismo, credenciado ou snorkel: qual escolher", level: 3, paragraphs: ["[placeholder]"] },
      { heading: "Operadoras que a gente costuma indicar", level: 3, paragraphs: ["[placeholder]"] },
      {
        heading: "O que levar (e o que a pousada empresta)",
        paragraphs: ["[placeholder] Toalha, protetor solar reef-safe, muda seca — a gente tem chuveiro quente esperando na volta."],
      },
    ]}
  />
);

export default Page;
