import { useI18n } from "@/i18n/context";
import { getBookingUrl, getWhatsAppUrl } from "@/lib/attribution";
import { LocaleHelmet as Helmet } from "@/i18n/LocaleHelmet";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackInitiateCheckout } from "@/lib/pixel";

const BASE_URL = "https://pousadagaucha.com";
const URL = `${BASE_URL}/servico-de-praia`;

const TITLE = "Serviço de praia incluído em Bombinhas · Pousada Gaúcha";
const DESCRIPTION =
  "Na Pousada Gaúcha, cadeiras e guarda-sóis já estão montados na areia antes de você descer. Incluídos na diária, todos os dias. Serviço de praia pé na areia em Bombinhas.";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Serviço de praia", item: URL },
  ],
};

const ServicoDePraia = () => {
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
    </Helmet>

    <Navbar />

    <main className="pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <nav aria-label={t("copy596")} className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to={path("/")} className="hover:text-primary">{t("copy000")}</Link>
          <ChevronRight size={14} />
          <span className="text-foreground">{t("copy016")}</span>
        </nav>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">{t("copy236")}</h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12">{t("copy237")}</p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy238")}</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">{t("copy239")}</p>
        <p className="text-muted-foreground leading-relaxed mb-4">{t("copy240")}</p>
        <p className="text-muted-foreground leading-relaxed mb-16">{t("copy241")}</p>

        <div className="bg-muted/40 rounded-xl p-6 mb-16">
          <p className="text-lg italic text-foreground leading-relaxed mb-3">{t("copy242")}</p>
          <p className="text-sm text-muted-foreground">{t("copy243")}</p>
        </div>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy244")}</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">{t("copy245")}</p>
        <p className="text-muted-foreground leading-relaxed mb-16">{t("copy246")}</p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy247")}</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">{t("copy248")}</p>
        <p className="text-muted-foreground leading-relaxed mb-16">{t("copy249")}</p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy196")}</h2>
        <div className="space-y-6 mb-16">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{t("copy250")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("copy251")}</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{t("copy252")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("copy253")}</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{t("copy254")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("copy255")}</p>
          </div>
        </div>

        <div className="bg-muted/40 rounded-xl p-8 text-center">
          <p className="text-lg text-foreground mb-6 leading-relaxed">{t("copy256")}</p>
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

export default ServicoDePraia;
