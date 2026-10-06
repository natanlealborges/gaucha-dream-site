import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackInitiateCheckout } from "@/lib/pixel";

const BASE_URL = "https://pousadagaucha.com";
const URL = `${BASE_URL}/cafe-da-manha`;
const WHATSAPP_URL = "http://wa.me/5547997910034";
const BOOKING_URL =
  "https://hbook.hsystem.com.br/Booking?companyId=5cae2795ab41d51dd869d73a&checkin=04/12/2019&checkout=08/12/2019&adults=1&children=0&_gl=1*1m36n9x*_gcl_au*MTkzNTI4MzE0Mi4xNzY2MzE3MTcy#_ga=2.158433650.936447759.1773250147-595639725.1766317175";

const TITLE = "Café da manhã à beira-mar em Bombinhas · Pousada Gaúcha";
const DESCRIPTION =
  "Café da manhã servido no deck à beira-mar da Pousada Gaúcha, das 7h30 às 10h, com pães, bolos e tortas produzidos na própria pousada. Incluído na diária todos os dias.";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Café da manhã", item: URL },
  ],
};

const CafeDaManha = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href={URL} />
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
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Início</Link>
          <ChevronRight size={14} />
          <span className="text-foreground">Café da manhã</span>
        </nav>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Café da manhã à beira-mar em Bombinhas — Pousada Gaúcha
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          O café da manhã da Pousada Gaúcha é servido no deck à beira-mar, de frente para a Praia de Bombinhas, das 7h30 às 10h. Está incluído na diária para todos os hóspedes, em todos os dias da estadia. Pães, bolos e tortas são produzidos dentro da própria pousada.
        </p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          O que faz esse café diferente
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Em Bombinhas, a maioria das pousadas serve café da manhã. Pouquíssimas servem com vista para o mar. E dentro desse grupo, a diferença que os hóspedes da Pousada Gaúcha mais mencionam não é o que está na mesa — é onde a mesa está.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          O deck fica literalmente à beira-mar da Praia de Bombinhas. Você toma café enquanto vê o estado do mar, decide se vai cedo ou mais tarde, e em dias de frio as portas de vidro são fechadas e o café é servido com a mesma vista, do lado de dentro.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-16">
          É o segundo atributo mais citado espontaneamente nas avaliações públicas da pousada no TripAdvisor, aparecendo em quase 70% dos comentários com texto integral — atrás apenas do atendimento da equipe.
        </p>

        <div className="bg-muted/40 rounded-xl p-6 mb-16">
          <p className="text-lg italic text-foreground leading-relaxed mb-3">
            "Café no deck, tudo feito na pousada, fresquinho, variedade enorme."
          </p>
          <p className="text-sm text-muted-foreground">Hóspede · TripAdvisor · avaliações recentes</p>
        </div>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          O que está no buffet
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          O café da manhã da Pousada Gaúcha é produzido internamente — não é reabastecimento de fornecedor externo. Pães, bolos, tortas e quitutes são preparados na cozinha da pousada antes de cada manhã.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          O buffet inclui opções para quem evita lactose, quem prefere baixo carboidrato e quem é vegetariano. Para quem tem restrição, a recomendação é avisar na reserva para que a equipe se organize.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-16">
          Uma limitação que preferimos informar com antecedência: como tudo é preparado na mesma cozinha, não conseguimos garantir ausência de glúten. Quem tem doença celíaca deve considerar isso. Os apartamentos têm cozinha equipada e há mercado a poucos passos da pousada.
        </p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          Horário e funcionamento
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Das 7h30 às 10h, todos os dias, o ano inteiro — inclusive nos meses em que o restaurante à beira-mar está fechado (maio a setembro). O café não muda de qualidade nem de localização fora da alta temporada.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-16">
          Quem chega à pousada antes das 15h (horário de check-in) pode tomar café da manhã por valor adicional, cobrado à parte. Pergunte na reserva.
        </p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          Perguntas diretas sobre o café da manhã
        </h2>
        <div className="space-y-6 mb-16">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              O café da manhã está incluído na diária?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Sim, para todos os hóspedes, em todos os dias da estadia na Pousada Gaúcha, sem custo adicional.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Que horas é o café da manhã?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Das 7h30 às 10h, servido no deck à beira-mar da Pousada Gaúcha, de frente para a Praia de Bombinhas.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              O café da manhã funciona no inverno?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Sim. O café da manhã da Pousada Gaúcha funciona o ano inteiro, com o mesmo horário e a mesma qualidade. O restaurante à beira-mar é sazonal (outubro a abril), mas o café não para.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              É possível tomar café antes das 7h30?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              O café começa às 7h30. Para quem acorda antes e quer algo, os apartamentos têm cozinha equipada.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Vocês atendem restrições alimentares?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Em parte. O buffet tem opções para quem evita lactose, prefere baixo carboidrato ou é vegetariano. Não conseguimos garantir ausência de glúten porque tudo é produzido na mesma cozinha. Avise na reserva e a equipe faz o que for possível.
            </p>
          </div>
        </div>

        <div className="bg-muted/40 rounded-xl p-8 text-center">
          <p className="text-lg text-foreground mb-6 leading-relaxed">
            Reserve pelo site e garanta o melhor valor. O café da manhã à beira-mar está incluído em todas as diárias.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackInitiateCheckout}
              className="inline-flex items-center justify-center bg-green-500 text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              RESERVE JÁ
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-foreground/5 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp (47) 99791-0034
            </a>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

export default CafeDaManha;
