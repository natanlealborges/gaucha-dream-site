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
import PerguntasFrequentes from "./pages/PerguntasFrequentes.tsx";
import Acomodacoes from "./pages/Acomodacoes.tsx";
import Garden from "./pages/acomodacoes/Garden.tsx";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/acomodacoes" element={<Acomodacoes />} />
    <Route path="/acomodacoes/garden" element={<Garden />} />
    <Route path="/guias" element={<GuiasIndex />} />
    <Route path="/guias/mergulho-em-bombinhas" element={<MergulhoEmBombinhas />} />
    <Route path="/guias/bombinhas-no-inverno" element={<BombinhasNoInverno />} />
    <Route path="/guias/o-que-fazer-em-bombinhas-com-chuva" element={<BombinhasComChuva />} />
    <Route path="/guias/bombinhas-ou-gramado-no-inverno" element={<BombinhasOuGramado />} />
    <Route path="/guias/trilhas-em-bombinhas" element={<TrilhasEmBombinhas />} />
    <Route path="/guias/bombinhas-com-criancas" element={<BombinhasComCriancas />} />
    <Route path="/perguntas-frequentes" element={<PerguntasFrequentes />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
