import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getGuide, guidePath, guideText } from "@/data/guides";
import { useI18n } from "@/i18n/context";

const HOME_GUIDES = ["praias-de-bombinhas", "como-chegar-a-bombinhas", "quando-ir-a-bombinhas"];

/** Seção curta da home com 3 guias (PT e ES). */
const GuidesHomeSection = () => {
  const { locale: raw } = useI18n();
  if (raw === "en") return null;
  const locale = raw === "es" ? "es" : "pt";
  const prefix = locale === "es" ? "/es" : "";
  return (
    <section id="guias" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {locale === "es" ? "Guías de Bombinhas" : "Guias de Bombinhas"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {locale === "es"
              ? "Lo que respondemos todas las semanas a nuestros huéspedes, escrito por quienes viven acá."
              : "O que a gente responde toda semana aos hóspedes, escrito por quem mora aqui."}
          </p>
        </div>
        <ul className="grid md:grid-cols-3 gap-6">
          {HOME_GUIDES.map((slug) => {
            const g = getGuide(slug)!;
            const t = guideText(g, locale);
            return (
              <li key={slug}>
                <Link to={guidePath(slug, locale)} className="block h-full p-6 bg-sand/50 rounded-xl hover:bg-sand transition-colors">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{t.shortLabel}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{t.hook}</p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                    {locale === "es" ? "Leer la guía" : "Ler o guia"} <ArrowRight size={14} />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="text-center mt-10">
          <Link to={`${prefix}/guias`} className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            {locale === "es" ? "Ver todas las guías" : "Ver todos os guias"} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GuidesHomeSection;
