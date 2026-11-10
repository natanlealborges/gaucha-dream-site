import { getBookingUrl } from "@/lib/attribution";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  GUIDES_MODIFIED,
  GuideLocale,
  GuideMeta,
  getRelatedGuides,
  guideLocales,
  guidePath,
  guideText,
} from "@/data/guides";
import { trackInitiateCheckout } from "@/lib/pixel";
import { useI18n } from "@/i18n/context";

const BASE_URL = "https://pousadagaucha.com";

export type GuideLink = { to: string; label: string };

export type GuideSection = {
  heading: string;
  level?: 2 | 3;
  paragraphs?: string[];
  /** Lista de itens com rótulo em destaque (ex.: praias, aeroportos, restaurantes). */
  items?: { title?: string; text: string }[];
  links?: GuideLink[];
  image?: { src?: string; alt: string };
};

export type GuideFaq = { q: string; a: string };

export type GuideContent = {
  intro: string; // "Resposta rápida"
  sections: GuideSection[];
  faqs?: GuideFaq[];
  ctaText?: string;
  heroImage?: { src?: string; alt: string };
};

type GuideLayoutProps = GuideContent & { guide: GuideMeta };

const UI = {
  pt: {
    home: "Início",
    index: "Guia de Bombinhas",
    quick: "Resposta rápida",
    updated: "Atualizado em novembro de 2026",
    faq: "Perguntas frequentes",
    others: "Outros guias",
    ctaTitle: "Quer viver isso de casa?",
    ctaText: "A Pousada Gaúcha fica pé na areia, de frente para a Praia de Bombinhas.",
    availability: "Ver disponibilidade",
    rooms: "Ver acomodações",
    beachfront: "Conheça a pousada pé na areia",
  },
  es: {
    home: "Inicio",
    index: "Guía de Bombinhas",
    quick: "Respuesta rápida",
    updated: "Actualizado en noviembre de 2026",
    faq: "Preguntas frecuentes",
    others: "Otras guías",
    ctaTitle: "Todo esto, a pasos de la posada",
    ctaText: "La Pousada Gaúcha está frente al mar, con acceso directo a la arena de la Praia de Bombinhas.",
    availability: "Ver disponibilidad",
    rooms: "Ver alojamientos",
    beachfront: "Conocer la posada frente al mar",
  },
} as const;

/** Escolhe o conteúdo do idioma atual (pt/es) e renderiza o layout. */
export const LocalizedGuide = ({ guide, content }: { guide: GuideMeta; content: Partial<Record<GuideLocale, GuideContent>> }) => {
  const { locale } = useI18n();
  const c = (locale === "es" ? content.es : content.pt) ?? content.pt ?? content.es!;
  return <GuideLayout guide={guide} {...c} />;
};

