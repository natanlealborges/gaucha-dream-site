import { LocalizedGuide } from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";
import aboutJacuzzi from "@/assets/about-jacuzzi.jpg";

const Page = () => (
  <LocalizedGuide
    guide={getGuide("o-que-fazer-em-bombinhas")!}
    content={{
      pt: {
        intro:
          "Além das praias, Bombinhas tem trilhas curtas com mirantes, mergulho e snorkel em águas claras e passeios de barco. Em dois ou três dias dá para combinar praia, uma trilha e um passeio.",
        sections: [
          {
            heading: "Trilhas e mirantes",
            items: [
              { title: "Morro do Macaco", text: "cerca de 2 km ida e volta, dificuldade média, com vista de quase toda a península." },
              { title: "Mirante 360", text: "caminhada curta a partir da estrada da Tainha, com cobrança de entrada." },
              { title: "Trilha da Sepultura", text: "cerca de 1,5 km ida e volta, leve." },
              { title: "Trilha da Tainha", text: "cerca de 4,5 km ida e volta, moderada." },
              { title: "Costeira de Zimbros", text: "trilha longa que leva às praias desertas; exige preparo." },
            ],
            links: [{ to: "/guias/trilhas-em-bombinhas", label: "Trilhas em Bombinhas" }],
          },
          {
            heading: "No mar",
            items: [
              { title: "Snorkel e mergulho", text: "Sepultura, Lagoinha e Ribeiro têm águas transparentes. As operadoras de mergulho ficam no centro." },
              { title: "Passeios de barco", text: "saem da Prainha." },
              { title: "Surf", text: "Quatro Ilhas e Mariscal." },
            ],
          },
          {
            heading: "Na pousada",
            image: { src: aboutJacuzzi, alt: "Jacuzzi da cobertura da Pousada Gaúcha com vista para o mar de Bombinhas" },
            paragraphs: ["Serviço de praia, café da manhã à beira-mar e jacuzzis com vista para o mar, para os dias em que o plano é não sair da areia."],
            links: [
              { to: "/servico-de-praia", label: "Serviço de praia" },
              { to: "/cafe-da-manha", label: "Café da manhã à beira-mar" },
              { to: "/jacuzzis", label: "Jacuzzis com vista para o mar" },
            ],
          },
          {
            heading: "Fora do verão",
            paragraphs: ["Trilhas, mirantes e mergulho continuam valendo, com a cidade mais calma."],
            links: [{ to: "/guias/bombinhas-no-inverno", label: "Bombinhas no inverno" }],
          },
        ],
        faqs: [
          { q: "Quantos dias ficar em Bombinhas?", a: "Três a quatro dias permitem conhecer as praias principais e fazer uma trilha; uma semana dá para descansar e explorar com calma." },
          { q: "O que fazer em Bombinhas com chuva ou fora do verão?", a: "Trilhas, mirantes e mergulho continuam valendo, com a cidade mais calma." },
        ],
      },
      es: {
        intro:
          "Además de las playas, Bombinhas tiene senderos cortos con miradores, buceo y snorkel en aguas claras y paseos en barco. En dos o tres días se puede combinar playa, un sendero y un paseo.",
        sections: [
          {
            heading: "Senderos y miradores",
            items: [
              { title: "Morro do Macaco", text: "cerca de 2 km ida y vuelta, dificultad media, con vista de casi toda la península." },
              { title: "Mirante 360", text: "caminata corta desde el camino de Tainha, con entrada paga." },
              { title: "Trilha da Sepultura", text: "cerca de 1,5 km ida y vuelta, fácil." },
              { title: "Trilha da Tainha", text: "cerca de 4,5 km ida y vuelta, moderada." },
              { title: "Costeira de Zimbros", text: "sendero largo que lleva a playas desiertas; requiere buen estado físico." },
            ],
            links: [{ to: "/es/guias/trilhas-em-bombinhas", label: "Senderos en Bombinhas" }],
          },
          {
            heading: "En el mar",
            items: [
              { title: "Snorkel y buceo", text: "Sepultura, Lagoinha y Ribeiro tienen aguas transparentes. Las operadoras de buceo están en el centro." },
              { title: "Paseos en barco", text: "salen de la Prainha." },
              { title: "Surf", text: "Quatro Ilhas y Mariscal." },
            ],
          },
          {
            heading: "En la posada",
            image: { src: aboutJacuzzi, alt: "Jacuzzi en la terraza de la Pousada Gaúcha con vista al mar de Bombinhas" },
            paragraphs: ["Servicio de playa, desayuno frente al mar y jacuzzis con vista al mar, para los días en que el plan es no salir de la arena."],
            links: [
              { to: "/es/servico-de-praia", label: "Servicio de playa" },
              { to: "/es/cafe-da-manha", label: "Desayuno frente al mar" },
              { to: "/es/jacuzzis", label: "Jacuzzis con vista al mar" },
            ],
          },
          {
            heading: "Fuera del verano",
            paragraphs: ["Senderos, miradores y buceo siguen valiendo la pena, con la ciudad más tranquila."],
            links: [{ to: "/es/guias/bombinhas-no-inverno", label: "Bombinhas en invierno" }],
          },
        ],
        faqs: [
          { q: "¿Cuántos días quedarse en Bombinhas?", a: "Tres a cuatro días permiten conocer las playas principales y hacer un sendero; una semana alcanza para descansar y explorar con calma." },
          { q: "¿Qué hacer en Bombinhas con lluvia o fuera del verano?", a: "Senderos, miradores y buceo siguen valiendo la pena, con la ciudad más tranquila." },
        ],
      },
    }}
  />
);

export default Page;
