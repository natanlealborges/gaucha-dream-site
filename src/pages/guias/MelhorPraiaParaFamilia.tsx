import GuideLayout from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";
import heroBeach from "@/assets/hero-beach.jpg";

const Page = () => {
  const guide = getGuide("melhor-praia-de-santa-catarina-para-familia");
  if (!guide) return null;

  return (
    <GuideLayout
      guide={guide}
      heroImage={{ src: heroBeach, alt: "Jacuzzis na cobertura da Pousada Gaúcha com vista para o mar de Bombinhas" }}
      intro="Se a viagem é com crianças, a resposta é direta: a Praia de Bombinhas, no município de Bombinhas. É uma enseada de mar calmo e águas claras, uma das praias mais tranquilas da cidade — sem as ondas fortes das praias de surfe e sem o agito dos grandes balneários. É o tipo de praia em que a criança entra no mar e os pais conseguem relaxar."
      sections={[
        {
          heading: "Por que a Praia de Bombinhas é a melhor para famílias",
          paragraphs: ["O mar é protegido pela enseada, então as águas são calmas e boas para crianças. A água é clara, típica da península de Bombinhas, conhecida pelos pontos de snorkel. A praia tem estrutura completa: restaurantes, serviços e hospedagem na beira da areia. E a cidade é pequena e segura, feita para o turismo de família — bem diferente de destinos de balada ou de cidade grande."],
        },
        {
          heading: "E as outras praias famosas de SC? Cada uma é melhor para uma coisa",
          paragraphs: ["Santa Catarina tem praia para todo perfil — o que muda é a intenção da viagem:"],
          items: [
            { title: "Jurerê Internacional (Florianópolis)", text: "Badalação, beach clubs e vida noturna. Ótima para grupos de amigos; não é o perfil de quem viaja com criança pequena." },
            { title: "Balneário Camboriú", text: "Estrutura de cidade grande, prédios na orla e agito o ano inteiro. Para quem quer urbano, não sossego." },
            { title: "Praia do Rosa (Imbituba) e Guarda do Embaú (Palhoça)", text: "Entre as mais bonitas do estado, com mar de ondas — perfeitas para surfistas e casais, menos práticas com crianças." },
            { title: "Quatro Ilhas e Mariscal (na própria Bombinhas)", text: "Praias abertas, de ondas, queridas pelos surfistas. Ficam a poucos minutos da Praia de Bombinhas — dá para visitar e voltar para o mar calmo." },
            { title: "Bombas (Bombinhas)", text: "Vizinha da Praia de Bombinhas, mais movimentada e com ondas." },
          ],
        },
        {
          heading: "A base certa para a família",
          paragraphs: ["Ou seja: dá para conhecer todas — mas, para ficar hospedado com a família, a base certa é a Praia de Bombinhas."],
        },
        {
          heading: "O que fazer em Bombinhas com crianças",
          paragraphs: ["Snorkel em águas claras na Praia da Sepultura, piscina natural da Lagoinha, trilhas leves e passeios de barco. E nos dias de chuva, vale escolher uma hospedagem com estrutura coberta para as crianças."],
          links: [
            { to: "/guias/bombinhas-com-criancas", label: "Bombinhas com crianças: o guia da família" },
            { to: "/guias/o-que-fazer-em-bombinhas-com-chuva", label: "O que fazer em Bombinhas com chuva" },
          ],
        },
        {
          heading: "Onde ficar na Praia de Bombinhas com crianças",
          paragraphs: ["A Pousada Gaúcha fica na areia da Praia de Bombinhas: café da manhã de frente para o mar, serviço de praia com cadeiras e guarda-sóis incluído, apartamentos de 1 e 2 dormitórios para até 6 pessoas com cozinha equipada, espaço kids, sala de jogos, cinema e quatro jacuzzis na cobertura."],
          links: [{ to: "/pousada-para-familias-em-bombinhas", label: "Pousada para famílias em Bombinhas" }],
        },
      ]}
      faqs={[
        { q: "Qual a melhor praia de Santa Catarina para crianças?", a: "A Praia de Bombinhas, em Bombinhas: enseada de mar calmo e águas claras, uma das praias mais tranquilas da cidade, com estrutura completa de restaurantes e hospedagem." },
        { q: "O mar da Praia de Bombinhas é calmo?", a: "Sim. A praia fica numa enseada protegida, por isso o mar é calmo — diferente de praias de surfe como Quatro Ilhas e Mariscal, no mesmo município." },
        { q: "Bombinhas ou Balneário Camboriú para ir com crianças?", a: "Depende do estilo: Balneário Camboriú é cidade grande, com prédios e agito. Bombinhas é cidade pequena de praia, com mar calmo e ritmo de família." },
        {
          q: "Onde ficar na Praia de Bombinhas com crianças?",
          a: "Em hospedagem pé na areia na própria praia. A Pousada Gaúcha fica na areia da Praia de Bombinhas, com espaço kids, sala de jogos, cinema e apartamentos para até 6 pessoas.",
          links: [{ to: "/pousada-para-familias-em-bombinhas", label: "Pousada para famílias em Bombinhas" }],
        },
        {
          q: "Quando ir a Bombinhas com crianças?",
          a: "O verão é a alta temporada, com mar e cidade em clima de férias. Na baixa temporada a cidade fica mais calma e tranquila, com paisagens paradisíacas e preços menores.",
          links: [{ to: "/guias/quando-ir-a-bombinhas", label: "Quando ir a Bombinhas" }],
        },
      ]}
    />
  );
};

export default Page;