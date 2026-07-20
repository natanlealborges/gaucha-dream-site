import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { guides } from "@/data/guides";

const BASE_URL = "https://pousadagaucha.com";

const GuiasIndex = () => {
  const url = `${BASE_URL}/guias`;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Guia de Bombinhas", item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Guia de Bombinhas · Pousada Gaúcha</title>
        <meta
          name="description"
          content="Guias honestos sobre Bombinhas escritos por quem mora aqui: mergulho, inverno, trilhas, dias de chuva e viagem com crianças."
        />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Guia de Bombinhas · Pousada Gaúcha" />
        <meta property="og:url" content={url} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Início</Link>
            <ChevronRight size={14} />
            <span className="text-foreground">Guia de Bombinhas</span>
          </nav>

          <header className="mb-12">
            <p className="font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-primary">
              Guia de Bombinhas
            </p>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Bombinhas contada por quem mora aqui
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A gente recebe hóspede há 26 anos e passa o dia respondendo as mesmas perguntas
              — sobre onde mergulhar, o que fazer na chuva, se vale vir no inverno. Resolvemos
              escrever tudo aqui.
            </p>
          </header>

          <ul className="grid md:grid-cols-2 gap-6">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link
                  to={`/guias/${g.slug}`}
                  className="block p-6 bg-sand/50 rounded-xl hover:bg-sand transition-colors h-full"
                >
                  <h2 className="font-display text-xl font-bold text-foreground mb-2">
                    {g.shortLabel}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{g.hook}</p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                    Ler o guia <ArrowRight size={14} />
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
