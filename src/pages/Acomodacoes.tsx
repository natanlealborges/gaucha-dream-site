import { useI18n } from "@/i18n/context";
import { getWhatsAppUrl } from "@/lib/attribution";
import { LocaleHelmet as Helmet } from "@/i18n/LocaleHelmet";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { publishedAccommodations } from "@/data/accommodations";

const BASE_URL = "https://pousadagaucha.com";
const URL = `${BASE_URL}/acomodacoes`;

const TITLE = "Acomodações em Bombinhas · Pousada Gaúcha";
const DESCRIPTION =
  "38 apartamentos de 40 a 45m², com cozinha equipada, TV com Netflix e sofá-cama. Três blocos com propostas diferentes: Garden frente ao mar, Gaúcha para famílias e Praia perto do café.";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Acomodações", item: URL },
  ],
};

const COMPARISON: { label: string; garden: string; gaucha: string; praia: string }[] = [
  { label: "Metragem", garden: "40–45 m²", gaucha: "—", praia: "—" },
  {
    label: "Vista",
    garden: "Frente ao mar (Deck e Superior) / lateral (Studio)",
    gaucha: "—",
    praia: "—",
  },
  {
    label: "Varanda/sacada",
    garden: "Deck privativo ou sacada privativa",
    gaucha: "Sacada com churrasqueira",
    praia: "—",
  },
  { label: "Cozinha", garden: "Equipada", gaucha: "Completa", praia: "Equipada" },
  {
    label: "Capacidade ideal",
    garden: "2 adultos + 2 crianças",
    gaucha: "2 adultos + 2 crianças",
    praia: "2 adultos + 2 crianças",
  },
  { label: "TV", garden: "Netflix", gaucha: "Netflix", praia: "Netflix" },
  { label: "Sofá-cama", garden: "Sim", gaucha: "Sim", praia: "Sim" },
];

const Acomodacoes = () => {
  const { t, text: translate, locale, path } = useI18n();

  const blocks = publishedAccommodations();

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
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <nav aria-label={t("copy596")} className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to={path("/")} className="hover:text-primary">{t("copy000")}</Link>
            <ChevronRight size={14} />
            <span className="text-foreground">{t("copy001")}</span>
          </nav>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">{t("copy170")}</h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12">{t("copy171")}</p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {blocks.map((block) => (
              <div
                key={block.id}
                className="bg-background rounded-xl p-6 shadow-[var(--shadow-soft)] flex flex-col"
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-1">{translate(block.name)}</h2>
                <p className="text-sm font-medium text-primary mb-3">{translate(block.subtitle)}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {translate(block.description)}
                </p>
                {block.hasDetailPage ? (
                  <Link
                    to={path(block.href)}
                    className="mt-6 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                  >{t("copy172")}<ChevronRight size={16} />
                  </Link>
                ) : (
                  <span className="mt-6 inline-flex items-center justify-center gap-2 border border-border text-muted-foreground px-5 py-2.5 rounded-lg text-sm font-semibold cursor-not-allowed">{t("copy173")}</span>
                )}
              </div>
            ))}
          </div>

          <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy174")}</h2>
          <div className="overflow-x-auto mb-16">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-semibold text-foreground"></th>
                  <th className="text-left py-3 pr-4 font-semibold text-foreground">Garden</th>
                  <th className="text-left py-3 pr-4 font-semibold text-foreground">{t("copy175")}</th>
                  <th className="text-left py-3 font-semibold text-foreground">{t("copy176")}</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={translate(row.label)} className="border-b border-border/60">
                    <th scope="row" className="text-left py-3 pr-4 font-medium text-foreground align-top">
                      {translate(row.label)}
                    </th>
                    <td className="py-3 pr-4 text-muted-foreground align-top">{translate(row.garden)}</td>
                    <td className="py-3 pr-4 text-muted-foreground align-top">{translate(row.gaucha)}</td>
                    <td className="py-3 text-muted-foreground align-top">{translate(row.praia)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-muted/40 rounded-xl p-8 text-center">
            <p className="text-lg text-foreground mb-6 leading-relaxed">{t("copy177")}</p>
            <a
              href={getWhatsAppUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} />{t("copy178")}</a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Acomodacoes;
