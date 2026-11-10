import { useI18n } from "@/i18n/context";
import { getBookingUrl } from "@/lib/attribution";
import { UmbrellaIcon, Wind, Utensils, Bath } from "lucide-react";
import { trackInitiateCheckout } from "@/lib/pixel";
import roomGarden from "@/assets/room-garden.jpg";
import gauchaApto from "@/assets/gaucha-apto.jpg.asset.json";


const rooms = [
{
  name: "Garden",
  image: roomGarden,
  description: "As melhores opções frente ao mar, com vista deslumbrante e conforto premium para sua estadia inesquecível.",
  highlight: "Vista para o mar"
},
{
  name: "Bloco Gaúcha",
  image: gauchaApto.url,
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
  const { t, text: translate, locale, path } = useI18n();

  return (
    <section id="acomodacoes" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-secondary-foreground">{t("copy001")}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">{t("copy116")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("copy117")}</p>
        </div>

        {/* Room cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {rooms.map((room) =>
          <div
            key={translate(room.name)}
            className="group bg-card rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow duration-300">
            
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                src={room.image}
                alt={`${translate("Acomodação")} ${room.name}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy" />
              
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {translate(room.highlight)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">{translate(room.name)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{translate(room.description)}</p>
                <a
                href={getBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackInitiateCheckout}
                className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">{t("copy118")}</a>
              </div>
            </div>
          )}
        </div>

        {/* Amenities strip */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {amenities.map(({ icon: Icon, label }) =>
          <div key={translate(label)} className="flex items-center gap-2 text-muted-foreground">
              <Icon size={20} className="text-primary" />
              <span className="text-sm font-medium">{translate(label)}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default AccommodationsSection;