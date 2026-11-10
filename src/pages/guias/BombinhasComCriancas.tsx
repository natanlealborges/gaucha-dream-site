import { LocalizedGuide } from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";
import heroBeach from "@/assets/hero-beach.jpg";

const Page = () => (
  <LocalizedGuide
    guide={getGuide("bombinhas-com-criancas")!}
    content={{
      pt: {
    heroImage: { src: heroBeach, alt: "Vista aérea da Praia de Bombinhas, em frente à Pousada Gaúcha, com mar calmo e areia clara" },
    intro: "Bombinhas é um dos melhores destinos de praia do Sul para quem viaja com criança pequena, e o motivo é simples: várias praias daqui são de baía, com mar raso, água transparente e pouca onda. A criança entra e você enxerga o pé dela no fundo. Mas nem toda praia daqui é assim, e escolher errado estraga o dia. É isso que este guia resolve.",
    sections: [
      {
        heading: "As praias certas por idade",
        paragraphs: [
          "Bebês e crianças até 5 anos: Praia da Sepultura. A piscina natural formada entre as pedras é o lugar mais seguro da cidade para criança pequena. Água parada, rasa e cheia de peixe. Vá cedo, porque enche.",
          "Até 8 anos: Praia da Lagoinha, conhecida como praia dos peixinhos. Pequena, abrigada, rasa e transparente. Chega-se por uma caminhada de cerca de vinte minutos, o que já é parte do programa.",
          "Qualquer idade: Praia de Bombinhas, a praia em frente à pousada. Areia branca, água clara e ondas pequenas. Nossos hóspedes com criança passam a maior parte dos dias aqui justamente por isso, e porque o banheiro, o chuveiro e o quarto estão a poucos metros.",
          "Também calma: Canto Grande Mar de Dentro, com mais espaço na areia, boa para quem quer fugir do movimento.",
          "Cuidado: Quatro Ilhas e Mariscal são lindas e são praias de onda. Bom para adolescente que quer surfar, ruim para criança pequena.",
        ],
        links: [{ to: "/guias/praias-de-bombinhas", label: "Praias de Bombinhas: qual escolher" }],
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
    ],
      },
      es: {
        heroImage: { src: heroBeach, alt: "Vista aérea de la Praia de Bombinhas, frente a la Pousada Gaúcha, con mar calmo y arena clara" },
        intro: "Bombinhas es uno de los mejores destinos de playa del sur de Brasil para viajar con niños pequeños, y el motivo es simple: varias playas de acá son de bahía, con mar bajo, agua transparente y pocas olas. El niño entra y se le ven los pies en el fondo. Pero no todas las playas son así, y elegir mal arruina el día. Eso es lo que resuelve esta guía.",
        sections: [
          {
            heading: "Las playas indicadas según la edad",
            paragraphs: [
              "Bebés y niños de hasta 5 años: Praia da Sepultura. La piscina natural formada entre las piedras es el lugar más seguro de la ciudad para niños pequeños. Agua quieta, baja y llena de peces. Conviene ir temprano, porque se llena.",
              "Hasta 8 años: Praia da Lagoinha, conocida como la playa de los pececitos. Pequeña, protegida, baja y transparente. Se llega con una caminata de unos veinte minutos, que ya es parte del programa.",
              "Cualquier edad: Praia de Bombinhas, la playa frente a la posada. Arena blanca, agua clara y olas pequeñas. Nuestros huéspedes con niños pasan la mayor parte de los días acá justamente por eso, y porque el baño, la ducha y la habitación están a pocos metros.",
              "También calma: Canto Grande Mar de Dentro, con más espacio en la arena, buena para escapar del movimiento.",
              "Atención: Quatro Ilhas y Mariscal son hermosas y son playas de olas. Bien para adolescentes que quieren surfear, no para niños pequeños.",
            ],
            links: [{ to: "/es/guias/praias-de-bombinhas", label: "Playas de Bombinhas: cuál elegir" }],
          },
          {
            heading: "Lo que de verdad hace la diferencia al viajar con niños",
            paragraphs: [
              "Después de 26 años recibiendo familias, aprendimos que lo que cansa no son los niños. Es la logística.",
              "Estar frente al mar. Volver a la habitación para cambiar el pañal, buscar la merienda olvidada o dormir la siesta sin sacar el auto del garaje cambia todo el viaje.",
              "Cocina en el apartamento. Poder preparar la papilla, calentar la mamadera, guardar la fruta e improvisar una cena a las ocho de la noche cuando nadie quiere salir. Por eso nuestros apartamentos tienen cocina equipada.",
              "No depender del auto. Supermercado, farmacia, restaurante y playa a pie.",
              "Servicio de playa. Reposeras y sombrilla ya armadas al llegar, para cargar a los niños en lugar de cargar equipo.",
            ],
          },
          {
            heading: "Programas para los días que no son de playa",
            paragraphs: [
              "Sendero de la Sepultura o de la Lagoinha, que son cortos y terminan con un baño.",
              "Snorkel en la piscina natural de la Sepultura, que suele ser la primera experiencia de buceo del niño y se convierte en un recuerdo de infancia.",
              "Paseo en barco por la bahía, en día de mar calmo.",
              "Espacio kids y sala de juegos de la posada, para el final de la tarde y para los días de lluvia.",
            ],
          },
          {
            heading: "Cómo armaríamos la semana",
            paragraphs: [
              "Mañana en la playa, siempre. Los niños rinden mejor temprano, y el sol de diez a cuatro es el más fuerte.",
              "Almuerzo en el apartamento o cerca. Restaurante con niños cansados es receta de día malo.",
              "Tarde libre o siesta, con vuelta a la playa después de las cuatro.",
              "Un paseo cada dos días, no todos los días. El error más común de las familias es llenar la agenda.",
              "Dejar el último día sin nada programado.",
            ],
          },
          {
            heading: "Lo que recomendamos traer",
            paragraphs: [
              "Protector solar infantil y remera con protección UV, que funciona mejor que volver a poner protector cada hora. Flotador o chaleco si el niño todavía no nada. Máscara de snorkel infantil, que cuesta poco y rinde mucho en la Sepultura. Remedios de rutina, porque en enero la farmacia tiene fila.",
            ],
          },
          {
            heading: "¿Vale la pena venir con niños fuera del verano?",
            paragraphs: [
              "Sí, y mucha gente se sorprende. Fuera de la temporada alta la playa es de uno, no hay filas en ningún lugar y los niños tienen espacio.",
              "Si el objetivo del viaje es que los niños estén todo el día en el mar, lo ideal es venir entre diciembre y marzo. Si es la familia junta y descansada, cualquier mes sirve.",
              "Si viene con niños, cuéntenos las edades al reservar. Le indicamos la playa adecuada para cada día, el apartamento que tiene más sentido para el tamaño de la familia y lo que se puede dejar en casa. Equipo Pousada Gaúcha — anfitriones y consultores de experiencias en Bombinhas.",
            ],
          },
        ],
      },
    }}
  />
);

export default Page;
