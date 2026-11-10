import { useI18n } from "@/i18n/context";
import { getBookingUrl, getWhatsAppUrl } from "@/lib/attribution";
import { LocaleHelmet as Helmet } from "@/i18n/LocaleHelmet";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle, Waves, Coffee, Umbrella, Eye, UtensilsCrossed, ThermometerSun, Car } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuideLinks from "@/components/GuideLinks";
import { trackInitiateCheckout } from "@/lib/pixel";

const BASE_URL = "https://pousadagaucha.com";
const URL = `${BASE_URL}/pousada-pe-na-areia-bombinhas`;

const TITLE = "Pousada pé na areia em Bombinhas · Beira-Mar · Pousada Gaúcha";
const DESCRIPTION =
  "Pousada Gaúcha: pousada beira-mar, pé na areia na Praia de Bombinhas. Acesso direto à areia, café da manhã à beira-mar, serviço de praia incluído e apartamentos com cozinha. Reserve direto.";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Pousada pé na areia em Bombinhas", item: URL },
  ],
};

const touristAttractionLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Pousada Gaúcha — pousada beira-mar, pé na areia em Bombinhas",
  description:
    "Pousada beira-mar no centro de Bombinhas, com acesso direto à areia da Praia de Bombinhas. Café da manhã à beira-mar, serviço de praia incluído e apartamentos com vista para o mar.",
  url: URL,
  image: `${BASE_URL}/lovable-uploads/bdf75423-2928-485e-9c80-d580d5d99039.jpg`,
  touristType: "Famílias e casais",
  isAccessibleForFree: false,
  publicAccess: true,
  containedInPlace: {
    "@type": "Beach",
    name: "Praia de Bombinhas",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Cascudo, 10-A - Beira Mar",
      addressLocality: "Bombinhas",
      addressRegion: "SC",
      postalCode: "88215-000",
      addressCountry: "BR",
    },
  },
};

const FEATURES = [
  { icon: Waves, text: "Acesso direto à areia da Praia de Bombinhas, sem atravessar rua" },
  { icon: Coffee, text: "Café da manhã servido à beira-mar das 7h30 às 10h, todo produzido na pousada" },
  { icon: Umbrella, text: "Serviço de praia com cadeiras e guarda-sóis já montados na areia, incluídos na diária" },
  { icon: Eye, text: "Apartamentos do Bloco Garden com vista direta para o mar (deck privativo ou sacada)" },
  { icon: UtensilsCrossed, text: "Restaurante à beira-mar de outubro a abril" },
  { icon: ThermometerSun, text: "Quatro jacuzzis climatizadas na cobertura com vista para o mar" },
  { icon: Car, text: "Estacionamento privativo gratuito — o carro fica guardado e você vai a pé para tudo" },
];

const PousadaPeNaAreia = () => {
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
      <script type="application/ld+json">{JSON.stringify(touristAttractionLd)}</script>
    </Helmet>

    <Navbar />

    <main className="pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <nav aria-label={t("copy596")} className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to={path("/")} className="hover:text-primary">{t("copy000")}</Link>
          <ChevronRight size={14} />
          <span className="text-foreground">{t("copy259")}</span>
        </nav>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">{t("copy272")}</h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12">{t("copy273")}</p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy274")}</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">{t("copy275")}</p>
        <p className="text-muted-foreground leading-relaxed mb-4">{t("copy276")}</p>
        <p className="text-muted-foreground leading-relaxed mb-16">{t("copy277")}</p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy278")}</h2>
        <ul className="space-y-4 mb-16">
          {FEATURES.map(({ icon: Icon, text }) => (
            <li key={translate(text)} className="flex items-start gap-3">
              <Icon className="text-primary shrink-0 mt-1" size={20} />
              <span className="text-muted-foreground leading-relaxed">{translate(text)}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy279")}</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">{t("copy280")}</p>
        <p className="text-muted-foreground leading-relaxed mb-16">{t("copy281")}</p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy282")}</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">{t("copy283")}</p>
        <p className="text-muted-foreground leading-relaxed mb-16">{t("copy284")}</p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy285")}</h2>
        <div className="space-y-6 mb-16">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{t("copy286")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("copy287")}</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{t("copy288")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("copy289")}</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{t("copy290")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("copy291")}</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{t("copy292")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("copy293")}</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{t("copy294")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("copy295")}</p>
          </div>
        </div>

        <GuideLinks className="mb-10" slugs={["praias-de-bombinhas", "como-chegar-a-bombinhas", "como-llegar-desde-argentina-paraguay-uruguay"]} />

        <div className="bg-muted/40 rounded-xl p-8 text-center">
          <p className="text-lg text-foreground mb-6 leading-relaxed">{t("copy296")}</p>
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

export default PousadaPeNaAreia;
