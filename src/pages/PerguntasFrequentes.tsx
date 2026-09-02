import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackInitiateCheckout } from "@/lib/pixel";

const BASE_URL = "https://pousadagaucha.com";
const URL = `${BASE_URL}/perguntas-frequentes`;
const BOOKING_URL =
  "https://hbook.hsystem.com.br/Booking?companyId=5cae2795ab41d51dd869d73a&checkin=04/12/2019&checkout=08/12/2019&adults=1&children=0&_gl=1*1m36n9x*_gcl_au*MTkzNTI4MzE0Mi4xNzY2MzE3MTcy#_ga=2.158433650.936447759.1773250147-595639725.1766317175";

type QA = { question: string; answer: string[] };
type Category = { heading: string; items: QA[] };

const CATEGORIES: Category[] = [
  {
    heading: "Chegada e saída",
    items: [
      {
        question: "Posso chegar antes das 15h?",
        answer: [
          "Pode. O apartamento fica pronto às 15h, mas você não precisa esperar do lado de fora. Chegando de manhã, você deixa a bagagem conosco, usa o serviço de praia com cadeira e guarda-sol e aproveita a estrutura da Pousada Gaúcha. Quando o quarto libera, a gente avisa.",
          "A gente chama isso de Chegada Livre, e existe por um motivo prático: boa parte dos nossos hóspedes vem dirigindo de Curitiba, Porto Alegre ou São Paulo e chega pela manhã. Não faz sentido perder o primeiro dia de férias sentado no carro.",
          "O café da manhã do dia da chegada não está incluído, porque a diária começa às 15h. Se quiser tomar conosco, é opcional e cobrado à parte. Pergunte o valor na hora da reserva, para você já chegar sabendo.",
          "O que não conseguimos garantir é o apartamento antes das 15h, porque a saída do hóspede anterior é ao meio-dia e a arrumação leva tempo. Se estiver livre antes, liberamos.",
        ],
      },
      {
        question: "O check-out é meio-dia. Posso sair mais tarde?",
        answer: [
          "O apartamento precisa ser desocupado ao meio-dia. Até as 17h, quando há disponibilidade, cobramos meia diária. Combine na recepção na véspera, porque depende da ocupação do dia.",
        ],
      },
      {
        question: "Que horas é o check-in e o check-out?",
        answer: ["Check-in a partir das 15h. Check-out até as 12h."],
      },
    ],
  },
  {
    heading: "Como chegar",
    items: [
      {
        question: "Como chegar em Bombinhas vindo de Curitiba?",
        answer: [
          "São cerca de 250 km, pela BR-101 no sentido norte-sul. Depois de passar Itapema, no km 155, você pega o trevo de acesso a Porto Belo e Bombinhas, entra na SC-412 e segue mais 10 km até a península.",
          "Fora da alta temporada, a viagem costuma levar em torno de três horas e meia. Em janeiro, o último trecho é o que mais atrasa, porque o acesso à península é único. Quem sai de madrugada chega antes do movimento, e por isso a nossa Chegada Livre existe.",
        ],
      },
      {
        question: "Como chegar em Bombinhas vindo de Porto Alegre?",
        answer: [
          "São cerca de 510 km, pela BR-101 no sentido sul-norte. Depois do pedágio de Tijucas, o acesso a Porto Belo e Bombinhas vem logo em seguida, pela marginal. Dali são mais 10 km pela SC-412 até chegar.",
          "Fora da alta temporada, a viagem costuma levar em torno de seis a sete horas. É a origem mais comum dos nossos hóspedes, e a maioria sai de madrugada e chega pela manhã.",
        ],
      },
      {
        question: "Qual aeroporto usar para ir a Bombinhas?",
        answer: [
          "São dois. O Aeroporto Internacional de Navegantes é o mais próximo, a cerca de 60 km. O Aeroporto Internacional Hercílio Luz, em Florianópolis, fica a cerca de 80 km, mas costuma ter mais voos e mais opções de horário.",
          "De qualquer um dos dois, o trajeto de carro até Bombinhas leva em média uma hora e meia, dependendo do trânsito. Do aeroporto até aqui, as opções são carro alugado, táxi, aplicativo ou transfer particular.",
        ],
      },
      {
        question: "A pousada faz transfer do aeroporto?",
        answer: [
          "Fazemos, através de operadoras parceiras. O transfer é pago e precisa ser combinado com antecedência.",
          "Avise o horário do seu voo quando reservar que a gente organiza. Sai mais tranquilo do que resolver na hora do desembarque, principalmente na alta temporada.",
        ],
      },
      {
        question: "Dá para chegar em Bombinhas de ônibus?",
        answer: [
          "Dá, com uma ressalva: Bombinhas não tem terminal rodoviário. O desembarque acontece na Avenida Leão Marinho.",
          "O caminho mais comum é vir de ônibus até Balneário Camboriú, Itajaí, Itapema ou Porto Belo e, de lá, pegar a Auto Viação Praiana, que faz o trajeto até Bombinhas de hora em hora. Na alta temporada, algumas empresas operam linhas diretas para Bombinhas saindo de Porto Alegre, Florianópolis e Curitiba.",
        ],
      },
      {
        question: "Preciso alugar carro para vir a Bombinhas?",
        answer: [
          "Depende de onde você vai ficar. Hospedado na Pousada Gaúcha, no centro de Bombinhas, mercado, farmácia, padaria, restaurantes e praia ficam a poucos minutos a pé, e o serviço de praia está na porta.",
          "O carro é útil para conhecer as outras praias da península e as cidades vizinhas. Se o seu plano é ficar na praia e descansar, dá para passar a semana inteira sem tirar o carro da garagem.",
        ],
      },
    ],
  },
  {
    heading: "Café da manhã",
    items: [
      {
        question: "Que horas é servido o café da manhã?",
        answer: ["Das 7h30 às 10h, à beira-mar, na Pousada Gaúcha."],
      },
      {
        question: "O café da manhã está incluído na diária?",
        answer: ["Sim, para todos os hóspedes, em todos os dias da estadia."],
      },
      {
        question: "Vocês atendem restrições alimentares?",
        answer: [
          "Em parte, e vamos ser honestos sobre os limites.",
          "O café da manhã da Pousada Gaúcha é todo produzido dentro da pousada. O buffet tem ovos, frutas e opções variadas que atendem bem quem evita lactose, quem come pouco carboidrato, quem é vegetariano ou quem prefere comida mais leve.",
          "O que não conseguimos garantir é ausência de glúten. Como tudo é feito na mesma cozinha, existe contato cruzado, e seria irresponsável prometer o contrário. Quem tem doença celíaca deve considerar isso. Nesse caso, o apartamento tem cozinha equipada e há mercado a poucos passos.",
          "Se você tem alguma restrição, avise na reserva. A gente vê o que dá para fazer.",
        ],
      },
    ],
  },
  {
    heading: "Apartamentos",
    items: [
      {
        question: "Quais são as categorias de apartamento?",
        answer: [
          "São três blocos, e cada um resolve uma necessidade diferente.",
          "Bloco Garden: os apartamentos mais refinados da pousada, com a melhor vista. Dentro do Garden existem também os studios, que têm vista lateral e não possuem sacada.",
          "Bloco Praia: apartamentos mais compactos e os mais próximos do café da manhã da Pousada Gaúcha.",
          "Bloco Gaúcha: os maiores apartamentos, com sacada com churrasqueira e cozinha mais completa. São os ideais para família.",
          "Se você não tiver certeza de qual escolher, fale com a gente antes de reservar. A gente indica pela composição do grupo e pelo tipo de viagem.",
        ],
      },
      {
        question: "O que tem no apartamento?",
        answer: [
          "Cozinha equipada, ar-condicionado, TV, frigobar e varanda na maior parte das unidades. Os apartamentos do Bloco Gaúcha têm churrasqueira na sacada e cozinha mais completa.",
          "A cozinha é o que mais faz diferença para quem viaja em família: dá para preparar a mamadeira, guardar fruta e fazer um jantar rápido quando ninguém aguenta mais sair.",
        ],
      },
      {
        question: "Cabe mais gente no apartamento? Cama extra tem custo?",
        answer: [
          "Cabe, e sem custo de cama extra. Os apartamentos têm sofá-cama, então a acomodação adicional já faz parte da estrutura do quarto.",
          "O que varia conforme o número de pessoas é a diária, de acordo com a categoria. Diga quantos vocês são quando reservar que a gente indica o apartamento certo.",
        ],
      },
      {
        question: "Tem berço?",
        answer: ["Tem, e sem custo. Peça na reserva para garantirmos a disponibilidade."],
      },
      {
        question: "A partir de que idade a criança paga?",
        answer: ["A partir de 6 anos."],
      },
    ],
  },
  {
    heading: "Estrutura",
    items: [
      {
        question: "A pousada é pé na areia mesmo?",
        answer: ["É. O acesso da Pousada Gaúcha à areia da Praia de Bombinhas é direto, sem atravessar rua."],
      },
      {
        question: "Tem piscina?",
        answer: [
          "Não temos piscina. Temos quatro jacuzzis climatizadas na cobertura, com temperaturas diferentes e vista para o mar, e a Praia de Bombinhas na porta.",
          "Preferimos dizer isso com clareza antes da reserva. Quem viaja procurando piscina para criança nadar deve saber disso na hora de escolher.",
        ],
      },
      {
        question: "O serviço de praia está incluído?",
        answer: ["Está. Cadeiras e guarda-sóis montados para os hóspedes, sem custo adicional."],
      },
      {
        question: "O restaurante funciona o ano inteiro?",
        answer: [
          "Não. O restaurante à beira-mar da Pousada Gaúcha é sazonal e funciona de outubro a abril. Fora desse período, a cidade tem boas opções abertas, e a gente indica. O café da manhã funciona o ano inteiro, sem mudança de qualidade.",
        ],
      },
      {
        question: "Que horas abre a academia?",
        answer: ["Das 10h às 22h."],
      },
      {
        question: "O que mais tem na pousada?",
        answer: [
          "Sala de cinema, sala de jogos, espaço kids, espaço gourmet, bicicletas e estacionamento privativo.",
        ],
      },
      {
        question: "Tem wi-fi?",
        answer: ["Tem, em toda a Pousada Gaúcha, sem custo."],
      },
      {
        question: "Tem mercado e farmácia perto da pousada?",
        answer: [
          "Tem. A Pousada Gaúcha fica no centro de Bombinhas, com mercado, farmácia, padaria e restaurantes a poucos minutos a pé.",
        ],
      },
      {
        question: "Aceitam animais de estimação?",
        answer: [
          "Não aceitamos. É uma decisão que assumimos e preferimos deixar clara antes da reserva, para ninguém se programar e ter problema na chegada.",
        ],
      },
    ],
  },
  {
    heading: "Estacionamento e deslocamento",
    items: [
      {
        question: "Tem estacionamento? É pago?",
        answer: ["Estacionamento privativo e gratuito, com uma vaga por hospedagem."],
      },
      {
        question: "Preciso de carro para me locomover em Bombinhas?",
        answer: [
          "Hospedado na Pousada Gaúcha, quase não. Mercado, farmácia, restaurantes e praia ficam a pé. O carro serve para conhecer as outras praias da península e as cidades vizinhas.",
        ],
      },
      {
        question: "Preciso pagar a Taxa de Preservação Ambiental?",
        answer: [
          "Depende de quando você vem. A TPA é cobrada por veículo entre 15 de novembro e 15 de abril. Em 2026 o valor chegou a R$ 191,50 para carros de passeio. Fora desse período não há cobrança.",
          "Um detalhe que pega muita gente: a taxa vale por 24 horas. Se você sair do município e voltar depois desse prazo, paga de novo. Vale planejar os passeios para fora de Bombinhas pensando nisso.",
        ],
      },
    ],
  },
  {
    heading: "Sobre Bombinhas",
    items: [
      {
        question: "Qual a melhor época para vir?",
        answer: [
          "Depende do que você procura.",
          "Dezembro a março: mar quente para banho demorado, cidade cheia, tudo aberto.",
          "Abril, maio e outubro: o melhor equilíbrio. Clima bom, cidade tranquila e sem taxa de entrada.",
          "Julho a setembro: o mar fica mais frio, mas são os meses das paisagens mais paradisíacas do ano, com praia vazia, trilhas confortáveis, mergulho e chance de ver baleia-franca.",
        ],
      },
      {
        question: "Qual praia é melhor para criança pequena?",
        answer: [
          "A Praia de Bombinhas, em frente à Pousada Gaúcha. É reconhecida como a melhor praia para famílias de todo o município, com ondas pequenas e água clara, e é onde a maioria das nossas famílias fica.",
          "Para criança bem pequena, a piscina natural da Praia da Sepultura é o lugar mais protegido da cidade. A Praia da Lagoinha também é rasa e abrigada.",
          "Evite Bombas, Quatro Ilhas e Mariscal com criança pequena: são praias de onda.",
        ],
      },
      {
        question: "Vocês ajudam a montar o roteiro?",
        answer: [
          "Ajudamos, e é a parte que a gente mais gosta. Diga o que você quer da viagem quando reservar, e a gente sugere qual praia em cada dia, quando fazer cada trilha e como encaixar os passeios conforme a previsão da sua semana.",
        ],
      },
      {
        question: "Quantos dias vale a pena ficar em Bombinhas?",
        answer: [
          "Nossa recomendação é de cinco a sete noites. Bombinhas tem 39 praias, e cada uma pede um dia diferente, além das trilhas, do mergulho e dos passeios de barco.",
          "Com três noites dá para conhecer o essencial, mas você vai passar a viagem correndo. Com menos de três, considere escolher uma praia só e descansar, em vez de tentar ver tudo.",
          "Quem vem dirigindo de longe, como de Curitiba ou Porto Alegre, costuma se dar melhor com sete noites, porque os dois dias de estrada pesam menos no total.",
        ],
      },
    ],
  },
  {
    heading: "Reserva e contato",
    items: [
      {
        question: "Quanto custa a diária na Pousada Gaúcha?",
        answer: [
          "As diárias vão de R$ 595 a R$ 3.595, dependendo da categoria do apartamento, do número de pessoas e do período do ano.",
          "A maior variação é entre alta e baixa temporada. De abril a novembro os valores ficam bem abaixo do teto da faixa, e é quando Bombinhas está mais tranquila. Para o valor exato das suas datas, consulte no nosso site ou fale com a gente pelo WhatsApp.",
        ],
      },
      {
        question: "Aceitam cartão? Dá para parcelar?",
        answer: [
          "Aceitamos cartão. O parcelamento existe e as condições variam conforme os pacotes vigentes no período da sua reserva.",
          "Fale com a gente antes de fechar que a gente informa as condições disponíveis para as suas datas.",
        ],
      },
      {
        question: "Qual a política de cancelamento?",
        answer: [
          "As regras mudam conforme a época do ano, porque a ocupação e a antecedência de reserva são muito diferentes entre alta e baixa temporada.",
          "De setembro a abril, que é a nossa alta temporada: cancelamentos ou alterações feitos até 30 dias antes do check-in têm reembolso do valor pago, com retenção de 25% referente a despesas operacionais. Cancelamentos com menos de 30 dias do check-in não são reembolsáveis. Reservas feitas com menos de 30 dias para o check-in também não são reembolsáveis.",
          "De maio a agosto, que é a baixa temporada, as regras são mais flexíveis. Cancelamentos com 30 dias ou mais de antecedência têm reembolso integral. Entre 29 e 15 dias antes do check-in, multa de 25% sobre o valor da reserva. Entre 14 e 8 dias, taxa de R$ 295,00, e o valor pago vira crédito para usar em até 12 meses. Com 7 dias ou menos, multa de 50% sobre o valor total.",
          "Alteração de datas na baixa temporada tem taxa administrativa de R$ 295,00.",
          "Sabemos que imprevistos acontecem. Se algo aconteceu com você, fale com a gente pelo WhatsApp antes de cancelar pelo sistema. Nem sempre dá para resolver, mas sempre dá para conversar.",
        ],
      },
      {
        question: "Vale mais a pena reservar direto?",
        answer: [
          "Vale. Reservando pelo nosso site você paga o melhor valor e fala diretamente com quem vai te receber.",
        ],
      },
      {
        question: "Como falo com vocês?",
        answer: [
          "Pelo chat aqui do site, pelo WhatsApp (47) 99791-0034 ou pelo telefone fixo (47) 3369-2472.",
        ],
      },
    ],
  },
];

