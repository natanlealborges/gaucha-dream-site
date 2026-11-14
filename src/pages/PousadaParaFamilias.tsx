import { useI18n } from "@/i18n/context";
import { families } from "@/i18n/families";
import { SITE_URL } from "@/i18n/config";
import { LocaleHelmet as Helmet } from "@/i18n/LocaleHelmet";
import { getBookingUrl, getWhatsAppUrl } from "@/lib/attribution";
import { trackInitiateCheckout } from "@/lib/pixel";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import beach from "@/assets/hero-beach.jpg";

export const FAMILY_PATH = "/pousada-para-familias-em-bombinhas";
const URL = `${SITE_URL}${FAMILY_PATH}`;
const FAQ_KEYS = [
  ["familyQ1", "familyA1"], ["familyQ2", "familyA2"],
  ["familyQ3", "familyA3"], ["familyQ4", "familyA4"],
  ["familyQ5", "familyA5"], ["familyQ6", "familyA6"],
] as const;
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: families.pt.familyLabel, item: URL },
  ],
};
export const familyFaqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_KEYS.map(([question, answer]) => ({
    "@type": "Question",
    name: families.pt[question],
    acceptedAnswer: { "@type": "Answer", text: families.pt[answer] },
  })),
};

const PousadaParaFamilias = () => {
  const { t, locale, path } = useI18n();
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{families.pt.familyTitle}</title>
        <meta name="description" content={families.pt.familyDescription} />
        <link rel="canonical" href={URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={families.pt.familyTitle} />
        <meta property="og:description" content={families.pt.familyDescription} />
        <meta property="og:url" content={URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={families.pt.familyTitle} />
        <meta name="twitter:description" content={families.pt.familyDescription} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        <script type="application/ld+json">{JSON.stringify(familyFaqLd)}</script>
      </Helmet>
      <Navbar />
      <main className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <nav aria-label={t("copy596")} className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to={path("/")} className="hover:text-primary">{t("copy000")}</Link>
            <ChevronRight size={14} className="shrink-0" />
            <span className="text-foreground">{t("familyLabel")}</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">{t("familyH1")}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">{t("familyDescription")}</p>

          <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("familyBeachHeading")}</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{t("familyBeach1")}</p>
          <p className="text-muted-foreground leading-relaxed mb-4">{t("familyBeach2")}</p>
          <p className="text-muted-foreground leading-relaxed mb-6">{t("familyBeach3")}</p>
          <img src={beach} alt={t("familyBeach1")} className="w-full aspect-video object-cover rounded-xl mb-16" loading="lazy" />

          <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("familyRoomsHeading")}</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{t("familyRoomsIntro")}</p>
          {([
            ["/acomodacoes/bloco-gaucha", "Bloco Gaúcha", "familyGaucha"],
            ["/acomodacoes/garden", "Bloco Garden", "familyGarden"],
            ["/acomodacoes/bloco-praia", "Bloco Praia", "familyPraia"],
          ] as const).map(([href, name, key], index) => (
            <div key={href} className={index === 2 ? "mb-16" : "mb-6"}>
              <Link to={path(href)} className="font-display text-lg font-bold text-primary hover:underline">{name}</Link>
              <p className="text-muted-foreground leading-relaxed mt-2">{t(key)}</p>
            </div>
          ))}

          <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("familyActivitiesHeading")}</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{t("familyActivities1")}</p>
          <p className="text-muted-foreground leading-relaxed mb-16">{t("familyActivities2")}</p>

          <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("familyBreakfastHeading")}</h2>
          <p className="text-muted-foreground leading-relaxed mb-16">{t("familyBreakfast")}</p>

          <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("familyPracticalHeading")}</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{t("familyParking")}</p>
          <p className="text-muted-foreground leading-relaxed mb-4">{t("familyWifi")}</p>
          <p className="text-muted-foreground leading-relaxed mb-16">{t("familyTransfer")}</p>

          <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("copy196")}</h2>
          <div className="space-y-6 mb-16">
            {FAQ_KEYS.map(([question, answer]) => (
              <div key={question}>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{t(question)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(answer)}</p>
              </div>
            ))}
          </div>
          <div className="bg-muted/40 rounded-xl p-8 text-center">
            <p className="text-lg text-foreground mb-6 leading-relaxed">{t("familyCta")}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="h-auto bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 hover:bg-accent">
                <a href={getBookingUrl()} target="_blank" rel="noopener noreferrer" onClick={trackInitiateCheckout}>{t("copy007")}</a>
              </Button>
              <Button asChild variant="outline" className="h-auto bg-transparent border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-foreground/5">
                <a href={getWhatsAppUrl(locale)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />{t("copy178")}</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default PousadaParaFamilias;