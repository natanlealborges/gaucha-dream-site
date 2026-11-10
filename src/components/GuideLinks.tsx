import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getGuide, guideLocales, guidePath, guideText } from "@/data/guides";
import { useI18n } from "@/i18n/context";

/** Links internos para guias (só PT e ES — não há guias em inglês). */
const GuideLinks = ({ slugs, className = "" }: { slugs: string[]; className?: string }) => {
  const { locale: raw } = useI18n();
  if (raw === "en") return null;
  const locale = raw === "es" ? "es" : "pt";
  const items = slugs
    .map(getGuide)
    .filter((g) => g && g.published && guideLocales(g).includes(locale));
  if (!items.length) return null;
  return (
    <aside className={`p-6 bg-sand/50 rounded-xl ${className}`}>
      <p className="font-display text-lg font-bold text-foreground mb-3">
        {locale === "es" ? "Guías de Bombinhas" : "Guias de Bombinhas"}
      </p>
      <ul className="space-y-2">
        {items.map((g) => (
          <li key={g!.slug}>
            <Link to={guidePath(g!.slug, locale)} className="inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowRight size={16} />
              {guideText(g!, locale).h1}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default GuideLinks;
