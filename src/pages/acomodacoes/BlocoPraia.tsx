import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackInitiateCheckout } from "@/lib/pixel";

const BASE_URL = "https://pousadagaucha.com";
const URL = `${BASE_URL}/acomodacoes/bloco-praia`;
const WHATSAPP_URL = "http://wa.me/5547997910034";
const BOOKING_URL =
  "https://hbook.hsystem.com.br/Booking?companyId=5cae2795ab41d51dd869d73a&checkin=04/12/2019&checkout=08/12/2019&adults=1&children=0&_gl=1*1m36n9x*_gcl_au*MTkzNTI4MzE0Mi4xNzY2MzE3MTcy#_ga=2.158433650.936447759.1773250147-595639725.1766317175";

const TITLE = "Bloco Praia · Apartamentos frente mar e laterais · Pousada Gaúcha";
const DESCRIPTION =
  "Suíte Praia, 1 dormitório lateral, 1 dormitório frente mar, 1 dormitório frente mar superior e 2 dormitórios. Sacadas com vista para a Praia de Bombinhas, cozinha equipada e ar-condicionado split.";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Acomodações", item: `${BASE_URL}/acomodacoes` },
    { "@type": "ListItem", position: 3, name: "Bloco Praia", item: URL },
  ],
};

type RoomCard = {
  id: string;
  heading: string;
  paragraph: string;
  specs: string;
  maxOccupancy: number;
  amenities: string[];
};

const ROOMS: RoomCard[] = [
  {
    id: "suite-praia",
    heading: "Suíte Praia",
    paragraph:
      "Equipada com cama de casal (box), TV de 32\" com canais de TV a cabo, ar-condicionado split, telefone e mini cozinha com frigobar, fogão, micro-ondas e utensílios básicos. Banheiro com ducha e secador de cabelo. A suíte possui sacada lateral ao mar.",
    specs:
      "Cama de casal box · TV 32\" com TV a cabo · ar-condicionado split · mini cozinha · sacada lateral ao mar · banheiro com ducha e secador",
    maxOccupancy: 2,
    amenities: ["Mini cozinha equipada", "Ar-condicionado split", "TV a cabo", "Sacada lateral ao mar", "Telefone"],
  },
  {
    id: "praia-1-dormitorio-lateral",
    heading: "Apartamento de 01 Dormitório Lateral Praia",
    paragraph:
      "Um quarto com cama de casal (box), cozinha com frigobar, fogão, micro-ondas e utensílios básicos, sala com sofá-cama para duas pessoas, duas TVs de 32\" com canais de TV a cabo, ar-condicionado split nos dois ambientes e telefone. Banheiro com ducha e secador de cabelo. O apartamento possui duas sacadas laterais (uma no quarto e outra na sala).",
    specs:
      "1 quarto · sala com sofá-cama para 2 · 2 TVs 32\" com TV a cabo · ar-condicionado split nos dois ambientes · cozinha equipada · duas sacadas laterais",
    maxOccupancy: 4,
    amenities: ["Cozinha equipada", "Duas sacadas laterais", "Ar-condicionado split", "TV a cabo", "Sofá-cama na sala"],
  },
  {
    id: "praia-1-dormitorio-frente-mar",
    heading: "Apartamento de 01 Dormitório Frente Mar Praia",
    paragraph:
      "Um quarto com cama de casal (box), cozinha com frigobar, fogão, micro-ondas e utensílios básicos, sala com sofá-cama para duas pessoas, duas TVs de 32\" com canais de TV a cabo, ar-condicionado split nos dois ambientes e telefone. Banheiro com ducha e secador de cabelo. O apartamento possui uma sacada no quarto com vista frente mar e outra sacada na sala, lateral ao mar.",
    specs:
      "1 quarto · sacada frente mar no quarto + sacada lateral na sala · sala com sofá-cama para 2 · 2 TVs 32\" com TV a cabo · ar-condicionado split · cozinha equipada",
    maxOccupancy: 4,
    amenities: ["Sacada frente mar", "Cozinha equipada", "Ar-condicionado split", "TV a cabo", "Sofá-cama na sala"],
  },
  {
    id: "praia-1-dormitorio-frente-mar-superior",
    heading: "Apartamento de 01 Dormitório Frente Mar Superior Praia",
    paragraph:
      "Um quarto com cama king-size (2x2) mais uma cama de solteiro, cozinha com frigobar, fogão, micro-ondas e utensílios básicos, sala com sofá-cama para duas pessoas, duas TVs de 32\" com canais de TV a cabo, ar-condicionado split nos dois ambientes e telefone. Banheiro com ducha e secador de cabelo. O apartamento possui sacada grande totalmente frente mar.",
    specs:
      "1 quarto com cama king-size + cama de solteiro · sacada grande frente mar · sala com sofá-cama para 2 · 2 TVs 32\" com TV a cabo · ar-condicionado split · cozinha equipada",
    maxOccupancy: 5,
    amenities: ["Sacada grande frente mar", "Cama king-size", "Cozinha equipada", "Ar-condicionado split", "TV a cabo"],
  },
  {
    id: "praia-2-dormitorios",
    heading: "Apartamento de 02 Dormitórios Praia",
    paragraph:
      "Dois quartos com cama de casal (box), ambos com ar-condicionado, cozinha com frigobar, fogão, micro-ondas e utensílios básicos, telefone, duas TVs de 32\" com canais de TV a cabo, sala com sofá-cama para duas pessoas, sacada e banheiro com ducha e secador de cabelo.",
    specs:
      "2 quartos · sala com sofá-cama para 2 · 2 TVs 32\" com TV a cabo · ar-condicionado · cozinha equipada · sacada",
    maxOccupancy: 6,
    amenities: ["Dois dormitórios", "Cozinha equipada", "Sacada", "Ar-condicionado", "TV a cabo", "Sofá-cama na sala"],
  },
];

