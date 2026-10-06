import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackInitiateCheckout } from "@/lib/pixel";

const BASE_URL = "https://pousadagaucha.com";
const URL = `${BASE_URL}/jacuzzis`;
const WHATSAPP_URL = "http://wa.me/5547997910034";
const BOOKING_URL =
  "https://hbook.hsystem.com.br/Booking?companyId=5cae2795ab41d51dd869d73a&checkin=04/12/2019&checkout=08/12/2019&adults=1&children=0&_gl=1*1m36n9x*_gcl_au*MTkzNTI4MzE0Mi4xNzY2MzE3MTcy#_ga=2.158433650.936447759.1773250147-595639725.1766317175";

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

const Jacuzzis = () => (
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
          <span className="text-foreground">Jacuzzis</span>
        </nav>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Pousada com jacuzzi em Bombinhas — quatro na cobertura, com vista para o mar
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          A Pousada Gaúcha tem quatro jacuzzis climatizadas na cobertura, cada uma com temperatura diferente, com vista para a Praia de Bombinhas e para a mata. O uso é por agendamento e sem custo adicional para hóspedes. Funcionam o ano inteiro.
        </p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          O que torna as jacuzzis da Pousada Gaúcha diferentes
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Bombinhas tem dezenas de pousadas. Poucas têm jacuzzi. A Pousada Gaúcha é a única no centro da cidade com quatro unidades climatizadas na cobertura — não numa área de lazer no térreo, mas no andar mais alto, com vista panorâmica para o mar.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-16">
          A Pousada Gaúcha não tem piscina. Preferimos deixar isso claro antes de qualquer reserva. O que temos são essas quatro jacuzzis na cobertura: não são para nadar, são para descansar com vista.
        </p>

        <div className="bg-muted/40 rounded-xl p-6 mb-16">
          <p className="text-lg italic text-foreground leading-relaxed mb-3">
            "4 ofurôs quentíssimos na cobertura com vista para o mar e floresta."
          </p>
          <p className="text-sm text-muted-foreground">Loivaeildo · TripAdvisor · julho de 2023</p>
        </div>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          Por que o inverno é a melhor época
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-16">
          Em janeiro, a jacuzzi compete com o mar, a praia e o sol. Em julho, ela não tem concorrência. O hóspede chega da trilha ou do passeio de tarde, a temperatura lá fora caiu, e a jacuzzi climatizada com vista para o mar vazio é uma combinação que aparece repetidamente nas avaliações de quem escolhe a baixa temporada.
        </p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          Como usar: agendamento e horários
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          O uso é por agendamento, feito na recepção da Pousada Gaúcha ou pelo WhatsApp. Não há custo adicional para hóspedes.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-16">
          Recomendação dos próprios hóspedes: agendar com algumas horas de antecedência, especialmente para o fim de tarde, que é o horário mais disputado.
        </p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          Um ponto importante sobre temperatura e manutenção
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          As jacuzzis aparecem em 26 avaliações no TripAdvisor. A maioria é elogio. Algumas citam temperatura irregular — e preferimos abordar isso diretamente.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-16">
          Temperatura de jacuzzi é sensível a condições externas (vento, tempo de uso antes do seu horário, clima do dia). Se na chegada não estiver como esperado, avise a recepção: a equipe ajusta ou realoca o horário. Não aguarde em silêncio.
        </p>

        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          Perguntas diretas
        </h2>
        <div className="space-y-6 mb-16">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              A Pousada Gaúcha tem piscina?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Não. Tem quatro jacuzzis climatizadas na cobertura, com temperaturas diferentes e vista para o mar. O uso é por agendamento e sem custo adicional. O mar da Praia de Bombinhas fica a poucos passos, com serviço de praia incluído na diária.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              As jacuzzis são para todos os hóspedes?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Sim, para todos os hóspedes, de todos os blocos. O uso é por agendamento na recepção, sem custo adicional.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Funcionam no inverno?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Sim, o ano inteiro. No inverno, com temperatura externa mais baixa, a jacuzzi aquecida com vista para o mar vazio é um dos programas mais elogiados pelos hóspedes da baixa temporada.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Como agendar?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Na recepção da Pousada Gaúcha presencialmente ou pelo WhatsApp (47) 99791-0034. Agende com antecedência para garantir disponibilidade no horário desejado.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Qual a diferença entre as quatro jacuzzis?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Cada uma tem uma temperatura diferente, o que permite opções para quem prefere mais quente ou mais morno. Pergunte na recepção qual está disponível no seu horário.
            </p>
          </div>
        </div>

        <div className="bg-muted/40 rounded-xl p-8 text-center">
          <p className="text-lg text-foreground mb-6 leading-relaxed">
            Reserve pelo site e garanta o melhor valor. As jacuzzis da cobertura estão disponíveis para todos os hóspedes, sem custo adicional.
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

export default Jacuzzis;
