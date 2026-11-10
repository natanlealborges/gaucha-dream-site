import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LOCALES, LOCALE_META, switchLocalePath } from "./config";
import { useI18n } from "./context";

export function LanguageSelector({ scrolled = true }: { scrolled?: boolean }) {
  const { locale, text } = useI18n();
  const location = useLocation();
  return (
    <div aria-label={text("Idioma")} className={`inline-flex shrink-0 items-center text-xs ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
      {LOCALES.map((language, index) => (
        <span key={language} className="inline-flex items-center">
          {index > 0 && <span aria-hidden="true" className="opacity-50">|</span>}
          <Button asChild variant="link" className={`h-8 px-1.5 text-xs text-inherit ${locale === language ? "font-bold underline underline-offset-4" : "font-normal opacity-75"}`}>
            <a href={switchLocalePath(location.pathname, location.hash, language)} hrefLang={LOCALE_META[language].hreflang} aria-current={locale === language ? "page" : undefined}>{LOCALE_META[language].label}</a>
          </Button>
        </span>
      ))}
    </div>
  );
}
