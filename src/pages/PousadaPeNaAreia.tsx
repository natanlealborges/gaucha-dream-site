import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle, Waves, Coffee, Umbrella, Eye, UtensilsCrossed, ThermometerSun, Car } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackInitiateCheckout } from "@/lib/pixel";

const BASE_URL = "https://pousadagaucha.com";
const URL = `${BASE_URL}/pousada-pe-na-areia-bombinhas`;
const WHATSAPP_URL = "http://wa.me/5547997910034";
const BOOKING_URL =
  "https://hbook.hsystem.com.br/Booking?companyId=5cae2795ab41d51dd869d73a&checkin=04/12/2019&checkout=08/12/2019&adults=1&children=0&_gl=1*1m36n9x*_gcl_au*MTkzNTI4MzE0Mi4xNzY2MzE3MTcy#_ga=2.158433650.936447759.1773250147-595639725.1766317175";

const TITLE = "Pousada pé na areia em Bombinhas · Beira-Mar · Pousada Gaúcha";
const DESCRIPTION =
  "Pousada Gaúcha: pousada beira-mar, pé na areia na Praia de Bombinhas. Acesso direto à areia, café da manhã à beira-mar, serviço de praia incluído e apartamentos com cozinha. Reserve direto.";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Pousada pé na areia em Bombinhas", item: URL },
  ],
};

const touristAttractionLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Pousada Gaúcha — pousada beira-mar, pé na areia em Bombinhas",
  description:
    "Pousada beira-mar no centro de Bombinhas, com acesso direto à areia da Praia de Bombinhas. Café da manhã à beira-mar, serviço de praia incluído e apartamentos com vista para o mar.",
  url: URL,
  image: `${BASE_URL}/lovable-uploads/bdf75423-2928-485e-9c80-d580d5d99039.jpg`,
  touristType: "Famílias e casais",
  isAccessibleForFree: false,
  publicAccess: true,
  containedInPlace: {
    "@type": "Beach",
    name: "Praia de Bombinhas",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Cascudo, 10-A - Beira Mar",
      addressLocality: "Bombinhas",
      addressRegion: "SC",
      postalCode: "88215-000",
      addressCountry: "BR",
    },
  },
};

const FEATURES = [
  { icon: Waves, text: "Acesso direto à areia da Praia de Bombinhas, sem atravessar rua" },
  { icon: Coffee, text: "Café da manhã servido à beira-mar das 7h30 às 10h, todo produzido na pousada" },
  { icon: Umbrella, text: "Serviço de praia com cadeiras e guarda-sóis já montados na areia, incluídos na diária" },
  { icon: Eye, text: "Apartamentos do Bloco Garden com vista direta para o mar (deck privativo ou sacada)" },
  { icon: UtensilsCrossed, text: "Restaurante à beira-mar de outubro a abril" },
  { icon: ThermometerSun, text: "Quatro jacuzzis climatizadas na cobertura com vista para o mar" },
  { icon: Car, text: "Estacionamento privativo gratuito — o carro fica guardado e você vai a pé para tudo" },
];

const PousadaPeNaAreia = () => (
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
      <script type="application/ld+json">{JSON.stringify(touristAttractionLd)}</script>
    </Helmet>

    <Navbar />

    <main className="pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Início</Link>
          <ChevronRight size={14} />
          <span className="text-foreground">Pousada pé na areia em Bombinhas</span>
        </nav>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Pousada beira-mar, pé na areia em Bombinhas
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          A Pousada Gaúcha é uma pousada beira-mar no centro de Bombinhas, com acesso direto à areia da Praia de Bombinhas. Da porta até a areia não se atravessa rua. É uma das poucas pousadas do centro de Bombinhas com o quarto literalmente de frente para o mar.
        </p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          O que significa ser pé na areia em Bombinhas
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Bombinhas tem dezenas de pousadas próximas à praia. Mas 'próximo à praia' e 'pé na areia' são coisas diferentes. Pé na areia significa que o acesso à areia é direto pelo próprio terreno da pousada — sem atravessar rua, sem estacionamento no caminho, sem corredor entre prédios.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Na Pousada Gaúcha, o café da manhã é servido no deck à beira-mar. O serviço de praia monta as cadeiras e guarda-sóis na areia antes de você descer. Os apartamentos do Bloco Garden têm deck ou sacada com vista direta para a Praia de Bombinhas.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-16">
          A localização é o item mais bem avaliado da pousada no TripAdvisor, com nota 5,0 de 5,0 — a nota máxima.
        </p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          O que a Pousada Gaúcha entrega à beira-mar
        </h2>
        <ul className="space-y-4 mb-16">
          {FEATURES.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-3">
              <Icon className="text-primary shrink-0 mt-1" size={20} />
              <span className="text-muted-foreground leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          Por que a localização beira-mar muda a viagem
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Quem já ficou em pousada 'próxima à praia' sabe a diferença. Você acorda, decide ir para a praia, e ainda precisa juntar bolsa, protetor solar, boia, carregar tudo por dois quarteirões e descobrir que os guarda-sóis alugáveis estão ocupados.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-16">
          Aqui é diferente. Você desce, a estrutura está montada, e volta quando quiser. Em dia de chuva rápida, volta para o quarto em trinta segundos. Em dia de sol forte no meio da tarde, faz a soneca e volta. A praia fica a metros, não a quarteirões.
        </p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          A Praia de Bombinhas, a melhor para famílias do município
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A Praia de Bombinhas, em frente à pousada, é reconhecida como a melhor praia para famílias de todo o município. Mar calmo, água clara e ondas pequenas — condições ideais para crianças. É diferente de Quatro Ilhas ou Mariscal, que têm ondas maiores.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-16">
          O fato de a pousada estar exatamente em frente a essa praia, e não a outra, é parte do posicionamento. Não é qualquer beira-mar em Bombinhas — é o beira-mar da praia mais indicada para quem viaja com criança.
        </p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          Perguntas diretas sobre a localização
        </h2>
        <div className="space-y-6 mb-16">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              A Pousada Gaúcha é realmente pé na areia?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Sim. O acesso da Pousada Gaúcha à areia da Praia de Bombinhas é direto, sem atravessar rua. O café da manhã é servido no deck à beira-mar e o serviço de praia monta a estrutura na areia antes de você chegar.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Qual a distância da Pousada Gaúcha até a areia?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A distância do térreo da pousada até a areia é de metros, atravessando o jardim da pousada. Não há rua entre o acesso e o mar.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Qual é a praia em frente à Pousada Gaúcha?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A Praia de Bombinhas, no centro da cidade. É considerada a melhor praia para famílias do município, com mar calmo e água clara.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Todos os quartos têm vista para o mar?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Não. Os 6 apartamentos do Bloco Garden Frente Mar (Deck e Superior) têm vista direta para a Praia de Bombinhas. Os demais têm acesso à praia, mas a vista do quarto varia. Veja a página de acomodações para a diferença entre cada categoria.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              O que é incluído no serviço de praia?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Cadeiras e guarda-sóis já montados na areia, todos os dias da estadia, sem custo adicional. Um funcionário cuida da estrutura durante o dia. Consumo no bar e no restaurante é cobrado à parte.
            </p>
          </div>
        </div>

        <div className="bg-muted/40 rounded-xl p-8 text-center">
          <p className="text-lg text-foreground mb-6 leading-relaxed">
            Reserve pelo site e garanta o melhor valor. Se quiser saber qual apartamento fica mais de frente para o mar, fale pelo WhatsApp antes de reservar.
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

export default PousadaPeNaAreia;
