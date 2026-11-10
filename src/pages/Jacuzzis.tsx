import { useI18n } from "@/i18n/context";
import { getBookingUrl, getWhatsAppUrl } from "@/lib/attribution";
import { LocaleHelmet as Helmet } from "@/i18n/LocaleHelmet";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackInitiateCheckout } from "@/lib/pixel";

const BASE_URL = "https://pousadagaucha.com";
const URL = `${BASE_URL}/jacuzzis`;

const TITLE = "Pousada com jacuzzi em Bombinhas · Quatro na cobertura · Pousada Gaúcha";
const DESCRIPTION =
  "A Pousada Gaúcha tem quatro jacuzzis climatizadas na cobertura, com temperaturas diferentes e vista para a Praia de Bombinhas. Uso por agendamento, sem custo. O ano inteiro.";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Jacuzzis", item: URL },
  ],
};

const Jacuzzis = () => {
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
          <span className="text-foreground">{t("copy018")}</span>
        </nav>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">{t("copy208")}</h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12">{t("copy209")}</p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy210")}</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">{t("copy211")}</p>
        <p className="text-muted-foreground leading-relaxed mb-16">{t("copy212")}</p>

        <div className="bg-muted/40 rounded-xl p-6 mb-16">
          <p className="text-lg italic text-foreground leading-relaxed mb-3">{t("copy213")}</p>
          <p className="text-sm text-muted-foreground">{t("copy214")}</p>
        </div>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy215")}</h2>
        <p className="text-muted-foreground leading-relaxed mb-16">{t("copy216")}</p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy217")}</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">{t("copy218")}</p>
        <p className="text-muted-foreground leading-relaxed mb-16">{t("copy219")}</p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy220")}</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">{t("copy221")}</p>
        <p className="text-muted-foreground leading-relaxed mb-16">{t("copy222")}</p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy196")}</h2>
        <div className="space-y-6 mb-16">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{t("copy223")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("copy224")}</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{t("copy225")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("copy226")}</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{t("copy227")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("copy228")}</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{t("copy229")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("copy230")}</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{t("copy231")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("copy232")}</p>
          </div>
        </div>

        <div className="bg-muted/40 rounded-xl p-8 text-center">
          <p className="text-lg text-foreground mb-6 leading-relaxed">{t("copy233")}</p>
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

export default Jacuzzis;
