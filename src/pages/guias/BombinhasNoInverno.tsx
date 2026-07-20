import GuideLayout from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";

const Page = () => (
  <GuideLayout
    guide={getGuide("bombinhas-no-inverno")!}
    heroImageAlt="Praia de Bombinhas vazia em manhã de inverno com mar calmo e céu limpo"
    intro="No inverno a cidade respira. A gente serve o café num salão vazio, o mar fica cor de piscina, e o hóspede que veio pela primeira vez em julho quase sempre volta em julho de novo."
    sections={[
      {
        heading: "Como é o clima de Bombinhas no inverno",
        paragraphs: ["[placeholder] Temperatura média, sensação térmica, roupa recomendada. Contar que dá pra almoçar de bermuda em muitos dias."],
      },
      {
        heading: "O que fica aberto (e o que fecha)",
        paragraphs: ["[placeholder] Restaurantes, passeios, mergulho, trilhas. Deixar claro o que muda de horário."],
        image: { alt: "Cafeteria beira-mar em Bombinhas com poucas mesas ocupadas no inverno" },
      },
      { heading: "Vale a pena vir sem tomar sol?", level: 3, paragraphs: ["[placeholder]"] },
      { heading: "O melhor da baixa temporada", level: 3, paragraphs: ["[placeholder] Preço, silêncio, estacionamento, atendimento sem fila."] },
      {
        heading: "Roteiro de 3 dias no inverno",
        paragraphs: ["[placeholder] Dia 1: chegada + costão. Dia 2: passeio de escuna ou trilha. Dia 3: café longo + Porto Belo."],
      },
    ]}
  />
);

export default Page;
