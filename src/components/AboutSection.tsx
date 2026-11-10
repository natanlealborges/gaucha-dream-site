import { useI18n } from "@/i18n/context";
import { MapPin, Star, Users, Sun } from "lucide-react";
import aboutDeck from "@/assets/about-deck.jpg";
import aboutJacuzzi from "@/assets/about-jacuzzi.jpg";
import breakfastBuffet from "@/assets/breakfast-buffet.jpg";

const features = [
{
  icon: MapPin,
  title: "À beira-mar",
  description: "Acesso direto à praia de Bombinhas, literalmente na areia."
},
{
  icon: Users,
  title: "Família",
  description: "Ideal para quem viaja com crianças, com segurança e tranquilidade."
},
{
  icon: Sun,
  title: "Café da manhã",
  description: "Delicioso café da manhã servido à beira-mar todas as manhãs."
},
{
  icon: Star,
  title: "Avaliada no TripAdvisor",
  description: "Reconhecida pela excelência no atendimento e hospitalidade."
}];


const AboutSection = () => {
  const { t, text: translate, locale, path } = useI18n();

  return (
    <section id="sobre" className="section-padding bg-sand">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Text */}
          <div>
            <p className="font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-secondary-foreground">{t("copy126")}</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">{t("copy127")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("copy128")}<strong className="text-foreground">Pousada Gaúcha</strong>{t("copy129")}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">{t("copy130")}</p>
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, description }) =>
            <div key={translate(title)} className="bg-card p-6 rounded-xl shadow-[var(--shadow-soft)]">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{translate(title)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{translate(description)}</p>
              </div>
            )}
          </div>
        </div>

        {/* Photo gallery */}
        <div className="grid md:grid-cols-3 gap-4">
          <img src={aboutDeck} alt={t("copy131")} className="w-full h-64 object-cover rounded-xl" loading="lazy" />
          <img src={aboutJacuzzi} alt={t("copy026")} className="w-full h-64 object-cover rounded-xl" loading="lazy" />
          <img src={breakfastBuffet} alt={t("copy132")} className="w-full h-64 object-cover rounded-xl" loading="lazy" />
        </div>
      </div>
    </section>);

};

export default AboutSection;