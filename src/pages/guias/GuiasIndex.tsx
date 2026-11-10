import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { guidePath, guidesFor, guideText } from "@/data/guides";
import { useI18n } from "@/i18n/context";

const BASE_URL = "https://pousadagaucha.com";

const UI = {
  pt: {
    title: "Guia de Bombinhas · Pousada Gaúcha",
    description:
      "Guias sobre Bombinhas escritos por quem mora aqui: praias, como chegar, quando ir, o que fazer, onde comer, inverno, trilhas e viagem com crianças.",
    home: "Início",
    label: "Guia de Bombinhas",
    h1: "Bombinhas contada por quem mora aqui",
    lead: "A gente recebe hóspede há 26 anos e passa o dia respondendo as mesmas perguntas — sobre quais praias escolher, como chegar, se vale vir no inverno. Resolvemos escrever tudo aqui.",
    read: "Ler o guia",
    featured: "Destaque",
  },
  es: {
    title: "Guía de Bombinhas · Pousada Gaúcha",
    description:
      "Guías sobre Bombinhas escritas por quienes viven acá: playas, cómo llegar desde Argentina, Paraguay y Uruguay, cuándo ir, qué hacer y dónde comer.",
    home: "Inicio",
    label: "Guía de Bombinhas",
    h1: "Bombinhas contada por quienes viven acá",
    lead: "Recibimos huéspedes hace 26 años y todos los días respondemos las mismas preguntas: qué playas elegir, cómo llegar, si vale la pena venir en invierno. Decidimos escribirlo todo acá.",
    read: "Leer la guía",
    featured: "Destacado",
  },
} as const;

const GuiasIndex = () => {
  const { locale: raw } = useI18n();
  const locale = raw === "es" ? "es" : "pt";
  const ui = UI[locale];
  const prefix = locale === "es" ? "/es" : "";
  const url = `${BASE_URL}${prefix}/guias`;
  const list = guidesFor(locale);
  const featured = list.filter((g) => g.featured);
  const rest = list.filter((g) => !g.featured);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: ui.home, item: `${BASE_URL}${prefix || "/"}` },
      { "@type": "ListItem", position: 2, name: ui.label, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{ui.title}</title>
        <meta name="description" content={ui.description} />
        <link rel="canonical" href={url} />
        <link rel="alternate" hrefLang="pt-BR" href={`${BASE_URL}/guias`} />
        <link rel="alternate" hrefLang="es" href={`${BASE_URL}/es/guias`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/guias`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ui.title} />
        <meta property="og:description" content={ui.description} />
        <meta property="og:url" content={url} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to={prefix || "/"} className="hover:text-primary">{ui.home}</Link>
            <ChevronRight size={14} />
            <span className="text-foreground">{ui.label}</span>
          </nav>

          <header className="mb-12">
            <p className="font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-primary">{ui.label}</p>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">{ui.h1}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{ui.lead}</p>
          </header>

          {featured.map((g) => (
            <Link
              key={g.slug}
              to={guidePath(g.slug, locale)}
              className="block p-8 mb-6 rounded-xl border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <p className="font-semibold text-xs tracking-[0.2em] uppercase mb-2 text-primary">{ui.featured}</p>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">{guideText(g, locale).h1}</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">{guideText(g, locale).hook}</p>
              <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                {ui.read} <ArrowRight size={14} />
              </span>
            </Link>
          ))}

          <ul className="grid md:grid-cols-2 gap-6">
            {rest.map((g) => (
              <li key={g.slug}>
                <Link
                  to={guidePath(g.slug, locale)}
                  className="block p-6 bg-sand/50 rounded-xl hover:bg-sand transition-colors h-full"
                >
                  <h2 className="font-display text-xl font-bold text-foreground mb-2">{guideText(g, locale).shortLabel}</h2>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{guideText(g, locale).hook}</p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                    {ui.read} <ArrowRight size={14} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GuiasIndex;
