import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackInitiateCheckout } from "@/lib/pixel";

const BASE_URL = "https://pousadagaucha.com";
const URL = `${BASE_URL}/acomodacoes/garden`;
const WHATSAPP_URL = "http://wa.me/5547997910034";
const BOOKING_URL =
  "https://hbook.hsystem.com.br/Booking?companyId=5cae2795ab41d51dd869d73a&checkin=04/12/2019&checkout=08/12/2019&adults=1&children=0&_gl=1*1m36n9x*_gcl_au*MTkzNTI4MzE0Mi4xNzY2MzE3MTcy#_ga=2.158433650.936447759.1773250147-595639725.1766317175";

const TITLE = "Garden Frente Mar Bombinhas · Deck e Superior · Pousada Gaúcha";
const DESCRIPTION =
  "Garden Frente Mar Deck (deck exclusivo + sacada) e Garden Frente Mar Superior (sacada no andar de cima). 40–45m², queen-size, 2 TVs 43\" Netflix, cozinha completa. Únicos quartos de pousada frente ao mar no centro de Bombinhas.";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Acomodações", item: `${BASE_URL}/acomodacoes` },
    { "@type": "ListItem", position: 3, name: "Garden", item: URL },
  ],
};

type RoomCard = {
  id: string;
  heading: string;
  schemaName: string;
  paragraph: string;
  specs: string;
  bed: string;
};

const ROOMS: RoomCard[] = [
  {
    id: "garden-deck",
    heading: "Garden Frente Mar Deck",
    schemaName: "Garden Frente Mar Deck",
    paragraph:
      "Apartamento de frente para a Praia de Bombinhas com sacada privativa no quarto e deck exclusivo no nível do jardim — dois espaços ao ar livre com vista para o mar. Um quarto com cama de casal queen-size. Sala com sofá-cama para mais duas pessoas. Cozinha com balcão de pia, frigobar, fogão, micro-ondas e utensílios básicos. Duas TVs de 43\" com Netflix. Ar-condicionado split no quarto e na sala. Telefone.",
    specs:
      "40 a 45m² · 2 adultos + 2 crianças · sacada no quarto + deck exclusivo · vista frontal para o mar · 2 TVs 43\" com Netflix · cozinha completa · sofá-cama · ar-condicionado split",
    bed: "Sacada privativa no quarto e deck exclusivo com vista direta para a Praia de Bombinhas.",
  },
  {
    id: "garden-superior",
    heading: "Garden Frente Mar Superior",
    schemaName: "Garden Frente Mar Superior",
    paragraph:
      "Apartamento no andar superior com sacada privativa no quarto e vista direta para a Praia de Bombinhas. A altura maior abre o horizonte e entrega uma perspectiva mais panorâmica que o nível do deck. Um quarto com cama de casal queen-size. Sala com sofá-cama para mais duas pessoas. Cozinha com balcão de pia, frigobar, fogão, micro-ondas e utensílios básicos. Duas TVs de 43\" com Netflix. Ar-condicionado split no quarto e na sala. Telefone.",
    specs:
      "40 a 45m² · 2 adultos + 2 crianças · sacada privativa no quarto · vista frontal elevada para o mar · 2 TVs 43\" com Netflix · cozinha completa · sofá-cama · ar-condicionado split",
    bed: "Sacada privativa no quarto com vista frontal elevada para a Praia de Bombinhas.",
  },
  {
    id: "garden-studio",
    heading: "Garden Studio 01 Dormitório",
    schemaName: "Garden Studio 01 Dormitório",
    paragraph:
      "Apartamento com a mesma metragem e estrutura interna dos demais quartos Garden. Sem sacada, mas com vista para o mar pela janela do quarto — lateral, com a praia e as palmeiras visíveis da janela. Uma vista de mar de verdade, num ângulo diferente. A melhor relação custo-benefício do bloco para quem quer o Bloco Garden com um valor menor. Um quarto com cama de casal queen-size. Sala com sofá-cama para mais duas pessoas. Cozinha com balcão de pia, frigobar, fogão, micro-ondas e utensílios básicos. Duas TVs de 43\" com TV a cabo e Netflix. Ar-condicionado split no quarto e na sala. Telefone.",
    specs:
      "40 a 45m² · 2 adultos + 2 crianças · vista lateral para o mar pela janela do quarto · sem sacada · 2 TVs 43\" com TV a cabo e Netflix · cozinha completa · sofá-cama · ar-condicionado split",
    bed: "Vista lateral para a praia e o mar pela janela do quarto. Sem sacada.",
  },
];

const roomLd = ROOMS.map((room) => ({
  "@context": "https://schema.org",
  "@type": "HotelRoom",
  name: room.schemaName,
  description: room.paragraph,
  url: `${URL}#${room.id}`,
  occupancy: { "@type": "QuantitativeValue", maxValue: 4, unitText: "pessoas" },
  floorSize: { "@type": "QuantitativeValue", minValue: 40, maxValue: 45, unitCode: "MTK" },
  bed: { "@type": "BedDetails", typeOfBed: "Cama de casal e sofá-cama" },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "TV com Netflix", value: true },
    { "@type": "LocationFeatureSpecification", name: "Cozinha equipada", value: true },
    { "@type": "LocationFeatureSpecification", name: "Ar-condicionado", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi gratuito", value: true },
    { "@type": "LocationFeatureSpecification", name: "Sofá-cama na sala", value: true },
    ...(room.id === "garden-studio"
      ? [{ "@type": "LocationFeatureSpecification", name: "TV a cabo", value: true }]
      : []),
  ],
  containedInPlace: { "@id": `${BASE_URL}/#lodging` },
}));