const roomLd = ROOMS.map((room) => ({
  "@context": "https://schema.org",
  "@type": "HotelRoom",
  name: room.heading,
  description: room.paragraph,
  url: `${URL}#${room.id}`,
  occupancy: { "@type": "QuantitativeValue", maxValue: room.maxOccupancy, unitText: "pessoas" },
  bed: { "@type": "BedDetails", typeOfBed: "Cama de casal box" },
  amenityFeature: room.amenities.map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
  containedInPlace: { "@id": `${BASE_URL}/#lodging` },
}));

const INCLUDED = [
  "Ar-condicionado split no quarto e na sala",
  "Cozinha com frigobar, fogão, micro-ondas e utensílios básicos",
  "Banheiro com ducha e secador de cabelo",
  "Telefone no apartamento",
  "TV com canais de TV a cabo",
  "Acesso às jacuzzis climatizadas da cobertura (uso por agendamento, sem custo)",
  "Serviço de praia com cadeiras e guarda-sóis incluídos na diária",
  "Acesso direto à areia da Praia de Bombinhas",
  "Estacionamento privativo gratuito (uma vaga por hospedagem)",
  "Wi-Fi gratuito",
];

const FAQ: { question: string; answer: string[] }[] = [
  {
    question: "Quais apartamentos do Bloco Praia são frente mar?",
    answer: [
      "O Apartamento de 01 Dormitório Frente Mar Praia (sacada frente mar no quarto e sacada lateral na sala) e o Apartamento de 01 Dormitório Frente Mar Superior Praia (sacada grande totalmente frente mar).",
    ],
  },
  {
    question: "Qual acomodação do Bloco Praia tem cama king-size?",
    answer: [
      "O Apartamento de 01 Dormitório Frente Mar Superior Praia, com cama king-size (2x2) mais uma cama de solteiro no quarto e sofá-cama na sala.",
    ],
  },
  {
    question: "A Suíte Praia tem cozinha?",
    answer: [
      "Sim, mini cozinha com frigobar, fogão, micro-ondas e utensílios básicos. É um ambiente único, com sacada lateral ao mar.",
    ],
  },
  {
    question: "O Bloco Praia é perto do café da manhã?",
    answer: [
      "Sim. O Bloco Praia é o mais próximo do espaço onde o café da manhã é servido, à beira-mar.",
    ],
  },
];

const BlocoPraia = () => (
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
          <span className="text-foreground">Bloco Praia</span>
        </nav>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Bloco Praia — apartamentos frente mar e laterais na Praia de Bombinhas
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          O Bloco Praia é o mais próximo do café da manhã e da areia. São cinco tipos de acomodação:
          Suíte Praia, Apartamento de 01 Dormitório Lateral, Apartamento de 01 Dormitório Frente
          Mar, Apartamento de 01 Dormitório Frente Mar Superior (com cama king-size e sacada grande
          frente mar) e Apartamento de 02 Dormitórios. Todos com ar-condicionado split, telefone,
          TVs de 32" com canais de TV a cabo, cozinha equipada e banheiro com ducha e secador de
          cabelo.
        </p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          Cinco tipos de acomodação no Bloco Praia
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
          O que todas as acomodações do Bloco Praia têm
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-16">
          {INCLUDED.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

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
            Reserve pelo site e garanta o melhor valor. Se quiser ajuda para escolher entre a suíte,
            os laterais e os frente mar, fale com a gente pelo WhatsApp.
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

export default BlocoPraia;
