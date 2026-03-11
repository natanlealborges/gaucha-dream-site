import { MapPin, Star, Users, Sun } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "À beira-mar",
    description: "Acesso direto à praia de Bombinhas, literalmente na areia.",
  },
  {
    icon: Users,
    title: "Família",
    description: "Ideal para quem viaja com crianças, com segurança e tranquilidade.",
  },
  {
    icon: Sun,
    title: "Café da manhã",
    description: "Delicioso café da manhã servido à beira-mar todas as manhãs.",
  },
  {
    icon: Star,
    title: "Avaliada no TripAdvisor",
    description: "Reconhecida pela excelência no atendimento e hospitalidade.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-sand">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">Sobre nós</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Acolhimento e conforto desde sempre
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Pousada Gaúcha</strong>, localizada em Bombinhas/SC, é sinônimo de acolhimento familiar, conforto e profissionalismo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Situada literalmente à beira-mar, nossa pousada oferece acesso direto à praia, sendo a escolha ideal para quem viaja com crianças e busca praticidade, segurança e tranquilidade.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-card p-6 rounded-xl shadow-[var(--shadow-soft)]">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
