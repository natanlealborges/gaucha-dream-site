import { UmbrellaIcon, Wind, Utensils, Bath } from "lucide-react";
import roomGarden from "@/assets/room-garden.jpg";

const BOOKING_URL = "https://hbook.hsystem.com.br/Booking?companyId=5cae2795ab41d51dd869d73a&checkin=04/12/2019&checkout=08/12/2019&adults=1&children=0&_gl=1*1m36n9x*_gcl_au*MTkzNTI4MzE0Mi4xNzY2MzE3MTcy#_ga=2.158433650.936447759.1773250147-595639725.1766317175";

const rooms = [
{
  name: "Garden",
  image: roomGarden,
  description: "As melhores opções frente ao mar, com vista deslumbrante e conforto premium para sua estadia inesquecível.",
  highlight: "Vista para o mar"
},
{
  name: "Bloco Gaúcha",
  image: "/lovable-uploads/49227ca8-0666-4332-8d04-b8d45a80310e.jpg",
  description: "Apartamentos amplos, perfeitos para famílias ou grupos que precisam de mais espaço e comodidade.",
  highlight: "Ideal para famílias"
},
{
  name: "Bloco Praia",
  image: "/lovable-uploads/bdf75423-2928-485e-9c80-d580d5d99039.jpg",
  description: "A acomodação mais próxima do café da manhã à beira-mar, ideal para quem valoriza praticidade e fácil acesso.",
  highlight: "Perto do café da manhã"
}];


const amenities = [
{ icon: UmbrellaIcon, label: "Serviço de praia" },
{ icon: Wind, label: "Ar-condicionado" },
{ icon: Utensils, label: "Restaurante (out–abr)" },
{ icon: Bath, label: "Jacuzzis panorâmicas" }];


const AccommodationsSection = () => {
  return (
    <section id="acomodacoes" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">Acomodações</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Conforto à beira-mar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Todos os apartamentos são equipados com cozinha completa, ar-condicionado  decoração aconchegante e muita comodidade para suas férias.

          </p>
        </div>

        {/* Room cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {rooms.map((room) =>
          <div
            key={room.name}
            className="group bg-card rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow duration-300">
            
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                src={room.image}
                alt={`Acomodação ${room.name}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy" />
              
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {room.highlight}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">{room.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{room.description}</p>
                <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                
                  Reservar
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Amenities strip */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {amenities.map(({ icon: Icon, label }) =>
          <div key={label} className="flex items-center gap-2 text-muted-foreground">
              <Icon size={20} className="text-primary" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default AccommodationsSection;