const GuideLayout = ({ guide, intro, sections, faqs, ctaText, heroImage }: GuideLayoutProps) => {
  const { locale: rawLocale } = useI18n();
  const locale: GuideLocale = rawLocale === "es" ? "es" : "pt";
  const ui = UI[locale];
  const text = guideText(guide, locale);
  const prefix = locale === "es" ? "/es" : "";
  const url = `${BASE_URL}${guidePath(guide.slug, locale)}`;
  const indexUrl = `${BASE_URL}${prefix}/guias`;
  const homeUrl = `${BASE_URL}${prefix || ""}/`.replace(/\/es\/$/, "/es");
  const related = getRelatedGuides(guide.slug, locale);
  const available = guideLocales(guide);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: text.h1,
    description: text.description,
    mainEntityOfPage: url,
    inLanguage: locale === "es" ? "es" : "pt-BR",
    datePublished: guide.datePublished,
    dateModified: GUIDES_MODIFIED,
    author: { "@type": "Organization", name: "Pousada Gaúcha" },
    publisher: { "@id": `${BASE_URL}/#lodging` },
    image: `${BASE_URL}/lovable-uploads/bdf75423-2928-485e-9c80-d580d5d99039.jpg`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: ui.home, item: homeUrl },
      { "@type": "ListItem", position: 2, name: ui.index, item: indexUrl },
      { "@type": "ListItem", position: 3, name: text.shortLabel, item: url },
    ],
  };

  const faqLd = faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        inLanguage: locale === "es" ? "es" : "pt-BR",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{text.title}</title>
        <meta name="description" content={text.description} />
        {!guide.published && <meta name="robots" content="noindex, nofollow" />}
        <link rel="canonical" href={url} />
        {available.includes("pt") && (
          <link rel="alternate" hrefLang="pt-BR" href={`${BASE_URL}${guidePath(guide.slug, "pt")}`} />
        )}
        {available.includes("es") && (
          <link rel="alternate" hrefLang="es" href={`${BASE_URL}${guidePath(guide.slug, "es")}`} />
        )}
        {available.includes("pt") && (
          <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${guidePath(guide.slug, "pt")}`} />
        )}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={text.title} />
        <meta property="og:description" content={text.description} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={text.title} />
        <meta name="twitter:description" content={text.description} />
        <script type="application/ld+json">{JSON.stringify(articleLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        {faqLd && <script type="application/ld+json">{JSON.stringify(faqLd)}</script>}
      </Helmet>

      <Navbar />

      <article className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to={prefix || "/"} className="hover:text-primary">{ui.home}</Link>
            <ChevronRight size={14} />
            <Link to={`${prefix}/guias`} className="hover:text-primary">{ui.index}</Link>
            <ChevronRight size={14} />
            <span className="text-foreground">{text.shortLabel}</span>
          </nav>

          <header className="mb-10">
            <p className="font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-primary">{ui.index}</p>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              {text.h1}
            </h1>
            <div className="border-l-4 border-primary bg-sand/50 rounded-r-xl p-6 mb-4">
              <p className="font-semibold text-sm tracking-[0.15em] uppercase mb-2 text-primary">{ui.quick}</p>
              <p className="text-lg text-foreground leading-relaxed">{intro}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              <time dateTime={GUIDES_MODIFIED}>{ui.updated}</time>
            </p>
          </header>

          {heroImage?.src && (
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              className="w-full aspect-[16/9] rounded-xl object-cover mb-10"
            />
          )}

          <div className="max-w-none">
            {sections.map((section, idx) => (
              <section key={idx} className="mb-10">
                {section.level === 3 ? (
                  <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-3">{section.heading}</h3>
                ) : (
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.image?.src && (
                  <img
                    src={section.image.src}
                    alt={section.image.alt}
                    loading="lazy"
                    className="w-full aspect-[16/9] rounded-xl object-cover my-6"
                  />
                )}
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
                ))}
                {section.items && (
                  <ul className="space-y-3 mb-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed">
                        {item.title && (
                          <h3 className="inline font-semibold text-foreground">{item.title}: </h3>
                        )}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                )}
                {section.links && (
                  <ul className="space-y-2">
                    {section.links.map((l) => (
                      <li key={l.to}>
                        <Link to={l.to} className="inline-flex items-center gap-2 text-primary hover:underline">
                          <ArrowRight size={16} />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {faqs && faqs.length > 0 && (
            <section className="mt-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">{ui.faq}</h2>
              <div className="space-y-6">
                {faqs.map((f) => (
                  <div key={f.q}>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{f.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="mt-12 p-8 md:p-12 bg-foreground text-primary-foreground rounded-xl text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{ui.ctaTitle}</h2>
            <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto leading-relaxed">{ctaText ?? ui.ctaText}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackInitiateCheckout}
                className="bg-green-500 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                {ui.availability}
              </a>
              <Link
                to={`${prefix}/acomodacoes`}
                className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                {ui.rooms}
              </Link>
            </div>
            <Link
              to={`${prefix}/pousada-pe-na-areia-bombinhas`}
              className="inline-flex items-center gap-2 mt-6 text-primary-foreground/80 hover:text-primary-foreground underline underline-offset-4"
            >
              {ui.beachfront} <ArrowRight size={14} />
            </Link>
          </section>

          {related.length > 0 && (
            <aside className="mt-12 p-8 bg-sand/50 rounded-xl">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">{ui.others}</h2>
              <ul className="space-y-3">
                {related.map((g) => (
                  <li key={g.slug}>
                    <Link
                      to={guidePath(g.slug, locale)}
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ArrowRight size={16} />
                      {guideText(g, locale).shortLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default GuideLayout;
