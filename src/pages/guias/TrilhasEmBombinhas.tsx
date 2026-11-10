import { LocalizedGuide } from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";

const Page = () => (
  <LocalizedGuide
    guide={getGuide("trilhas-em-bombinhas")!}
    content={{
      pt: {
    intro: "Bombinhas tem 67% de área verde e três unidades de conservação num município de 36 km². Na prática, isso quer dizer que quase toda praia daqui tem uma trilha saindo dela. Abaixo estão as cinco que a gente desenha no papel do café toda semana, da mais leve para a mais puxada. Todas dão para fazer sem guia, e todas ficam melhores no inverno, quando não faz calor no meio do caminho.",
    sections: [
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
        links: [{ to: "/guias/o-que-fazer-em-bombinhas", label: "O que fazer em Bombinhas" }],
      },
    ],
      },
      es: {
        intro: "Bombinhas tiene 67% de área verde y tres unidades de conservación en un municipio de 36 km². En la práctica, eso significa que casi todas las playas de acá tienen un sendero que sale de ellas. Abajo están los cinco que dibujamos en el papel del desayuno todas las semanas, del más fácil al más exigente. Todos se pueden hacer sin guía, y todos son mejores en invierno, cuando no hace calor en el medio del camino.",
        sections: [
          {
            heading: "Trilha da Sepultura — fácil",
            paragraphs: [
              "Cerca de 2,3 km ida y vuelta, con poca subida. Es el sendero para el primer día, con niños, con los abuelos, con quien no camina mucho.",
              "El premio es la piscina natural de la Sepultura, formada entre las piedras, que es el mejor lugar de Bombinhas para hacer snorkel sin barco. Lleve máscara.",
              "Nuestro consejo: ir temprano. A partir de las diez la piscina natural se llena, y es pequeña.",
            ],
          },
          {
            heading: "Retiro dos Padres — fácil a moderado",
            paragraphs: [
              "Cerca de 3,5 km, con un desnivel de unos 250 metros, entre 1 h 30 y 2 h. Sale de Bombinhas por el bosque, con un tramo por el costão (la costa rocosa).",
              "La playa del Retiro dos Padres es pequeña, con una franja de arena que comparte espacio con las rocas, y en la mitad del camino hay una piedra grande desde donde se ve toda la región. Es el sendero con mejor relación entre esfuerzo y recompensa de la ciudad.",
              "Nuestro consejo: se puede combinar con la Sepultura en la misma mañana.",
            ],
          },
          {
            heading: "De Quatro Ilhas al Costão do Retiro dos Padres — moderado",
            paragraphs: [
              "Cerca de 3,9 km, desnivel de unos 216 metros, entre 1 h 30 y 2 h. Empieza en la Praia de Quatro Ilhas y buena parte del recorrido es por la costa rocosa, lo que exige atención redoblada.",
              "Desde arriba se ve toda la extensión de las playas de la región. Es el sendero más aventurero de la lista.",
              "Nuestro consejo: no hacerlo con lluvia. La roca mojada resbala de verdad.",
            ],
          },
          {
            heading: "Praia da Lagoinha — moderado y corto",
            paragraphs: [
              "Veinte minutos de caminata hasta una playa pequeña y protegida, con baño al llegar. Se la conoce como la playa de los pececitos, porque el agua es baja y transparente y los peces se acercan.",
              "Nuestro consejo: es la mejor de la lista para ir con niños que ya caminan bien.",
            ],
          },
          {
            heading: "Morro do Macaco — exigente, y vale cada paso",
            paragraphs: [
              "El punto más alto de la lista, con 191 metros. El sendero empieza al final de la Praia de Canto Grande Mar de Dentro, al final de la Rua Jequitibá, cerca del muelle. Son de 30 a 40 minutos de subida casi continua, con tramos empinados, arena suelta y piedras.",
              "Desde la cima se ven Conceição, Canto Grande, Mariscal, Quatro Ilhas, Morrinhos y Zimbros de una sola vez. Es la mejor vista de la península, y el mejor atardecer de la región.",
              "Nuestro consejo: la segunda mitad tiene poca sombra. En verano, salir antes de las 9 h o ir al final de la tarde. Llevar más agua de la que parece necesaria.",
              "Para tener altura sin tanto esfuerzo, el Mirante Eco 360º, con 218 metros, tiene visita paga y estructura de apoyo.",
            ],
          },
          {
            heading: "Qué llevar, siempre",
            paragraphs: [
              "Agua, zapatillas cerradas con buena suela, protector solar, gorra y algo para comer. Repelente en verano. Nada de ojotas, ni siquiera en los fáciles.",
              "Y no hay que subestimar el horario: casi todos los accidentes en senderos acá les pasan a quienes salen tarde y vuelven de noche.",
            ],
          },
          {
            heading: "El orden que sugerimos para una semana",
            paragraphs: [
              "Día 2: Sepultura, para despertar las piernas. Día 3: Retiro dos Padres, temprano a la mañana. Día 5: Morro do Macaco, al final de la tarde, para ver el atardecer.",
              "Si sobra un día: Quatro Ilhas por la costa rocosa, o el Parque Natural Municipal da Costeira de Zimbros, que tiene diez playas y es la versión salvaje de Bombinhas.",
              "Si viene a caminar, avísenos al reservar. Armamos el orden de los senderos según el pronóstico de la semana, porque acá lo que decide no es el mapa, es el día. Equipo Pousada Gaúcha — anfitriones y consultores de experiencias en Bombinhas.",
            ],
            links: [{ to: "/es/guias/o-que-fazer-em-bombinhas", label: "Qué hacer en Bombinhas" }],
          },
        ],
      },
    }}
  />
);

export default Page;
