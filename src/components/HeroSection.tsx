import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBeach from "@/assets/hero-beach.jpg";
import aboutDeck from "@/assets/about-deck.jpg";
import aboutJacuzzi from "@/assets/about-jacuzzi.jpg";
import roomGardenDeck from "@/assets/room-garden-deck.jpg";
import breakfastBuffet from "@/assets/breakfast-buffet.jpg";

const BOOKING_URL = "https://hbook.hsystem.com.br/Booking?companyId=5cae2795ab41d51dd869d73a&checkin=04/12/2019&checkout=08/12/2019&adults=1&children=0&_gl=1*1m36n9x*_gcl_au*MTkzNTI4MzE0Mi4xNzY2MzE3MTcy#_ga=2.158433650.936447759.1773250147-595639725.1766317175";

const slides = [
{ image: heroBeach, alt: "Rooftop com jacuzzis e vista panorâmica do mar" },
{ image: aboutDeck, alt: "Deck com cadeiras e vista para a praia de Bombinhas" },
{ image: aboutJacuzzi, alt: "Jacuzzi com vista para o mar" },
{ image: roomGardenDeck, alt: "Suíte Garden com varanda e vista mar" },
{ image: breakfastBuffet, alt: "Buffet de café da manhã artesanal" }];


const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="inicio" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background images */}
      {slides.map((slide, i) =>
      <img
        key={i}
        src={slide.image}
        alt={slide.alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
        i === current ? "opacity-100" : "opacity-0"}`
        }
        loading={i === 0 ? "eager" : "lazy"} />

      )}
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay shadow-none" />

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary-foreground rounded-full p-2 transition-colors"
        aria-label="Slide anterior">
        
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary-foreground rounded-full p-2 transition-colors"
        aria-label="Próximo slide">
        
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) =>
        <button
          key={i}
          onClick={() => setCurrent(i)}
          className={`w-2.5 h-2.5 rounded-full transition-all ${
          i === current ? "bg-primary-foreground w-8" : "bg-primary-foreground/40"}`
          }
          aria-label={`Ir para slide ${i + 1}`} />

        )}
      </div>

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
            className="text-accent-foreground px-10 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity bg-sidebar-ring">
            
            ​RESERVE AGORA 
          </a>
          <a
            href="#acomodacoes"
            className="border-2 border-primary-foreground/40 text-primary-foreground px-10 py-4 rounded-lg text-lg font-medium hover:bg-primary-foreground/10 transition-colors">
            
            Conheça Nossos Quartos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>);

};

export default HeroSection;