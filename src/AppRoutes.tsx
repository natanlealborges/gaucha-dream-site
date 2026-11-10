import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import GuiasIndex from "./pages/guias/GuiasIndex.tsx";
import MergulhoEmBombinhas from "./pages/guias/MergulhoEmBombinhas.tsx";
import BombinhasNoInverno from "./pages/guias/BombinhasNoInverno.tsx";
import BombinhasComChuva from "./pages/guias/BombinhasComChuva.tsx";
import BombinhasOuGramado from "./pages/guias/BombinhasOuGramado.tsx";
import TrilhasEmBombinhas from "./pages/guias/TrilhasEmBombinhas.tsx";
import BombinhasComCriancas from "./pages/guias/BombinhasComCriancas.tsx";
import PraiasDeBombinhas from "./pages/guias/PraiasDeBombinhas.tsx";
import ComoChegarABombinhas from "./pages/guias/ComoChegarABombinhas.tsx";
import QuandoIrABombinhas from "./pages/guias/QuandoIrABombinhas.tsx";
import OQueFazerEmBombinhas from "./pages/guias/OQueFazerEmBombinhas.tsx";
import OndeComerEmBombinhas from "./pages/guias/OndeComerEmBombinhas.tsx";
import ComoLlegarDesdeArgentina from "./pages/guias/ComoLlegarDesdeArgentina.tsx";
import PerguntasFrequentes from "./pages/PerguntasFrequentes.tsx";
import Acomodacoes from "./pages/Acomodacoes.tsx";
import Garden from "./pages/acomodacoes/Garden.tsx";
import BlocoGaucha from "./pages/acomodacoes/BlocoGaucha.tsx";
import BlocoPraia from "./pages/acomodacoes/BlocoPraia.tsx";
import PousadaPeNaAreia from "./pages/PousadaPeNaAreia.tsx";
import ServicoDePraia from "./pages/ServicoDePraia.tsx";
import CafeDaManha from "./pages/CafeDaManha.tsx";
import Jacuzzis from "./pages/Jacuzzis.tsx";
import { LocaleProvider } from "./i18n/context";
import { LanguageSeo } from "./i18n/Seo";

const translatedPages = [
  { path: "", Page: Index },
  { path: "/pousada-pe-na-areia-bombinhas", Page: PousadaPeNaAreia },
  { path: "/servico-de-praia", Page: ServicoDePraia },
  { path: "/cafe-da-manha", Page: CafeDaManha },
  { path: "/jacuzzis", Page: Jacuzzis },
  { path: "/acomodacoes", Page: Acomodacoes },
  { path: "/acomodacoes/garden", Page: Garden },
  { path: "/acomodacoes/bloco-gaucha", Page: BlocoGaucha },
  { path: "/acomodacoes/bloco-praia", Page: BlocoPraia },
  { path: "/perguntas-frequentes", Page: PerguntasFrequentes },
];

/** Guias em PT e ES (mesmo slug); o guia só em espanhol fica apenas em /es. */
const bilingualGuides = [
  { slug: "praias-de-bombinhas", Page: PraiasDeBombinhas },
  { slug: "como-chegar-a-bombinhas", Page: ComoChegarABombinhas },
  { slug: "quando-ir-a-bombinhas", Page: QuandoIrABombinhas },
  { slug: "o-que-fazer-em-bombinhas", Page: OQueFazerEmBombinhas },
  { slug: "onde-comer-em-bombinhas", Page: OndeComerEmBombinhas },
  { slug: "bombinhas-no-inverno", Page: BombinhasNoInverno },
  { slug: "trilhas-em-bombinhas", Page: TrilhasEmBombinhas },
  { slug: "bombinhas-com-criancas", Page: BombinhasComCriancas },
];

const AppRoutes = () => (
  <LocaleProvider>
  <LanguageSeo />
  <Routes>
    {["es", "en"].flatMap((locale) => translatedPages.map(({ path, Page }) => (
      <Route key={`${locale}${path}`} path={`/${locale}${path}`} element={<Page />} />
    )))}
    <Route path="/" element={<Index />} />
    <Route path="/pousada-pe-na-areia-bombinhas" element={<PousadaPeNaAreia />} />
    <Route path="/servico-de-praia" element={<ServicoDePraia />} />
    <Route path="/cafe-da-manha" element={<CafeDaManha />} />
    <Route path="/jacuzzis" element={<Jacuzzis />} />
    <Route path="/acomodacoes" element={<Acomodacoes />} />
    <Route path="/acomodacoes/garden" element={<Garden />} />
    <Route path="/acomodacoes/bloco-gaucha" element={<BlocoGaucha />} />
    <Route path="/acomodacoes/bloco-praia" element={<BlocoPraia />} />
    <Route path="/guias" element={<GuiasIndex />} />
    <Route path="/es/guias" element={<GuiasIndex />} />
    {bilingualGuides.flatMap(({ slug, Page }) => [
      <Route key={`pt-${slug}`} path={`/guias/${slug}`} element={<Page />} />,
      <Route key={`es-${slug}`} path={`/es/guias/${slug}`} element={<Page />} />,
    ])}
    <Route path="/es/guias/como-llegar-desde-argentina-paraguay-uruguay" element={<ComoLlegarDesdeArgentina />} />
    <Route path="/guias/mergulho-em-bombinhas" element={<MergulhoEmBombinhas />} />
    <Route path="/guias/o-que-fazer-em-bombinhas-com-chuva" element={<BombinhasComChuva />} />
    <Route path="/guias/bombinhas-ou-gramado-no-inverno" element={<BombinhasOuGramado />} />
    <Route path="/perguntas-frequentes" element={<PerguntasFrequentes />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
  </LocaleProvider>
);

export default AppRoutes;
