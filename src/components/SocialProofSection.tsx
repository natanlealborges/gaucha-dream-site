const platforms = [
  {
    score: "4,7",
    name: "Google",
    count: "mais de 1.100 avaliações",
    href: "https://www.google.com/maps/search/?api=1&query=Pousada+Ga%C3%BAcha+Bombinhas",
  },
  {
    score: "4,7",
    name: "Tripadvisor",
    count: "mais de 400 avaliações",
    href: "https://www.tripadvisor.com.br/Hotel_Review-g612476-d4512999-Reviews-Pousada_Gaucha-Bombinhas_State_of_Santa_Catarina.html",
  },
];

const themes = [
  {
    title: "Nossa equipe tem nome",
    text: "Nas avaliações, hóspedes citam Luiz, Edson, Fabinho, Marcelo e João pelo nome. Isso não é comum em hotelaria, e é a coisa da qual mais nos orgulhamos.",
  },
  {
    title: "Pé na areia é literal",
    text: "A localização é o item mais bem avaliado da Pousada Gaúcha, com nota máxima no Tripadvisor. Da porta até a areia da Praia de Bombinhas não se atravessa rua.",
  },
  {
    title: "O café da manhã à beira-mar",
    text: "É o que mais aparece nos comentários depois do atendimento. Todo produzido dentro da pousada e servido de frente para o mar, das 7h30 às 10h.",
  },
  {
    title: "O serviço de praia",
    text: "Cadeiras e guarda-sóis montados antes de você chegar, com alguém cuidando da sua estrutura o dia inteiro. Hóspedes costumam dizer que nem em resort encontraram isso.",
  },
  {
    title: "Gente que volta",
    text: "Boa parte das nossas reservas é de famílias que retornam há anos, algumas desde antes dos filhos nascerem. São 26 anos recebendo as mesmas pessoas.",
  },
];

const quotes = [
  {
    title: "16 anos voltando",
    quote: "Há 16 anos passo férias em Bombinhas com minha família e a Pousada Gaúcha sempre foi uma ótima opção.",
    author: "Stay33542671999",
    meta: "TripAdvisor · dezembro de 2023 · fidelidade + localização",
  },
  {
    title: "Além do esperado",
    quote: "Um funcionário da recepção pegou o carro próprio e me levou até uma farmácia em Bombas para comprar um remédio — algo que nunca vi antes.",
    author: "Mano",
    meta: "TripAdvisor · junho de 2023 · atendimento",
  },
  {
    title: "Serviço de praia que surpreende",
    quote: "Não precisa se preocupar com cadeiras e guarda-sol, pois são oferecidos e o melhor: tudo montado, você só vai pra praia para curtir.",
    author: "Ana Carolina V.",
    meta: "TripAdvisor · abril de 2025 · serviço de praia",
  },
  {
    title: "Uma família para atender sua família",
    quote: "Organização e limpeza excelentes! Enfim, uma família para atender sua família!",
    author: "Advocacia T.",
    meta: "TripAdvisor · fevereiro de 2025 · limpeza + equipe",
  },
  {
    title: "Vista e jacuzzi",
    quote: "O nascer do sol da varanda do quarto foi um dos pontos altos da viagem. Poder usufruir da jacuzzi quentinha no fim do dia também foi muito bacana.",
    author: "Nanci Z.",
    meta: "TripAdvisor · julho de 2025 · vista + jacuzzi",
  },
  {
    title: "Inverno na praia — e faria de novo",
    quote: "Tem 4 ofurôs quentíssimos na cobertura com a vista para o mar e floresta! Inverno na praia? Pois falo que vou novamente.",
    author: "Loivaeildo",
    meta: "TripAdvisor · julho de 2023 · jacuzzi + baixa temporada",
  },
  {
    title: "Pertinho da passarela das baleias",
    quote: "Pé na areia. Na melhor praia de Bombinhas, pertinho da passarela pra observar as baleias. Bem no centrinho, perto de ótimos restaurantes.",
    author: "Dionatan Z.",
    meta: "TripAdvisor · junho de 2024 · localização",
  },
  {
    title: "Com bebê, sem complicação",
    quote: "A experiência da hospedagem à beira-mar facilita muito para quem tem bebê! Indicamos e voltaremos com certeza.",
    author: "Thais M.",
    meta: "TripAdvisor · abril de 2024 · viagem com bebê",
  },
  {
    title: "O Sr. Luiz",
    quote: "Serviço de praia: ótimo. Sr. Luis sempre muito gentil, organizado e prestativo.",
    author: "Bianca Catharine",
    meta: "TripAdvisor · maio de 2024 · equipe + estrutura",
  },
  {
    title: "Bolo de aniversário",
    quote: "Nosso amigo estava de aniversário e a equipe do café com muito carinho preparou um bolo delicioso para comemorarmos.",
    author: "Taíse M.",
    meta: "TripAdvisor · março de 2024 · celebrações",
  },
];

const TRIPADVISOR_URL =
  "https://www.tripadvisor.com.br/Hotel_Review-g612476-d4512999-Reviews-Pousada_Gaucha-Bombinhas_State_of_Santa_Catarina.html";

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho com números reais */}
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            O que dizem quem já ficou
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Números reais, verificáveis nas próprias plataformas. Atualizados em setembro de 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="bg-background rounded-xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow duration-300 text-center flex flex-col items-center justify-center"
            >
              <span className="font-display text-4xl font-bold text-foreground mb-2">
                {p.score}
              </span>
              <span className="text-foreground font-semibold mb-1">{p.name}</span>
              <span className="text-muted-foreground text-sm">{p.count}</span>
            </a>
          ))}
        </div>

        <p className="text-center text-foreground font-semibold mb-2">
          1ª colocada entre as pousadas de Bombinhas no Tripadvisor
        </p>
        <p className="text-center text-muted-foreground text-sm mb-14">
          Travelers' Choice 2026 · 4ª colocada também no ranking geral de hotéis de Bombinhas · Posições verificadas em setembro de 2026
        </p>

        {/* O que mais aparece nas avaliações */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((t) => (
            <div
              key={t.title}
              className="bg-background rounded-xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow duration-300"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {t.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t.text}
              </p>
            </div>
          ))}
        </div>

        {/* Citações de hóspedes */}
        <div className="mt-14">
          <p className="text-center text-foreground font-semibold mb-8">
            O que hóspedes escreveram no TripAdvisor
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {quotes.map((q) => (
              <div
                key={q.title}
                className="bg-background rounded-xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow duration-300"
              >
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {q.title}
                </h3>
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p className="text-foreground font-semibold">{q.author}</p>
                <p className="text-muted-foreground text-sm">{q.meta}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6">
            Estas e todas as outras avaliações estão públicas{" "}
            <a
              href={TRIPADVISOR_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-primary hover:underline"
            >
              no Tripadvisor
            </a>
            .
          </p>
        </div>

        {/* Chamada */}
        <p className="text-center text-muted-foreground mt-14">
          Prefira ler por conta própria. Todas as avaliações estão públicas no{" "}
          <a
            href={platforms[0].href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary hover:underline"
          >
            Google
          </a>{" "}
          e no{" "}
          <a
            href={platforms[1].href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary hover:underline"
          >
            Tripadvisor
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default SocialProofSection;
