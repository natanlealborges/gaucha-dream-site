import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackInitiateCheckout } from "@/lib/pixel";

const BASE_URL = "https://pousadagaucha.com";
const URL = `${BASE_URL}/servico-de-praia`;
const WHATSAPP_URL = "http://wa.me/5547997910034";
const BOOKING_URL =
  "https://hbook.hsystem.com.br/Booking?companyId=5cae2795ab41d51dd869d73a&checkin=04/12/2019&checkout=08/12/2019&adults=1&children=0&_gl=1*1m36n9x*_gcl_au*MTkzNTI4MzE0Mi4xNzY2MzE3MTcy#_ga=2.158433650.936447759.1773250147-595639725.1766317175";

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

const ServicoDePraia = () => (
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
          <span className="text-foreground">Serviço de praia</span>
        </nav>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Serviço de praia da Pousada Gaúcha: cadeira e guarda-sol incluídos na areia
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          Quando você desce para a praia, sua cadeira e seu guarda-sol já estão montados na areia. Não há fila, não há aluguel, não há taxa — está incluído na diária para todos os hóspedes, todos os dias da estadia. Um funcionário cuida da estrutura durante o dia inteiro.
        </p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          Como funciona na prática
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A estrutura fica na faixa de areia em frente à Pousada Gaúcha — a mesma que você acessa diretamente pela porta, sem atravessar rua. As cadeiras e guarda-sóis são montados cedo pela manhã, antes dos hóspedes descerem.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Um funcionário permanece na praia durante o dia: ajusta o guarda-sol conforme o sol vira, atende pedidos e remonta tudo quando você volta do almoço ou de um passeio.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-16">
          O restaurante à beira-mar atende de outubro a abril. Nos demais meses o serviço de cadeiras e guarda-sóis continua funcionando normalmente.
        </p>

        <div className="bg-muted/40 rounded-xl p-6 mb-16">
          <p className="text-lg italic text-foreground leading-relaxed mb-3">
            "A cereja do bolo foi o fato de já ter o guarda-sol e cadeiras organizadas na areia."
          </p>
          <p className="text-sm text-muted-foreground">Hóspede · TripAdvisor · outubro de 2024</p>
        </div>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          Por que aparece em quase metade das avaliações
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          O serviço de praia é o terceiro atributo mais citado espontaneamente nas avaliações públicas da Pousada Gaúcha no TripAdvisor — atrás apenas do atendimento da equipe e do café da manhã, e na frente de jacuzzi, espaço kids, academia e cozinha somados.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-16">
          A razão é simples: é um serviço que a maioria dos hóspedes não encontrou em nenhum outro lugar. Pousadas próximas à praia existem aos dezenas em Bombinhas. Pousadas onde alguém já montou sua estrutura e cuida dela durante o dia são muito mais raras.
        </p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          Quem é o responsável pelo serviço de praia
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Luiz — o Sr. Luiz, como os hóspedes costumam chamar — é citado nominalmente em avaliações do TripAdvisor desde 2019, inclusive em comentários que apontam alguma crítica a outros aspectos da pousada. São mais de 18 menções nominais ao longo de sete anos consecutivos.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-16">
          Isso é incomum em hotelaria. E é a razão pela qual o serviço de praia da Pousada Gaúcha não é apenas uma comodidade — é um diferencial com nome próprio.
        </p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          Perguntas diretas
        </h2>
        <div className="space-y-6 mb-16">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              O serviço de praia é pago?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Não. Cadeiras e guarda-sóis estão incluídos na diária para todos os hóspedes da Pousada Gaúcha, já montados na areia, com funcionário cuidando durante o dia. Consumo no bar e restaurante é cobrado à parte.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Funciona na baixa temporada?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Sim. Funciona o ano inteiro. O restaurante à beira-mar fecha de maio a setembro, mas o serviço de cadeiras e guarda-sóis continua.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              A areia em frente à pousada é boa?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A Praia de Bombinhas, em frente à Pousada Gaúcha, é reconhecida como a melhor praia para famílias do município, com mar calmo, água clara e ondas pequenas.
            </p>
          </div>
        </div>

        <div className="bg-muted/40 rounded-xl p-8 text-center">
          <p className="text-lg text-foreground mb-6 leading-relaxed">
            Reserve pelo site e garanta o melhor valor. O serviço de praia está incluído em todas as diárias, sem custo adicional.
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

export default ServicoDePraia;
