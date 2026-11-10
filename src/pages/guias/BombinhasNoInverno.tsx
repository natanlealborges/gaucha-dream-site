import { LocalizedGuide } from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";
import heroBeach from "@/assets/hero-beach.jpg";
import aboutJacuzzi from "@/assets/about-jacuzzi.jpg";

const Page = () => (
  <LocalizedGuide
    guide={getGuide("bombinhas-no-inverno")!}
    content={{
      pt: {
    heroImage: { src: heroBeach, alt: "Vista aérea da Praia de Bombinhas, em frente à Pousada Gaúcha, com mar calmo e o trapiche" },
    intro: "Vale, desde que você saiba o que vem buscar. No inverno Bombinhas entrega espaço, silêncio, água muito mais transparente, trilhas com clima confortável e a chance de ver baleia da areia. O que muda é que o banho de mar fica curto e parte dos restaurantes reduz o horário. A gente recebe hóspedes aqui há 26 anos e vê a mesma cena todo ano: quem vem no inverno pela primeira vez volta achando que descobriu Bombinhas duas vezes. Esta página não é um folheto. É o que a gente responde por WhatsApp toda semana.",
    sections: [
      {
        heading: "O que você ganha vindo entre maio e setembro",
        paragraphs: [
          "Espaço. Você estaciona na frente do lugar onde vai comer. Senta sem esperar. Caminha na areia escolhendo onde parar.",
          "Trilhas em clima bom. As temperaturas costumam ficar entre 13 °C e 20 °C, com pouca chuva. Quem já subiu o Morro do Macaco em janeiro sabe a diferença.",
          "Nada de taxa de entrada. A Taxa de Preservação Ambiental de Bombinhas é cobrada por veículo entre 15 de novembro e 15 de abril, e em 2026 chegou a R$ 191,50 para carros. Fora desse período não há cobrança. No inverno você entra e sai da cidade quantas vezes quiser sem pagar nada, o que muda bastante o planejamento de quem quer conhecer Porto Belo, Itapema ou a Ilha de Porto Belo no mesmo passeio.",
          "Diárias de baixa temporada. Vale para hospedagem, restaurante e passeio.",
        ],
        links: [{ to: "/guias/quando-ir-a-bombinhas", label: "Quando ir a Bombinhas: melhor época" }],
      },
      {
        heading: "A água fica mais clara. Essa é a parte que surpreende",
        paragraphs: [
          "Aqui está o que quase ninguém conta sobre Bombinhas: o verão é a estação mais chuvosa do ano aqui. E chuva forte mexe com o mar. Ela carrega areia e sedimento dos morros e deixa a água mais turva por um ou dois dias.",
          "No inverno chove muito menos e as correntes ficam mais estáveis. O resultado é aquela água verde-azulada das fotos.",
          "Não é acaso que Bombinhas é a Capital Nacional do Mergulho Ecológico e que os mergulhadores vêm justamente nesta época: é quando dá para enxergar longe debaixo d'água. Da areia, o efeito é o mesmo.",
          "Sobre entrar no mar, com sinceridade: a água fica mais fria, e quanto você aguenta depende muito de onde você vem. Gaúcho e catarinense entram. Quem vem do Nordeste, provavelmente não. Mas mesmo quem não entra costuma dizer que a praia no inverno é mais bonita, e a gente concorda.",
        ],
      },
      {
        heading: "Baleias, e o que a gente pode e não pode prometer",
        paragraphs: [
          "Entre julho e novembro, baleias-francas migram do Atlântico Sul para o litoral catarinense para acasalar e cuidar dos filhotes. A maior concentração fica no sul do estado, entre Garopaba, Imbituba e Laguna, mas os avistamentos entre Bombinhas e Porto Belo vêm aumentando ano a ano, porque nossas baías abrigadas e de água calma são exatamente o tipo de lugar que elas procuram.",
          "A gente vê. Não todo dia, não com hora marcada, mas vê.",
          "O avistamento é feito da terra: da areia, dos costões e dos mirantes. Não precisa de barco. As chances aumentam bastante se você ficar três dias ou mais na região. Um binóculo faz muita diferença. Setembro costuma concentrar os avistamentos no estado.",
          "O que a gente não faz é vender pacote com baleia garantida. Ninguém pode garantir isso.",
        ],
      },
      {
        heading: "O que fecha e o que continua aberto",
        paragraphs: [
          "Esta é a pergunta que mais recebemos no inverno, então vamos direto.",
          "Reduz ou fecha: parte dos restaurantes da cidade opera em horário reduzido entre maio e setembro; nosso restaurante à beira-mar é sazonal e funciona de outubro a abril; os quiosques e a estrutura de verão da areia diminuem.",
          "Continua funcionando: Concha das Ostras, um dos melhores da cidade, aberto o ano inteiro; Patadacobra, operadora de mergulho, seguindo normalmente, e o inverno é a melhor época para mergulhar aqui; passeios de buggy, com agência local ativa na baixa temporada; guias de passeios locais; ciclismo e mountain bike; e todas as trilhas.",
          "Na pousada: o café da manhã à beira-mar continua exatamente igual, mesma qualidade e mesma vista; as jacuzzis da cobertura continuam climatizadas, e é no inverno que elas ficam melhores; todo o resto funciona normalmente.",
          "Se você vem esperando a agitação de janeiro, vai se decepcionar. Se vem procurando descanso, silêncio e paisagem, é a melhor época do ano.",
        ],
      },
      {
        heading: "Como a gente montaria seus dias",
        image: { src: aboutJacuzzi, alt: "Jacuzzi da cobertura da Pousada Gaúcha com vista para o mar de Bombinhas" },
        paragraphs: [
          "Esta é a parte que a gente costuma fazer por WhatsApp, e vale adiantar aqui.",
          "Se você vem para mergulhar: venha entre julho e setembro, reserve o mergulho para os dias sem chuva na véspera e deixe o dia seguinte livre. A gente ajuda a encaixar com a operadora.",
          "Se você vem para caminhar: maio, junho e outubro são os melhores meses. Saia cedo, faça a trilha pela manhã e deixe a tarde para a jacuzzi.",
          "Se você vem para ver baleia: agosto e setembro, no mínimo três noites, e mirante logo depois do café da manhã, que é quando o mar costuma estar mais calmo.",
          "Se você vem só para descansar: qualquer mês serve. Aí a gente sugere o contrário de tudo: não marque nada, e deixe a gente indicar o programa na hora, conforme o dia amanhecer.",
          "Se você já conhece Bombinhas no verão: venha em outubro. O restaurante reabre, a cidade acorda e ainda dá para escolher onde sentar. Para muita gente é o melhor mês do ano aqui.",
        ],
      },
      {
        heading: "Para quem o inverno em Bombinhas é perfeito",
        paragraphs: [
          "É perfeito para: casais que querem sossego de verdade; quem já conhece Bombinhas e quer conhecer a versão calma; mergulhadores, pela visibilidade; fotógrafos e gente que gosta de nascer do sol; quem trabalha remoto e pode esticar a estadia.",
          "Provavelmente não é para: quem viaja para passar horas dentro do mar; quem quer vida noturna e movimento; famílias com crianças que só se divertem dentro d'água.",
        ],
      },
      {
        heading: "Nossa cena favorita do inverno",
        paragraphs: [
          "O nascer do sol visto do deck, com o café da manhã sendo montado atrás de você e a praia inteira ali na frente. Depois de 26 anos, ainda é a hora do dia que a gente mais gosta.",
          "Bombinhas no inverno é para quem procura encantamento, descanso e paz. Se é isso que você procura, fale com a gente antes de fechar qualquer coisa. Depois de 26 anos recebendo hóspedes aqui, a gente não vende só a diária: ajuda a montar o roteiro, indica o dia certo para cada praia e avisa o que vale e o que não vale no mês em que você vem.",
          "Reservando direto pelo site você paga o melhor valor. Equipe Pousada Gaúcha — anfitriões e consultores de experiência em Bombinhas.",
        ],
      },
    ],
      },
      es: {
        heroImage: { src: heroBeach, alt: "Vista aérea de la Praia de Bombinhas, frente a la Pousada Gaúcha, con mar calmo y el muelle" },
        intro: "Vale la pena, siempre que se sepa qué se viene a buscar. En invierno Bombinhas ofrece espacio, silencio, agua mucho más transparente, senderos con clima agradable y la posibilidad de ver ballenas desde la arena. Lo que cambia es que parte de los restaurantes reduce el horario. Recibimos huéspedes acá hace 26 años y vemos la misma escena todos los años: quien viene en invierno por primera vez se va sintiendo que descubrió Bombinhas dos veces. Esta página no es un folleto. Es lo que respondemos por WhatsApp todas las semanas.",
        sections: [
          {
            heading: "Lo que se gana viniendo entre mayo y septiembre",
            paragraphs: [
              "Espacio. Se estaciona frente al lugar donde se va a comer. Se consigue mesa sin esperar. Se camina por la arena eligiendo dónde parar.",
              "Senderos con buen clima. Las temperaturas suelen estar entre 13 °C y 20 °C, con poca lluvia. Quien ya subió el Morro do Macaco en enero sabe la diferencia.",
              "Sin tasa de entrada. La Tasa de Preservación Ambiental de Bombinhas se cobra por vehículo entre el 15 de noviembre y el 15 de abril. Fuera de ese período no hay cobro. En invierno se puede entrar y salir de la ciudad las veces que se quiera sin pagar nada, lo que cambia bastante la planificación para conocer Porto Belo, Itapema o la Ilha de Porto Belo en el mismo paseo.",
              "Tarifas de temporada baja. Vale para alojamiento, restaurantes y paseos.",
            ],
            links: [{ to: "/es/guias/quando-ir-a-bombinhas", label: "Cuándo ir a Bombinhas: la mejor época" }],
          },
          {
            heading: "El agua se pone más clara. Esa es la parte que sorprende",
            paragraphs: [
              "Esto es lo que casi nadie cuenta sobre Bombinhas: el verano es la estación más lluviosa del año acá. Y la lluvia fuerte mueve el mar. Arrastra arena y sedimento de los cerros y deja el agua más turbia durante uno o dos días.",
              "En invierno llueve mucho menos y las corrientes son más estables. El resultado es esa agua verde azulada de las fotos.",
              "No es casualidad que Bombinhas sea la Capital Nacional del Buceo Ecológico y que los buzos vengan justamente en esta época: es cuando se ve lejos bajo el agua. Desde la arena, el efecto es el mismo.",
              "Quien viene en invierno suele decir que la playa en esta época es más linda, y estamos de acuerdo.",
            ],
          },
          {
            heading: "Ballenas, y lo que podemos y no podemos prometer",
            paragraphs: [
              "Entre julio y noviembre, las ballenas francas migran del Atlántico Sur hacia el litoral de Santa Catarina para aparearse y cuidar a sus crías. La mayor concentración está en el sur del estado, entre Garopaba, Imbituba y Laguna, pero los avistajes entre Bombinhas y Porto Belo vienen aumentando año a año, porque nuestras bahías protegidas y de agua calma son exactamente el tipo de lugar que ellas buscan.",
              "Nosotros las vemos. No todos los días, no con hora fija, pero las vemos.",
              "El avistaje se hace desde tierra: desde la arena, la costa rocosa y los miradores. No hace falta barco. Las chances aumentan bastante con tres días o más en la región. Unos binoculares hacen mucha diferencia. Septiembre suele concentrar los avistajes en el estado.",
              "Lo que no hacemos es vender paquetes con ballena garantizada. Nadie puede garantizar eso.",
            ],
          },
          {
            heading: "Qué cierra y qué sigue abierto",
            paragraphs: [
              "Es la pregunta que más recibimos en invierno, así que vamos directo.",
              "Reduce o cierra: parte de los restaurantes de la ciudad funciona con horario reducido entre mayo y septiembre; nuestro restaurante frente al mar es de temporada y funciona de octubre a abril; los paradores y la estructura de verano en la arena disminuyen.",
              "Sigue funcionando: Concha das Ostras, uno de los mejores de la ciudad, abierto todo el año; Patadacobra, operadora de buceo, funcionando normalmente, y el invierno es la mejor época para bucear acá; paseos en buggy, con agencia local activa en temporada baja; guías de paseos locales; ciclismo y mountain bike; y todos los senderos.",
              "En la posada: el desayuno frente al mar sigue exactamente igual, con la misma calidad y la misma vista; los jacuzzis de la terraza siguen climatizados, y es en invierno cuando más se disfrutan; todo lo demás funciona normalmente.",
              "Quien viene esperando el movimiento de enero se va a decepcionar. Quien viene buscando descanso, silencio y paisaje encuentra la mejor época del año.",
            ],
          },
          {
            heading: "Cómo armaríamos sus días",
            image: { src: aboutJacuzzi, alt: "Jacuzzi en la terraza de la Pousada Gaúcha con vista al mar de Bombinhas" },
            paragraphs: [
              "Esta es la parte que solemos hacer por WhatsApp, y vale la pena adelantarla acá.",
              "Para bucear: venir entre julio y septiembre, reservar el buceo para los días sin lluvia la víspera y dejar libre el día siguiente. Ayudamos a coordinar con la operadora.",
              "Para caminar: mayo, junio y octubre son los mejores meses. Salir temprano, hacer el sendero a la mañana y dejar la tarde para el jacuzzi.",
              "Para ver ballenas: agosto y septiembre, mínimo tres noches, y mirador justo después del desayuno, que es cuando el mar suele estar más calmo.",
              "Solo para descansar: cualquier mes sirve. En ese caso sugerimos lo contrario de todo: no programar nada y dejarnos indicar el plan en el momento, según cómo amanezca el día.",
              "Para quien ya conoce Bombinhas en verano: venir en octubre. El restaurante reabre, la ciudad se despierta y todavía se puede elegir dónde sentarse. Para mucha gente es el mejor mes del año acá.",
            ],
          },
          {
            heading: "Para quién el invierno en Bombinhas es perfecto",
            paragraphs: [
              "Es perfecto para: parejas que quieren tranquilidad de verdad; quienes ya conocen Bombinhas y quieren conocer su versión calma; buzos, por la visibilidad; fotógrafos y amantes del amanecer; quienes trabajan en remoto y pueden extender la estadía.",
              "Probablemente no es para: quien viaja para pasar horas dentro del mar; quien busca vida nocturna y movimiento; familias con niños que solo se divierten dentro del agua.",
            ],
          },
          {
            heading: "Nuestra escena favorita del invierno",
            paragraphs: [
              "El amanecer visto desde el deck, con el desayuno armándose detrás y toda la playa adelante. Después de 26 años, sigue siendo el momento del día que más nos gusta.",
              "Bombinhas en invierno es para quien busca encanto, descanso y paz. Para quien busca eso, lo mejor es escribirnos antes de cerrar cualquier cosa. Después de 26 años recibiendo huéspedes acá, no vendemos solo la tarifa: ayudamos a armar el itinerario, indicamos el día adecuado para cada playa y avisamos qué vale la pena y qué no en el mes del viaje.",
              "Reservando directamente en el sitio se obtiene el mejor valor. Equipo Pousada Gaúcha — anfitriones y consultores de experiencias en Bombinhas.",
            ],
          },
        ],
      },
    }}
  />
);

export default Page;
