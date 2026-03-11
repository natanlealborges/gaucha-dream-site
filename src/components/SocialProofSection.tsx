import { Star } from "lucide-react";

const reviews = [
  {
    name: "Mariana S.",
    location: "São Paulo, SP",
    rating: 5,
    text: "Lugar incrível! A localização é perfeita, literalmente pé na areia. O café da manhã é delicioso e o atendimento da família é impecável. Voltaremos com certeza!",
    date: "Fev 2025",
  },
  {
    name: "Roberto C.",
    location: "Curitiba, PR",
    rating: 5,
    text: "Melhor pousada de Bombinhas! As jacuzzis no rooftop com vista para o mar são um sonho. Perfeito para família, nossos filhos adoraram.",
    date: "Jan 2025",
  },
  {
    name: "Fernanda L.",
    location: "Porto Alegre, RS",
    rating: 5,
    text: "Já é a terceira vez que nos hospedamos e sempre superamos as expectativas. Acolhimento familiar que faz toda a diferença. Recomendo de olhos fechados!",
    date: "Dez 2024",
  },
];

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        {/* TripAdvisor badge */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-background px-5 py-2.5 rounded-full shadow-[var(--shadow-soft)] mb-6">
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt="TripAdvisor"
              className="h-6"
              loading="lazy"
            />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Amada pelos hóspedes
          </h2>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={22}
                  className="fill-accent text-accent"
                />
              ))}
            </div>
            <span className="text-foreground font-bold text-xl">4.8</span>
            <span className="text-muted-foreground text-sm">
              · 320+ avaliações
            </span>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Eleita uma das melhores pousadas de Bombinhas no TripAdvisor. Veja o
            que nossos hóspedes dizem.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-background rounded-xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-5 text-sm italic">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground font-semibold text-sm">
                    {review.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {review.location}
                  </p>
                </div>
                <span className="text-muted-foreground text-xs">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
