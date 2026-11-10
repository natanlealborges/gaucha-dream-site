import { useI18n } from "@/i18n/context";
import { getBookingUrl, getWhatsAppUrl } from "@/lib/attribution";
import { trackInitiateCheckout } from "@/lib/pixel";



const CTASection = () => {
  const { t, text: translate, locale, path } = useI18n();

  return (
    <section className="section-padding bg-foreground text-primary-foreground text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">{t("copy133")}</h2>
        <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">{t("copy134")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={getBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInitiateCheckout}
            className="bg-green-500 text-primary-foreground px-10 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >{t("copy135")}</a>
          <a
            href={getWhatsAppUrl(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary-foreground/30 text-primary-foreground px-10 py-4 rounded-lg text-lg font-medium hover:bg-primary-foreground/10 transition-colors"
          >{t("copy136")}</a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
