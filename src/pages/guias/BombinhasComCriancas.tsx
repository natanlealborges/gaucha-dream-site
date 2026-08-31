import GuideLayout from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";

const Page = () => (
  <GuideLayout
    guide={getGuide("bombinhas-com-criancas")!}
    heroImageAlt="Criança brincando na água rasa e transparente da Praia da Sepultura em Bombinhas"
    intro="Bombinhas é um dos melhores destinos de praia do Sul para quem viaja com criança pequena, e o motivo é simples: várias praias daqui são de baía, com mar raso, água transparente e pouca onda. A criança entra e você enxerga o pé dela no fundo. Mas nem toda praia daqui é assim, e escolher errado estraga o dia. É isso que este guia resolve."
    sections={[
      {
        heading: "As praias certas por idade",
        image: { alt: "Piscina natural da Praia da Sepultura em Bombinhas com água rasa e calma" },
        paragraphs: [
          "Bebês e crianças até 5 anos: Praia da Sepultura. A piscina natural formada entre as pedras é o lugar mais seguro da cidade para criança pequena. Água parada, rasa e cheia de peixe. Vá cedo, porque enche.",
          "Até 8 anos: Praia da Lagoinha, conhecida como praia dos peixinhos. Pequena, abrigada, rasa e transparente. Chega-se por uma caminhada de cerca de vinte minutos, o que já é parte do programa.",
          "Qualquer idade: Praia de Bombinhas, a praia em frente à pousada. Areia branca, água clara e ondas pequenas. Nossos hóspedes com criança passam a maior parte dos dias aqui justamente por isso, e porque o banheiro, o chuveiro e o quarto estão a poucos metros.",
          "Também calma: Canto Grande Mar de Dentro, com mais espaço na areia, boa para quem quer fugir do movimento.",
          "Cuidado: Quatro Ilhas e Mariscal são lindas e são praias de onda. Bom para adolescente que quer surfar, ruim para criança pequena.",
        ],
      },
      {
        heading: "O que faz diferença de verdade viajando com criança",
        paragraphs: [
          "Depois de 26 anos recebendo família, a gente aprendeu que o que cansa não é a criança. É a logística.",
          "Estar pé na areia. Voltar ao quarto para trocar a fralda, pegar o lanche esquecido ou fazer a soneca da tarde sem tirar o carro da garagem muda a viagem inteira.",
          "Cozinha no apartamento. Poder fazer a papinha, esquentar a mamadeira, guardar a fruta e improvisar um jantar às oito da noite quando ninguém aguenta mais sair. É por isso que nossos apartamentos têm cozinha equipada.",
          "Não depender de carro. Mercado, farmácia, restaurante e praia a pé.",
          "Serviço de praia. Cadeira e guarda-sol já montados quando você chega, para você carregar criança em vez de carregar equipamento.",
        ],
      },
      {
        heading: "Programas para os dias que não são de praia",
        paragraphs: [
          "Parque Ambiental Família Schurmann, a poucos minutos a pé, com a história da volta ao mundo de veleiro. Funciona bem com crianças a partir de uns 6 anos.",
          "Trilha da Sepultura ou da Lagoinha, que são curtas e terminam em banho.",
          "Snorkel na piscina natural da Sepultura, que costuma ser a primeira experiência de mergulho da criança e vira memória de infância.",
          "Passeio de barco pela baía, em dia de mar calmo.",
          "Espaço kids e sala de jogos da pousada, para o fim de tarde e para o dia de chuva.",
        ],
      },
      {
        heading: "Como a gente montaria a semana",
        paragraphs: [
          "Manhã na praia, sempre. Criança rende melhor cedo, e o sol das dez às quatro é o mais forte.",
          "Almoço no apartamento ou perto. Restaurante com criança cansada é receita de dia ruim.",
          "Tarde livre ou soneca, com volta à praia depois das quatro.",
          "Um passeio a cada dois dias, não todo dia. O erro mais comum das famílias é encher a agenda.",
          "Deixe o último dia sem nada marcado.",
        ],
      },
      {
        heading: "O que a gente recomenda trazer",
        paragraphs: [
          "Protetor solar infantil e camiseta com proteção UV, que resolve melhor que passar protetor de novo a cada hora. Boia ou colete se a criança ainda não nada. Máscara de snorkel infantil, que custa pouco e rende muito na Sepultura. Remédio de rotina, porque farmácia em janeiro tem fila.",
          "E uma dica que vale o ano inteiro: depois de chuva forte, espere um dia antes de colocar a criança na água, e prefira os trechos mais afastados das saídas de água pluvial.",
        ],
      },
      {
        heading: "Vale a pena vir com criança fora do verão?",
        paragraphs: [
          "Vale, e muita gente se surpreende. Fora da alta temporada a praia é sua, não tem fila em lugar nenhum e a criança tem espaço.",
          "O único ponto é a água, que fica fria para banho demorado. Se o objetivo da viagem é a criança dentro do mar, venha entre dezembro e março. Se é a família junta e descansada, qualquer mês serve.",
          "Se você vem com criança, conte pra gente as idades quando reservar. A gente indica a praia certa para cada dia, o apartamento que faz mais sentido para o tamanho da família e o que dá para deixar em casa. Equipe Pousada Gaúcha — anfitriões e consultores de experiência em Bombinhas.",
        ],
      },
    ]}
  />
);

export default Page;
