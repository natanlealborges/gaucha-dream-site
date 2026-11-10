import { LocalizedGuide } from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";
import breakfast from "@/assets/breakfast-buffet.jpg";

const Page = () => (
  <LocalizedGuide
    guide={getGuide("onde-comer-em-bombinhas")!}
    content={{
      pt: {
        heroImage: { src: breakfast, alt: "Mesa posta na Pousada Gaúcha, em Bombinhas" },
        intro:
          "A cozinha de Bombinhas gira em torno de peixe, camarão e ostra. Estas são as indicações da equipe da Pousada Gaúcha, quase todas perto da pousada.",
        sections: [
          {
            heading: "As indicações da nossa equipe",
            items: [
              { title: "Tropical Aloha Restaurante", text: "o restaurante da Pousada Gaúcha, para hóspedes." },
              { title: "Concha das Ostras", text: "frutos do mar na beira da praia, perto da pousada, com pratos como linguado, polvo e mix de frutos do mar." },
              { title: "César Restaurante", text: "frutos do mar em Bombinhas, perto da pousada." },
              { title: "Delícias do Mar", text: "frutos do mar com destaque para camarão, na Praia de Bombas, com varanda de frente para o mar." },
              { title: "Berro d'Água", text: "frutos do mar em Zimbros, com mesas de frente para o mar. Boa pedida para quem quer conhecer o outro lado da península." },
            ],
          },
        ],
        faqs: [
          { q: "Precisa reservar restaurante em Bombinhas?", a: "Em janeiro e nos feriados, vale chegar cedo ou reservar." },
          { q: "O que comer em Bombinhas?", a: "Peixe, camarão e ostra são a base da cozinha local." },
        ],
      },
      es: {
        heroImage: { src: breakfast, alt: "Mesa servida en la Pousada Gaúcha, en Bombinhas" },
        intro:
          "La cocina de Bombinhas gira en torno al pescado, el camarón y las ostras. Estas son las recomendaciones del equipo de la Pousada Gaúcha, casi todas cerca de la posada.",
        sections: [
          {
            heading: "Las recomendaciones de nuestro equipo",
            items: [
              { title: "Tropical Aloha Restaurante", text: "el restaurante de la Pousada Gaúcha, para huéspedes." },
              { title: "Concha das Ostras", text: "mariscos y pescados a orillas de la playa, cerca de la posada, con platos como lenguado, pulpo y mix de mariscos." },
              { title: "César Restaurante", text: "mariscos y pescados en Bombinhas, cerca de la posada." },
              { title: "Delícias do Mar", text: "mariscos con el camarón como protagonista, en la Praia de Bombas, con galería frente al mar." },
              { title: "Berro d'Água", text: "mariscos y pescados en Zimbros, con mesas frente al mar. Buena opción para conocer el otro lado de la península." },
            ],
          },
        ],
        faqs: [
          { q: "¿Hace falta reservar restaurante en Bombinhas?", a: "En enero y en los feriados, conviene llegar temprano o reservar." },
          { q: "¿Qué comer en Bombinhas?", a: "Pescado, camarón y ostras son la base de la cocina local." },
        ],
      },
    }}
  />
);

export default Page;
