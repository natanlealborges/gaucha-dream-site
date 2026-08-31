import GuideLayout from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";

const Page = () => (
  <GuideLayout
    guide={getGuide("trilhas-em-bombinhas")!}
    heroImageAlt="Vista do alto do Morro do Macaco em Bombinhas com a península e o mar ao fundo"
    intro="Bombinhas tem 67% de área verde e três unidades de conservação num município de 36 km². Na prática, isso quer dizer que quase toda praia daqui tem uma trilha saindo dela. Abaixo estão as cinco que a gente desenha no papel do café toda semana, da mais leve para a mais puxada. Todas dão para fazer sem guia, e todas ficam melhores no inverno, quando não faz calor no meio do caminho."
    sections={[
      {
        heading: "Trilha da Sepultura — fácil",
        paragraphs: [
          "Cerca de 2,3 km ida e volta, com pouca subida. É a trilha para fazer no primeiro dia, com criança, com pai e mãe, com quem não caminha muito.",
          "O prêmio é a piscina natural da Sepultura, formada entre as pedras, que é o melhor lugar de Bombinhas para snorkel sem barco. Leve máscara.",
          "Nossa dica: vá cedo. A partir das dez a piscina natural enche, e ela é pequena.",
        ],
      },
      {
        heading: "Retiro dos Padres — fácil para moderada",
        image: { alt: "Trilha do Retiro dos Padres em Bombinhas passando pelo costão com o mar ao lado" },
        paragraphs: [
          "Cerca de 3,5 km, com desnível em torno de 250 metros, entre 1h30 e 2h. Parte de Bombinhas pela mata, com um trecho pelo costão.",
          "A praia do Retiro dos Padres é pequena, com faixa de areia dividindo espaço com as rochas, e no meio do caminho existe uma pedra grande de onde se vê a região inteira. É a trilha com melhor relação entre esforço e recompensa da cidade.",
          "Nossa dica: dá para emendar com a Sepultura na mesma manhã.",
        ],
      },
      {
        heading: "Quatro Ilhas até o Costão do Retiro dos Padres — moderada",
        paragraphs: [
          "Cerca de 3,9 km, desnível em torno de 216 metros, entre 1h30 e 2h. Começa na Praia de Quatro Ilhas e boa parte do trajeto é feita pelo costão, o que exige atenção redobrada.",
          "Do alto se vê a extensão inteira das praias da região. É a trilha mais aventura da lista.",
          "Nossa dica: não faça com chuva. Costão molhado é escorregadio de verdade.",
        ],
      },
      {
        heading: "Praia da Lagoinha — moderada e curta",
        paragraphs: [
          "Vinte minutos de caminhada até uma praia pequena e abrigada, com banho na chegada. É conhecida como praia dos peixinhos, porque a água é rasa e transparente e os peixes chegam perto.",
          "Nossa dica: é a melhor da lista para ir com criança que já anda bem.",
        ],
      },
      {
        heading: "Morro do Macaco — puxada, e vale cada passo",
        image: { alt: "Mirante no topo do Morro do Macaco em Bombinhas com vista para várias praias" },
        paragraphs: [
          "O ponto mais alto da lista, com 191 metros. A trilha começa no fim da Praia de Canto Grande Mar de Dentro, no fim da Rua Jequitibá, perto do trapiche. São de 30 a 40 minutos de subida quase contínua, com trechos íngremes, areia solta e pedras.",
          "Do topo se vê Conceição, Canto Grande, Mariscal, Quatro Ilhas, Morrinhos e Zimbros de uma vez só. É a melhor vista da península, e o melhor pôr do sol da região.",
          "Nossa dica: a segunda metade tem pouca sombra. No verão, saia antes das 9h ou vá no fim da tarde. Leve mais água do que você acha que precisa.",
          "Se você quiser altura sem tanto esforço, o Mirante Eco 360º, com 218 metros, tem visitação paga e estrutura de apoio.",
        ],
      },
      {
        heading: "O que levar, sempre",
        paragraphs: [
          "Água, tênis fechado com sola de aderência, protetor solar, boné e um lanche. Repelente no verão. Nada de chinelo, mesmo nas fáceis.",
          "E não subestime o horário: quase todo acidente em trilha aqui acontece com quem sai tarde e volta no escuro.",
        ],
      },
      {
        heading: "A ordem que a gente sugere para uma semana",
        paragraphs: [
          "Dia 2: Sepultura, para as pernas acordarem. Dia 3: Retiro dos Padres, de manhã cedo. Dia 5: Morro do Macaco, no fim da tarde, para pegar o pôr do sol.",
          "Se sobrar dia: Quatro Ilhas pelo costão, ou o Parque Natural Municipal da Costeira de Zimbros, que tem dez praias e é a versão selvagem de Bombinhas.",
          "Se você vem para caminhar, avise na reserva. A gente monta a ordem das trilhas conforme a previsão da sua semana, porque aqui o que decide não é o mapa, é o dia. Equipe Pousada Gaúcha — anfitriões e consultores de experiência em Bombinhas.",
        ],
      },
    ]}
  />
);

export default Page;
