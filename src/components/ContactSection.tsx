import { Phone, Mail, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5547997910034&text&type=phone_number&app_absent=0";

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-secondary-foreground">Contato</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          Entre em contato
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
          Estamos prontos para ajudar a planejar suas férias perfeitas em Bombinhas.
        </p>

        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
              <Phone size={22} className="text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm mb-2">Telefone</p>
              <a href="tel:+554733936985" className="text-muted-foreground text-sm hover:text-primary">(47) 3393-6985</a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
              <Mail size={22} className="text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Email</p>
              <a href="mailto:reservas@pousadagaucha.com.br" className="text-muted-foreground text-sm hover:text-primary break-all">
                reservas@pousadagaucha.com.br
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
              <MapPin size={22} className="text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Endereço</p>
              <p className="text-muted-foreground text-sm">Rua Castanheta, 1127<br />Bombinhas - SC</p>
            </div>
          </div>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent-foreground px-10 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity bg-green-500">
          
          Fale pelo WhatsApp
        </a>
      </div>
    </section>);

};

export default ContactSection;