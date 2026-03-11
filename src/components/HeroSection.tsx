import heroImage from "@/assets/hero-beach.jpg";

const BOOKING_URL = "https://hbook.hsystem.com.br/Booking?companyId=5cae2795ab41d51dd869d73a&checkin=04/12/2019&checkout=08/12/2019&adults=1&children=0";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Vista aérea da Pousada Gaúcha em Bombinhas"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-sand text-sm md:text-base font-body tracking-[0.3em] uppercase mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          Bombinhas • Santa Catarina
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
          Seu refúgio à<br />
          <span className="italic font-medium">beira-mar</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: "0.6s" }}>
          Acolhimento familiar, conforto premium e acesso direto à praia de Bombinhas. A escolha ideal para suas férias inesquecíveis.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.8s" }}>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-10 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Reserve Agora
          </a>
          <a
            href="#acomodacoes"
            className="border-2 border-primary-foreground/40 text-primary-foreground px-10 py-4 rounded-lg text-lg font-medium hover:bg-primary-foreground/10 transition-colors"
          >
            Conheça Nossas Suítes
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
