import { LocalizedGuide } from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";
import aboutDeck from "@/assets/about-deck.jpg";

const Page = () => (
  <LocalizedGuide
    guide={getGuide("quando-ir-a-bombinhas")!}
    content={{
      pt: {
        heroImage: { src: aboutDeck, alt: "Deck da Pousada Gaúcha de frente para a Praia de Bombinhas" },
        intro:
          "De dezembro a março é a época de praia, com tudo aberto e a cidade em festa. Para aproveitar a praia com menos movimento, prefira do pós-Carnaval a abril. De maio a outubro Bombinhas fica mais calma: praias vazias, paisagens ainda mais bonitas e diárias menores, o momento certo para descansar de verdade.",
        sections: [
          { heading: "Dezembro ao Carnaval", paragraphs: ["Alta temporada. Réveillon, janeiro e Carnaval são os períodos mais procurados. Reserve com antecedência."] },
          { heading: "Pós-Carnaval a abril", paragraphs: ["Ainda é tempo de praia, com a cidade mais vazia."] },
          {
            heading: "Maio a outubro",
            paragraphs: ["Baixa temporada. É quando a cidade fica mais calma e a paisagem aparece inteira: praia quase só para você, trilhas sem fila, paz e tranquilidade."],
            links: [{ to: "/guias/bombinhas-no-inverno", label: "Bombinhas no inverno" }],
          },
          {
            heading: "Novembro",
            paragraphs: ["O movimento começa a subir e a taxa ambiental (TPA) volta a ser cobrada em meados do mês."],
            links: [{ to: "/guias/como-chegar-a-bombinhas", label: "Como chegar a Bombinhas" }],
          },
        ],
        faqs: [
          { q: "Qual o melhor mês para ir a Bombinhas?", a: "Março, para quem quer praia sem o movimento de janeiro." },
          { q: "Quando Bombinhas fica mais cheia?", a: "Do Réveillon ao fim de janeiro e no Carnaval." },
          { q: "Vale a pena ir a Bombinhas fora do verão?", a: "Sim. A cidade fica mais calma, as praias ficam vazias e as diárias são menores." },
        ],
        ctaText: "Consulte disponibilidade e tarifas direto no site.",
      },
      es: {
        heroImage: { src: aboutDeck, alt: "Deck de la Pousada Gaúcha frente a la Praia de Bombinhas" },
        intro:
          "De diciembre a marzo es la época de playa, con todo abierto y la ciudad de fiesta. Para disfrutar la playa con menos movimiento, conviene ir desde después de Carnaval hasta abril. De mayo a octubre Bombinhas está más tranquila: playas vacías, paisajes todavía más lindos y tarifas menores, el momento justo para descansar de verdad.",
        sections: [
          { heading: "De diciembre a Carnaval", paragraphs: ["Temporada alta. Año Nuevo, enero y Carnaval son los períodos más buscados. Conviene reservar con anticipación."] },
          { heading: "De después de Carnaval a abril", paragraphs: ["Todavía es época de playa, con la ciudad más vacía."] },
          {
            heading: "De mayo a octubre",
            paragraphs: ["Temporada baja. Es cuando la ciudad está más tranquila y el paisaje se muestra entero: la playa casi para uno solo, senderos sin filas, paz y tranquilidad."],
            links: [{ to: "/es/guias/bombinhas-no-inverno", label: "Bombinhas en invierno" }],
          },
          {
            heading: "Noviembre",
            paragraphs: ["El movimiento empieza a crecer y la tasa ambiental (TPA) vuelve a cobrarse a mediados de mes."],
            links: [{ to: "/es/guias/como-chegar-a-bombinhas", label: "Cómo llegar a Bombinhas" }],
          },
        ],
        faqs: [
          { q: "¿Cuál es el mejor mes para ir a Bombinhas?", a: "Marzo, para quien quiere playa sin el movimiento de enero." },
          { q: "¿Cuándo está más llena Bombinhas?", a: "Desde Año Nuevo hasta fines de enero y en Carnaval." },
          { q: "¿Vale la pena ir a Bombinhas fuera del verano?", a: "Sí. La ciudad está más tranquila, las playas están vacías y las tarifas son menores." },
        ],
        ctaText: "Consulta disponibilidad y tarifas directamente en el sitio.",
      },
    }}
  />
);

export default Page;