const PerguntasFrequentes = () => {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CATEGORIES.flatMap((cat) =>
      cat.items.map((qa) => ({
        "@type": "Question",
        name: qa.question,
        acceptedAnswer: { "@type": "Answer", text: qa.answer.join("\n\n") },
      })),
    ),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Perguntas frequentes", item: URL },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Perguntas frequentes · Pousada Gaúcha Bombinhas</title>
        <meta
          name="description"
          content="Check-in, chegada antecipada, café da manhã, estacionamento, crianças, taxa de Bombinhas e serviço de praia. Respostas diretas de quem recebe há 26 anos."
        />
        <link rel="canonical" href={URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Perguntas frequentes · Pousada Gaúcha Bombinhas" />
        <meta
          property="og:description"
          content="Check-in, chegada antecipada, café da manhã, estacionamento, crianças, taxa de Bombinhas e serviço de praia. Respostas diretas de quem recebe há 26 anos."
        />
        <meta property="og:url" content={URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Perguntas frequentes · Pousada Gaúcha Bombinhas" />
        <meta
          name="twitter:description"
          content="Check-in, chegada antecipada, café da manhã, estacionamento, crianças, taxa de Bombinhas e serviço de praia. Respostas diretas de quem recebe há 26 anos."
        />
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <Navbar />

      <article className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Início</Link>
            <ChevronRight size={14} />
            <span className="text-foreground">Perguntas frequentes</span>
          </nav>

          <header className="mb-10">
            <p className="font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-primary">
              Pousada Gaúcha
            </p>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Perguntas frequentes
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As dúvidas que mais chegam até a gente, respondidas com a franqueza de quem
              recebe hóspedes em Bombinhas há 26 anos.
            </p>
          </header>

          {CATEGORIES.map((cat) => (
            <section key={cat.heading} className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
                {cat.heading}
              </h2>
              {cat.items.map((qa) => (
                <div key={qa.question} className="mb-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {qa.question}
                  </h3>
                  {qa.answer.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </section>
          ))}

          {/* CTA final */}
          <section className="mt-12 p-8 md:p-12 bg-foreground text-primary-foreground rounded-xl text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Ficou alguma dúvida?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto leading-relaxed">
              Fale com a gente pelo WhatsApp ou reserve direto pelo site, com o melhor valor.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackInitiateCheckout}
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

export default PerguntasFrequentes;
