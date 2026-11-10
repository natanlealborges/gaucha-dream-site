import { useI18n } from "@/i18n/context";
import { getWhatsAppUrl } from "@/lib/attribution";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { publishedGuides } from "@/data/guides";
import { GUIDES_PUBLISHED } from "@/config/site";

const Footer = () => {
  const { t, text: translate, locale, path } = useI18n();

  return (
    <footer className="bg-foreground text-primary-foreground/70 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={logo} alt={t("copy606")} className="h-10 w-10 rounded-full object-cover" />
              <h3 className="font-display text-xl font-bold text-primary-foreground">Pousada Gaúcha</h3>
            </div>
            <p className="text-sm">{t("copy009")}</p>
            <a
              href="https://www.instagram.com/pousadagaucha/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors mt-3 text-sm"
            >
              <Instagram size={16} />
              @pousadagaucha
            </a>
          </div>

          <div className="text-sm space-y-1">
            <p className="text-primary-foreground font-semibold mb-3">{t("copy005")}</p>
            <a href={getWhatsAppUrl(locale)} target="_blank" rel="noopener noreferrer" className="block hover:text-primary-foreground transition-colors">
              WhatsApp: (47) 99791-0034
            </a>
            <a href="tel:+554733692472" className="block hover:text-primary-foreground transition-colors">
              Telefone: (47) 3369-2472
            </a>
            <p>reservas@pousadagaucha.com.br</p>
            <p className="pt-2">R. Cascudo, 10-A - Beira Mar</p>
            <p>{t("copy012")}</p>
          </div>

          {/* Seção "Guia de Bombinhas" oculta enquanto GUIDES_PUBLISHED = false (ver src/config/site.ts) */}
          {GUIDES_PUBLISHED && locale === "pt" && (
          <div className="text-sm md:col-span-2">
            <p className="text-primary-foreground font-semibold mb-3">{t("copy013")}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
              {publishedGuides().map((g) => (
                <li key={g.slug}>
                  <Link
                    to={path(`/guias/${g.slug}`)}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    {g.shortLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          )}

          <div className="text-sm space-y-1">
            <p className="text-primary-foreground font-semibold mb-3">{t("copy014")}</p>
            <Link to={path("/pousada-pe-na-areia-bombinhas")} className="block hover:text-primary-foreground transition-colors">{t("copy015")}</Link>
            <Link to={path("/servico-de-praia")} className="block hover:text-primary-foreground transition-colors">{t("copy016")}</Link>
            <Link to={path("/cafe-da-manha")} className="block hover:text-primary-foreground transition-colors">{t("copy017")}</Link>
            <Link to={path("/jacuzzis")} className="block hover:text-primary-foreground transition-colors">{t("copy018")}</Link>
            <Link to={path("/acomodacoes")} className="block hover:text-primary-foreground transition-colors">{t("copy001")}</Link>
            <Link to={path("/acomodacoes/garden")} className="block hover:text-primary-foreground transition-colors">
              Bloco Garden
            </Link>
            <Link to={path("/acomodacoes/bloco-gaucha")} className="block hover:text-primary-foreground transition-colors">
              Bloco Gaúcha
            </Link>
            <Link to={path("/acomodacoes/bloco-praia")} className="block hover:text-primary-foreground transition-colors">
              Bloco Praia
            </Link>
            <Link to={path("/perguntas-frequentes")} className="block hover:text-primary-foreground transition-colors">{t("copy022")}</Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()}{t("copy023")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
