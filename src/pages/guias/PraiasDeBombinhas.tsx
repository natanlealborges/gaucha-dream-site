import { LocalizedGuide } from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";
import heroBeach from "@/assets/hero-beach.jpg";

const Page = () => (
  <LocalizedGuide
    guide={getGuide("praias-de-bombinhas")!}
    content={{
      pt: {
        heroImage: { src: heroBeach, alt: "Vista aérea da Praia de Bombinhas, em frente à Pousada Gaúcha, com mar calmo e areia clara" },
        intro:
          "Bombinhas é uma península com praias de perfis bem diferentes a poucos minutos umas das outras. A mais tranquila é a Praia de Bombinhas (centro), de mar calmo e água clara, seguida de Sepultura e Conceição. Para ondas e mais movimento, Bombas, Quatro Ilhas e Mariscal. Para sossego, Zimbros, Canto Grande e a Tainha.",
        sections: [
          {
            heading: "Mar calmo, boas para crianças",
            items: [
              { title: "Bombinhas (centro)", text: "uma das praias mais tranquilas do município, com cerca de 1 km de areia branca e fina, águas calmas e claras e restaurantes e operadoras de mergulho por perto. É onde fica a Pousada Gaúcha, de frente para o mar." },
              { title: "Sepultura", text: "pequena enseada de águas muito transparentes cercada de mata, procurada para snorkel. O estacionamento é pago e lota cedo no verão." },
              { title: "Lagoinha e Prainha", text: "a Lagoinha forma uma piscina natural; da Prainha saem os barcos de passeio." },
              { title: "Conceição", text: "continuação de Canto Grande, com mar calmo e piscinas naturais." },
            ],
          },
          {
            heading: "Com ondas e mais movimento",
            items: [
              { title: "Bombas", text: "cerca de 2 km, mais movimentada e com ondas, com calçadão e comércio. É a primeira praia para quem entra na cidade." },
              { title: "Quatro Ilhas", text: "águas límpidas e ondas, movimentada no verão, com bares e restaurantes." },
              { title: "Mariscal", text: "cerca de 4 km, ondas de médio porte, restinga preservada e mais vagas para estacionar." },
              { title: "Retiro dos Padres", text: "pequena, com ondas leves e pouco movimento." },
            ],
          },
          {
            heading: "Mais sossegadas",
            items: [
              { title: "Zimbros", text: "enseada de águas calmas com barcos de pescadores." },
              { title: "Canto Grande", text: "a mais extensa do município. O \"mar de dentro\" é calmo; o \"mar de fora\" tem ondas." },
              { title: "Tainha", text: "águas limpas e areia fina, com acesso por estrada de terra a partir da Conceição." },
              { title: "Só por trilha ou barco", text: "Galheta, Ribeiro, Cardoso, Lagoa, Triste e Vermelha." },
            ],
          },
        ],
        faqs: [
          { q: "Qual a melhor praia de Bombinhas para crianças?", a: "A Praia de Bombinhas (centro), pelo mar calmo, além de Sepultura e Conceição." },
          { q: "Qual a praia mais tranquila de Bombinhas?", a: "A Praia de Bombinhas (centro) é uma das mais tranquilas do município, com mar calmo e água clara." },
          { q: "Dá para conhecer várias praias no mesmo dia?", a: "Sim. As praias ficam a poucos minutos de carro entre si; no verão o trânsito aumenta esse tempo." },
        ],
        ctaText: "Hospedado de frente para a Praia de Bombinhas, você começa o dia no mar sem pegar o carro.",
      },
      es: {
        heroImage: { src: heroBeach, alt: "Vista aérea de la Praia de Bombinhas, frente a la Pousada Gaúcha, con mar calmo y arena clara" },
        intro:
          "Bombinhas es una península con playas de perfiles muy distintos a pocos minutos unas de otras. La más tranquila es la Praia de Bombinhas (centro), de mar calmo y agua clara, seguida de Sepultura y Conceição. Para olas y más movimiento, Bombas, Quatro Ilhas y Mariscal. Para tranquilidad, Zimbros, Canto Grande y Tainha.",
        sections: [
          {
            heading: "Mar calmo, ideales para niños",
            items: [
              { title: "Bombinhas (centro)", text: "una de las playas más tranquilas del municipio, con cerca de 1 km de arena blanca y fina, aguas calmas y claras, y restaurantes y operadoras de buceo cerca. Es donde está la Pousada Gaúcha, frente al mar." },
              { title: "Sepultura", text: "pequeña ensenada de aguas muy transparentes rodeada de vegetación, muy buscada para hacer snorkel. El estacionamiento es pago y se llena temprano en verano." },
              { title: "Lagoinha y Prainha", text: "la Lagoinha forma una piscina natural; desde la Prainha salen los barcos de paseo." },
              { title: "Conceição", text: "continuación de Canto Grande, con mar calmo y piscinas naturales." },
            ],
          },
          {
            heading: "Con olas y más movimiento",
            items: [
              { title: "Bombas", text: "cerca de 2 km, más concurrida y con olas, con paseo costero y comercios. Es la primera playa para quien entra a la ciudad." },
              { title: "Quatro Ilhas", text: "aguas límpidas y olas, concurrida en verano, con bares y restaurantes." },
              { title: "Mariscal", text: "cerca de 4 km, olas medianas, vegetación costera preservada y más lugar para estacionar." },
              { title: "Retiro dos Padres", text: "pequeña, con olas suaves y poco movimiento." },
            ],
          },
          {
            heading: "Más tranquilas",
            items: [
              { title: "Zimbros", text: "ensenada de aguas calmas con barcos de pescadores." },
              { title: "Canto Grande", text: "la más extensa del municipio. El \"mar de dentro\" es calmo; el \"mar de fora\" tiene olas." },
              { title: "Tainha", text: "aguas limpias y arena fina, con acceso por camino de tierra desde Conceição." },
              { title: "Solo por sendero o barco", text: "Galheta, Ribeiro, Cardoso, Lagoa, Triste y Vermelha." },
            ],
          },
        ],
        faqs: [
          { q: "¿Cuál es la mejor playa de Bombinhas para niños?", a: "La Praia de Bombinhas (centro), por su mar calmo, además de Sepultura y Conceição." },
          { q: "¿Cuál es la playa más tranquila de Bombinhas?", a: "La Praia de Bombinhas (centro) es una de las más tranquilas del municipio, con mar calmo y agua clara." },
          { q: "¿Se pueden conocer varias playas el mismo día?", a: "Sí. Las playas están a pocos minutos en auto entre sí; en verano el tránsito aumenta ese tiempo." },
        ],
        ctaText: "Alojándose frente a la Praia de Bombinhas, el día empieza en el mar sin necesidad de sacar el auto.",
      },
    }}
  />
);

export default Page;
