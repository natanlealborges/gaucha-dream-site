import GuideLayout from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";
import heroBeach from "@/assets/hero-beach.jpg";
import aboutJacuzzi from "@/assets/about-jacuzzi.jpg";

const Page = () => (
  <GuideLayout
    guide={getGuide("bombinhas-no-inverno")!}
    heroImage={{ src: heroBeach, alt: "Vista aérea da Praia de Bombinhas, em frente à Pousada Gaúcha, com mar calmo e o trapiche" }}
    intro="Vale, desde que você saiba o que vem buscar. No inverno Bombinhas entrega espaço, silêncio, água muito mais transparente, trilhas com clima confortável e a chance de ver baleia da areia. O que muda é que o banho de mar fica curto e parte dos restaurantes reduz o horário. A gente recebe hóspedes aqui há 26 anos e vê a mesma cena todo ano: quem vem no inverno pela primeira vez volta achando que descobriu Bombinhas duas vezes. Esta página não é um folheto. É o que a gente responde por WhatsApp toda semana."
    sections={[
      {
        heading: "O que você ganha vindo entre maio e setembro",
        paragraphs: [
          "Espaço. Você estaciona na frente do lugar onde vai comer. Senta sem esperar. Caminha na areia escolhendo onde parar.",
          "Trilhas em clima bom. As temperaturas costumam ficar entre 13 °C e 20 °C, com pouca chuva. Quem já subiu o Morro do Macaco em janeiro sabe a diferença.",
          "Nada de taxa de entrada. A Taxa de Preservação Ambiental de Bombinhas é cobrada por veículo entre 15 de novembro e 15 de abril, e em 2026 chegou a R$ 191,50 para carros. Fora desse período não há cobrança. No inverno você entra e sai da cidade quantas vezes quiser sem pagar nada, o que muda bastante o planejamento de quem quer conhecer Porto Belo, Itapema ou a Ilha de Porto Belo no mesmo passeio.",
          "Diárias de baixa temporada. Vale para hospedagem, restaurante e passeio.",
        ],
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
    ]}
  />
);

export default Page;
