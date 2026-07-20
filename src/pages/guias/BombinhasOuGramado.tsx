import GuideLayout from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";

const Page = () => (
  <GuideLayout
    guide={getGuide("bombinhas-ou-gramado-no-inverno")!}
    heroImageAlt="Composição comparando praia de Bombinhas ao amanhecer com paisagem serrana de Gramado no inverno"
    intro="A gente ouve essa dúvida toda semana no check-in. As duas cidades são ótimas — e são coisas completamente diferentes. Vale a pena responder com sinceridade em vez de vender a nossa."
    sections={[
      {
        heading: "Clima: 15°C na serra vs 22°C no litoral",
        paragraphs: ["[placeholder] Comparar temperaturas médias de julho, chance de geada em Gramado, dias de sol em Bombinhas."],
      },
      {
        heading: "Preço e distâncias",
        paragraphs: ["[placeholder] Voo, hospedagem média, custo de restaurante. De Porto Alegre é mais perto Gramado; de SP e Curitiba, Bombinhas."],
        image: { alt: "Mapa comparativo mostrando distâncias até Bombinhas e Gramado a partir das capitais do Sul e Sudeste" },
      },
      { heading: "Que tipo de viagem cada uma entrega", level: 3, paragraphs: ["[placeholder] Gramado é fondue + parque. Bombinhas é mar calmo + ritmo lento."] },
      { heading: "Vai com criança pequena?", level: 3, paragraphs: ["[placeholder]"] },
      {
        heading: "Nossa resposta honesta",
        paragraphs: ["[placeholder] Se você quer frio de verdade, Gramado. Se você quer sossego com pé na areia e mar transparente, Bombinhas — e a gente te espera aqui."],
      },
    ]}
  />
);

export default Page;
