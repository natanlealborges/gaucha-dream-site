import GuideLayout from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";

const Page = () => (
  <GuideLayout
    guide={getGuide("bombinhas-com-criancas")!}
    heroImageAlt="Crianças brincando na areia com baldinhos em praia calma de Bombinhas"
    intro="A gente recebe família há 26 anos. Aprendeu que criança feliz é praia rasa, almoço perto e um lugar seguro pra correr descalço quando cansar do sol."
    sections={[
      {
        heading: "Praias mais tranquilas para crianças",
        paragraphs: ["[placeholder] Sepultura, Bombas, Zimbros — mar sem onda, areia branca."],
      },
      {
        heading: "Roteiros curtos que funcionam",
        paragraphs: ["[placeholder] Aquário de Porto Belo, passeio de escuna curto, mirante do Encanto."],
        image: { alt: "Família observando peixes coloridos no Aquário de Porto Belo" },
      },
      { heading: "Onde comer sem stress", level: 3, paragraphs: ["[placeholder]"] },
      { heading: "O que preparar antes de vir", level: 3, paragraphs: ["[placeholder] Bóia, protetor infantil, camiseta UV, sombra portátil."] },
      {
        heading: "Nossa pousada e família",
        paragraphs: ["[placeholder] Falar da estrutura: acesso direto à praia, café que abre cedo, quartos que comportam berço."],
      },
    ]}
  />
);

export default Page;
