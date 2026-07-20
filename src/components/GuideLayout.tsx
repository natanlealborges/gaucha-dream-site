import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GuideMeta, getRelatedGuides } from "@/data/guides";

const BASE_URL = "https://pousadagaucha.com";
const BOOKING_URL =
  "https://hbook.hsystem.com.br/Booking?companyId=5cae2795ab41d51dd869d73a&checkin=04/12/2019&checkout=08/12/2019&adults=1&children=0&_gl=1*1m36n9x*_gcl_au*MTkzNTI4MzE0Mi4xNzY2MzE3MTcy#_ga=2.158433650.936447759.1773250147-595639725.1766317175";

export type GuideSection = {
  heading: string;
  level?: 2 | 3;
  paragraphs?: string[];
  image?: { alt: string };
};

type GuideLayoutProps = {
  guide: GuideMeta;
  intro: string;
  sections: GuideSection[];
  heroImageAlt: string;
};

const GuideLayout = ({ guide, intro, sections, heroImageAlt }: GuideLayoutProps) => {
  const url = `${BASE_URL}/guias/${guide.slug}`;
  const related = getRelatedGuides(guide.slug, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.h1,
    description: guide.description,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Pousada Gaúcha" },
    publisher: {
      "@type": "Organization",
      name: "Pousada Gaúcha",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/lovable-uploads/bdf75423-2928-485e-9c80-d580d5d99039.jpg`,
      },
    },
    image: `${BASE_URL}/lovable-uploads/bdf75423-2928-485e-9c80-d580d5d99039.jpg`,
    inLanguage: "pt-BR",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Guia de Bombinhas", item: `${BASE_URL}/guias` },
      { "@type": "ListItem", position: 3, name: guide.shortLabel, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{guide.title}</title>
        <meta name="description" content={guide.description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={guide.title} />
        <meta property="og:description" content={guide.description} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={guide.title} />
        <meta name="twitter:description" content={guide.description} />
        <script type="application/ld+json">{JSON.stringify(articleLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <Navbar />

      <article className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb visível */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Início</Link>
            <ChevronRight size={14} />
            <Link to="/guias" className="hover:text-primary">Guia de Bombinhas</Link>
            <ChevronRight size={14} />
            <span className="text-foreground">{guide.shortLabel}</span>
          </nav>

          <header className="mb-10">
            <p className="font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-primary">
              Guia de Bombinhas
            </p>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              {guide.h1}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{intro}</p>
          </header>

          {/* Espaço de imagem hero — placeholder editorial com alt */}
          <figure
            role="img"
            aria-label={heroImageAlt}
            className="w-full aspect-[16/9] rounded-xl bg-sand/60 border border-border mb-10 flex items-center justify-center text-muted-foreground text-sm"
          >
            [ imagem: {heroImageAlt} ]
          </figure>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary">
            {sections.map((section, idx) => (
              <section key={idx} className="mb-10">
                {section.level === 3 ? (
                  <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-3">
                    {section.heading}
                  </h3>
                ) : (
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.image && (
                  <figure
                    role="img"
                    aria-label={section.image.alt}
                    className="w-full aspect-[16/9] rounded-xl bg-sand/60 border border-border my-6 flex items-center justify-center text-muted-foreground text-sm"
                  >
                    [ imagem: {section.image.alt} ]
                  </figure>
                )}
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Cross-links internos */}
          <aside className="mt-16 p-8 bg-sand/50 rounded-xl">
            <h2 className="font-display text-xl font-bold text-foreground mb-4">
              Continue explorando Bombinhas
            </h2>
            <ul className="space-y-3">
              {related.map((g) => (
                <li key={g.slug}>
                  <Link
                    to={`/guias/${g.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <ArrowRight size={16} />
                    {g.shortLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* CTA-ponte */}
          <section className="mt-12 p-8 md:p-12 bg-foreground text-primary-foreground rounded-xl text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Quer viver isso de casa?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto leading-relaxed">
              A gente fica pé na areia, do lado de tudo que você acabou de ler. Se quiser,
              a gente separa uma jacuzzi com vista pra você.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Reservar na Pousada Gaúcha
              </a>
              <Link
                to="/"
                className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                Conhecer a pousada
              </Link>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default GuideLayout;
