import { useI18n } from "@/i18n/context";
import { getBookingUrl, getWhatsAppUrl } from "@/lib/attribution";
import { LocaleHelmet as Helmet } from "@/i18n/LocaleHelmet";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackInitiateCheckout } from "@/lib/pixel";

const BASE_URL = "https://pousadagaucha.com";
const URL = `${BASE_URL}/acomodacoes/bloco-gaucha`;

const TITLE = "Bloco Gaúcha · Apartamentos com churrasqueira em Bombinhas";
const DESCRIPTION =
  "Suíte Gaúcha, apartamento de 1 dormitório e apartamento de 2 dormitórios. Sacada com churrasqueira privativa, cozinha completa, ar-condicionado split e sofá-cama. Os maiores apartamentos da Pousada Gaúcha.";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Acomodações", item: `${BASE_URL}/acomodacoes` },
    { "@type": "ListItem", position: 3, name: "Bloco Gaúcha", item: URL },
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
    id: "suite-gaucha",
    heading: "Suíte Gaúcha",
    paragraph:
      "Quarto com cama de casal (box), ar-condicionado split, telefone, uma TV de 32\" com canais de TV a cabo e banheiro com ducha e secador de cabelo. Mini cozinha com balcão de pia, frigobar, fogão, micro-ondas e utensílios básicos. Sem sacada.",
    specs:
      "Cama de casal box · ar-condicionado split · TV 32\" com TV a cabo · mini cozinha com fogão e micro-ondas · banheiro com ducha e secador · telefone · sem sacada",
    maxOccupancy: 2,
    amenities: ["Mini cozinha equipada", "Ar-condicionado split", "TV a cabo", "Telefone", "Secador de cabelo"],
  },
  {
    id: "gaucha-1-dormitorio",
    heading: "Apartamento de 01 Dormitório Gaúcha",
    paragraph:
      "Um quarto com cama de casal (box), ar-condicionado split e telefone. Sala com sofá-cama para duas pessoas e ar-condicionado split. Duas TVs de 32\" com canais de TV a cabo. Banheiro com ducha e secador de cabelo. Cozinha completa. Sacada com churrasqueira privativa.",
    specs:
      "1 quarto · sala com sofá-cama para 2 · 2 TVs 32\" com TV a cabo · ar-condicionado split nos dois ambientes · cozinha completa · sacada com churrasqueira privativa",
    maxOccupancy: 4,
    amenities: [
      "Cozinha completa",
      "Sacada com churrasqueira privativa",
      "Ar-condicionado split",
      "TV a cabo",
      "Sofá-cama na sala",
    ],
  },
  {
    id: "gaucha-2-dormitorios",
    heading: "Apartamento de 02 Dormitórios Gaúcha",
    paragraph:
      "Dois quartos com cama de casal (box), ambos com ar-condicionado split e telefone. Duas TVs de 32\" com canais de TV a cabo. Sala com sofá-cama para duas pessoas e ar-condicionado split. Dois banheiros com ducha e secador de cabelo. Cozinha completa. Sacada com churrasqueira privativa.",
    specs:
      "2 quartos · 2 banheiros · sala com sofá-cama para 2 · 2 TVs 32\" com TV a cabo · ar-condicionado split · cozinha completa · sacada com churrasqueira privativa",
    maxOccupancy: 6,
    amenities: [
      "Cozinha completa",
      "Sacada com churrasqueira privativa",
      "Dois banheiros",
      "Ar-condicionado split",
      "TV a cabo",
      "Sofá-cama na sala",
    ],
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
  "Ar-condicionado split nos quartos e na sala",
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
    question: "Quais apartamentos do Bloco Gaúcha têm churrasqueira?",
    answer: [
      "O Apartamento de 01 Dormitório Gaúcha e o Apartamento de 02 Dormitórios Gaúcha têm sacada com churrasqueira privativa. A Suíte Gaúcha não tem sacada.",
    ],
  },
  {
    question: "Qual a diferença entre a Suíte Gaúcha e os apartamentos?",
    answer: [
      "A Suíte Gaúcha é um ambiente único, com quarto, mini cozinha e banheiro, sem sala separada e sem sacada. Os apartamentos de 1 e 2 dormitórios têm sala com sofá-cama, cozinha completa e sacada com churrasqueira.",
    ],
  },
  {
    question: "Quantas pessoas cabem no apartamento de 2 dormitórios?",
    answer: [
      "Dois quartos com cama de casal e sofá-cama na sala para mais duas pessoas. É a acomodação com maior capacidade da pousada.",
    ],
  },
  {
    question: "Os apartamentos do Bloco Gaúcha têm Netflix?",
    answer: [
      "As TVs do Bloco Gaúcha são de 32\" com canais de TV a cabo. As TVs com Netflix são as de 43\" do Bloco Garden.",
    ],
  },
];

const BlocoGaucha = () => {
  const { t, text: translate, locale, path } = useI18n();
  return (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href={path(URL)} />
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
        <nav aria-label={t("copy596")} className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to={path("/")} className="hover:text-primary">{t("copy000")}</Link>
          <ChevronRight size={14} />
          <Link to={path("/acomodacoes")} className="hover:text-primary">{t("copy001")}</Link>
          <ChevronRight size={14} />
          <span className="text-foreground">Bloco Gaúcha</span>
        </nav>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">{t("copy521")}</h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12">{t("copy522")}</p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy523")}</h2>
        <div className="space-y-6 mb-16">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              id={room.id}
              className="bg-background rounded-xl p-6 shadow-[var(--shadow-soft)]"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{translate(room.heading)}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{translate(room.paragraph)}</p>
              <p className="text-sm font-medium text-primary">{translate(room.specs)}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy524")}</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-16">
          {INCLUDED.map((item) => (
            <li key={translate(item)}>{translate(item)}</li>
          ))}
        </ul>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy488")}</h2>
        <div className="space-y-6 mb-16">
          {FAQ.map((item) => (
            <div key={translate(item.question)}>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{translate(item.question)}</h3>
              {item.answer.map((p) => (
                <p key={translate(p)} className="text-muted-foreground leading-relaxed mb-2">
                  {translate(p)}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="bg-muted/40 rounded-xl p-8 text-center">
          <p className="text-lg text-foreground mb-6 leading-relaxed">{t("copy525")}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={getBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackInitiateCheckout}
              className="inline-flex items-center justify-center bg-green-500 text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >{t("copy007")}</a>
            <a
              href={getWhatsAppUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-foreground/5 transition-colors"
            >
              <MessageCircle size={18} />{t("copy178")}</a>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
);
};

export default BlocoGaucha;
