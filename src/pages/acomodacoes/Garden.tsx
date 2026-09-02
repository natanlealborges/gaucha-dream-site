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

const TITLE = "Quartos frente ao mar em Bombinhas · Garden · Pousada Gaúcha";
const DESCRIPTION =
  "Os únicos 6 quartos com vista direta para a Praia de Bombinhas no centro da cidade. Deck privativo ou sacada privativa, 40 a 45m², TV com Netflix, cozinha equipada. Pousada Gaúcha.";

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
    heading: "Garden Deck — deck privativo frente ao mar",
    schemaName: "Garden Deck",
    paragraph:
      "Três apartamentos no nível do jardim com deck privativo de frente para a Praia de Bombinhas. A varanda está no mesmo nível da areia, separada da praia apenas pelo jardim da pousada. É o apartamento mais próximo do mar da Pousada Gaúcha.",
    specs:
      "40 a 45m² · 2 adultos + 2 crianças · deck privativo · vista frontal · TV com Netflix · cozinha equipada · sofá-cama",
    bed: "Deck privativo com vista frontal para a Praia de Bombinhas.",
  },
  {
    id: "garden-superior",
    heading: "Garden Superior — sacada no andar de cima com vista panorâmica",
    schemaName: "Garden Superior",
    paragraph:
      "Três apartamentos no andar superior com sacada privativa e vista para a Praia de Bombinhas de uma altura maior. A perspectiva elevada abre o horizonte e é mais fotogênica que o nível do deck.",
    specs:
      "40 a 45m² · 2 adultos + 2 crianças · sacada privativa · vista frontal elevada · TV com Netflix · cozinha equipada · sofá-cama",
    bed: "Sacada privativa com vista frontal elevada para a Praia de Bombinhas.",
  },
  {
    id: "garden-studio",
    heading: "Garden Studio — o melhor custo-benefício do bloco",
    schemaName: "Garden Studio",
    paragraph:
      "Dois apartamentos com vista lateral pelo deck para o jardim e para o mar. Mesma metragem, mesma estrutura interna — a diferença é a orientação da janela. Para quem quer o Bloco Garden gastando um pouco menos.",
    specs:
      "40 a 45m² · 2 adultos + 2 crianças · vista lateral · TV com Netflix · cozinha equipada · sofá-cama",
    bed: "Vista lateral pelo deck para o jardim e o mar ao fundo.",
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
  ],
  containedInPlace: { "@id": `${BASE_URL}/#lodging` },
}));

const INCLUDED = [
  "Cozinha equipada com fogão, geladeira e utensílios",
  "TV com Netflix",
  "Ar-condicionado",
  "Wi-Fi gratuito",
  "Sofá-cama na sala para acomodação adicional",
  "Acesso às jacuzzis climatizadas da cobertura (uso por agendamento, sem custo)",
  "Serviço de praia com cadeiras e guarda-sóis incluídos",
  "Acesso direto à areia da Praia de Bombinhas",
];

const FAQ: { question: string; answer: string[] }[] = [
  {
    question: "Qual a diferença entre Garden Deck, Garden Superior e Garden Studio?",
    answer: [
      "Garden Deck: três apartamentos no nível do jardim, com deck privativo e vista frontal para a Praia de Bombinhas.",
      "Garden Superior: três apartamentos no andar de cima, com sacada privativa e vista frontal elevada.",
      "Garden Studio: dois apartamentos com vista lateral pelo deck, mesma metragem e mesma estrutura interna, por um valor menor.",
    ],
  },
  {
    question: "Os quartos Garden têm vista para o mar?",
    answer: [
      "Garden Deck e Garden Superior têm vista direta para a Praia de Bombinhas. O Garden Studio tem vista lateral pelo deck para o jardim e o mar ao fundo.",
    ],
  },
  {
    question: "Qual a metragem dos quartos Garden?",
    answer: ["40 a 45m², com sala, cozinha equipada e área privativa."],
  },
  {
    question: "Quantas pessoas cabem nos apartamentos Garden?",
    answer: [
      "2 adultos e até 2 crianças, com sofá-cama na sala para acomodação adicional.",
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
          Quartos frente ao mar em Bombinhas — Bloco Garden
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          O Bloco Garden da Pousada Gaúcha tem 8 apartamentos de 40 a 45m² no centro de Bombinhas,
          com acesso direto ao jardim e ao mar. São os únicos quartos de pousada no centro de
          Bombinhas com vista direta para a Praia de Bombinhas. Todos têm cozinha equipada, TV com
          Netflix, ar-condicionado e sofá-cama na sala, com capacidade para 2 adultos e até 2
          crianças.
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