const INCLUDED = [
  "Um quarto com cama de casal queen-size",
  "Sala com sofá-cama para mais duas pessoas",
  "Cozinha com balcão de pia, frigobar, fogão, micro-ondas e utensílios básicos",
  "Duas TVs de 43\" com Netflix",
  "Ar-condicionado split no quarto e na sala",
  "Telefone",
  "Acesso às jacuzzis climatizadas da cobertura (uso por agendamento, sem custo)",
  "Serviço de praia com cadeiras e guarda-sóis incluídos na diária",
  "Acesso direto à areia da Praia de Bombinhas",
  "Estacionamento privativo gratuito (uma vaga por hospedagem)",
  "Wi-Fi gratuito",
];

const FAQ: { question: string; answer: string[] }[] = [
  {
    question: "Qual a diferença entre Garden Deck, Garden Superior e Garden Studio?",
    answer: [
      "Garden Frente Mar Deck: sacada no quarto com vista para o mar e deck exclusivo no nível do jardim. São dois espaços ao ar livre privativos.",
      "Garden Frente Mar Superior: sacada privativa no quarto com vista para o mar, no andar de cima. Vista mais alta e panorâmica, sem o deck exclusivo.",
      "Garden Studio 01 Dormitório: sem sacada, com vista lateral pelo deck para o jardim e o mar ao fundo. Mesma metragem e estrutura interna. Tem TV a cabo além do Netflix.",
    ],
  },
  {
    question: "Os quartos Garden têm vista para o mar?",
    answer: [
      "Garden Frente Mar Deck e Garden Frente Mar Superior têm vista direta para a Praia de Bombinhas. O Garden Studio tem vista lateral pelo deck, com o mar ao fundo.",
    ],
  },
  {
    question: "Qual a metragem dos quartos Garden?",
    answer: ["40 a 45m². Todos têm quarto, sala, cozinha equipada e espaço privativo externo (exceto o Studio, que não tem sacada)."],
  },
  {
    question: "Quantas pessoas cabem nos apartamentos Garden?",
    answer: [
      "Dois adultos na cama de casal queen-size e mais duas pessoas no sofá-cama da sala. Capacidade ideal: 2 adultos e 2 crianças.",
    ],
  },
  {
    question: "Os quartos Garden têm Netflix?",
    answer: [
      "Sim. Todos os quartos Garden têm duas TVs de 43\" com Netflix. O Garden Studio tem também TV a cabo além do streaming.",
    ],
  },
];

const Garden = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href={URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content={URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      {roomLd.map((ld) => (
        <script key={ld.name} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>

    <Navbar />

    <main className="pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Início</Link>
          <ChevronRight size={14} />
          <Link to="/acomodacoes" className="hover:text-primary">Acomodações</Link>
          <ChevronRight size={14} />
          <span className="text-foreground">Garden</span>
        </nav>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Garden Frente Mar — os únicos quartos de pousada com vista para o mar no centro de Bombinhas
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          O Bloco Garden da Pousada Gaúcha tem 8 apartamentos de 40 a 45m² no centro de Bombinhas. São os únicos quartos de pousada no centro da cidade com vista direta para a Praia de Bombinhas. Três categorias: Garden Frente Mar Deck (com deck exclusivo e sacada), Garden Frente Mar Superior (sacada no andar de cima) e Garden Studio 01 Dormitório (vista lateral, sem sacada). Todos têm quarto com cama de casal queen-size, sala com sofá-cama, cozinha com fogão e micro-ondas, duas TVs de 43" com Netflix, ar-condicionado split no quarto e na sala, e capacidade para 2 adultos e 2 crianças.
        </p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          Três tipos de apartamento dentro do Garden
        </h2>
        <div className="space-y-6 mb-16">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              id={room.id}
              className="bg-background rounded-xl p-6 shadow-[var(--shadow-soft)]"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{room.heading}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{room.paragraph}</p>
              <p className="text-sm font-medium text-primary">{room.specs}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          O que todos os apartamentos Garden têm
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-16">
          {INCLUDED.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          Por que os quartos frente ao mar de Bombinhas são raros
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Bombinhas tem dezenas de pousadas e apartamentos de temporada próximos à praia. Mas ter o
          quarto com a janela abrindo para o mar — não para a rua, não para o estacionamento, não
          para o prédio vizinho — é diferente. No centro de Bombinhas, os únicos quartos de pousada
          com essa vista são os 6 do Garden Deck e Garden Superior.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-16">
          A diferença aparece na prática: você acorda, abre a janela e vê o estado do mar antes de
          decidir se vai cedo ou tarde para a praia.
        </p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">Perguntas rápidas</h2>
        <div className="space-y-6 mb-16">
          {FAQ.map((item) => (
            <div key={item.question}>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.question}</h3>
              {item.answer.map((p) => (
                <p key={p} className="text-muted-foreground leading-relaxed mb-2">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="bg-muted/40 rounded-xl p-8 text-center">
          <p className="text-lg text-foreground mb-6 leading-relaxed">
            Reserve pelo site e garanta o melhor valor. Se quiser ajuda para escolher entre Deck,
            Superior ou Studio, fale com a gente pelo WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackInitiateCheckout}
              className="inline-flex items-center justify-center bg-green-500 text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              RESERVE JÁ
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-foreground/5 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp (47) 99791-0034
            </a>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

export default Garden;
