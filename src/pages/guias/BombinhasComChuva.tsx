import GuideLayout from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";

const Page = () => (
  <GuideLayout
    guide={getGuide("o-que-fazer-em-bombinhas-com-chuva")!}
    heroImageAlt="Deck coberto da pousada em dia de chuva com vista para o mar cinza"
    intro="Chuva em Bombinhas é curta e passa — mas se pegar um dia inteiro, tem jeito. A gente já viveu isso mil vezes com hóspede e aprendeu que a chave é desacelerar de propósito."
    sections={[
      {
        heading: "Um café da manhã que vale por dois",
        paragraphs: ["[placeholder] Falar sobre o buffet da pousada, a varanda coberta e o cheiro de bolo quente saindo do forno."],
      },
      {
        heading: "Passeios cobertos que valem a pena",
        paragraphs: ["[placeholder] Museu Etnográfico Casa do Imigrante, Aquário de Porto Belo, cantinas do interior."],
        image: { alt: "Interior de cantina italiana em Bombinhas com mesas de madeira e lareira" },
      },
      { heading: "Jacuzzi com chuva batendo no vidro", level: 3, paragraphs: ["[placeholder]"] },
      { heading: "Restaurantes para se esconder", level: 3, paragraphs: ["[placeholder]"] },
      {
        heading: "E se abrir sol no meio da tarde?",
        paragraphs: ["[placeholder] Costão do Retiro dos Padres é onde a gente corre — costuma abrir primeiro."],
      },
    ]}
  />
);

export default Page;
