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

        <p className="text-center text-foreground font-semibold mb-14">
          Travelers' Choice 2026 no Tripadvisor · 4ª colocada entre os hotéis de Bombinhas
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
