import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">Pousada Gaúcha</h3>
            <p className="text-sm">Bombinhas, Santa Catarina</p>
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
          <div className="text-sm space-y-1 md:text-center">
            <p>(47) 9 9791-0034</p>
            <p>(47) 3369-2472</p>
            <p>reservas@pousadagaucha.com.br</p>
          </div>
          <div className="text-sm md:text-right">
            <p>Rua Castanheta, 1127</p>
            <p>Bombinhas - SC, Brasil</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} Pousada Gaúcha. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
