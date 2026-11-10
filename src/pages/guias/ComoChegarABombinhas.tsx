import { LocalizedGuide } from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";

const Page = () => (
  <LocalizedGuide
    guide={getGuide("como-chegar-a-bombinhas")!}
    content={{
      pt: {
        intro:
          "Chega-se a Bombinhas pela BR-101, saindo em Porto Belo. Os aeroportos mais próximos são Navegantes (cerca de 50 a 60 km) e Florianópolis (cerca de 80 km). Não há ônibus direto dos aeroportos: o último trecho é de transfer, aplicativo ou carro alugado.",
        sections: [
          {
            heading: "De avião",
            items: [
              { title: "Navegantes (NVT)", text: "o mais próximo, a cerca de 50 a 60 km." },
              { title: "Florianópolis (FLN)", text: "cerca de 80 km, com mais opções de voo." },
              { title: "Do aeroporto até a pousada", text: "transfer, carro alugado ou aplicativo. Para quem tem reserva, a Pousada Gaúcha agenda o transfer com parceiro local." },
            ],
          },
          {
            heading: "De carro",
            paragraphs: [
              "Pela BR-101, a saída é em Porto Belo, tanto para quem vem do Norte (Curitiba, São Paulo) quanto do Sul (Florianópolis, Porto Alegre).",
              "A cidade tem dois acessos: o principal entra por Bombas e leva ao centro; o segundo chega por Zimbros e Canto Grande. No verão vale conferir o trânsito dos dois antes de escolher.",
              "Em janeiro, Réveillon e Carnaval a entrada da cidade fica mais cheia. Chegar pela manhã cedo ou à noite costuma ser mais rápido.",
              "A pousada tem estacionamento gratuito.",
            ],
          },
          {
            heading: "Taxa de Preservação Ambiental (TPA)",
            paragraphs: [
              "Na alta temporada, Bombinhas cobra uma taxa por veículo que entra na cidade, com leitura automática da placa. Na temporada 2025/26 a cobrança foi de 15 de novembro a 15 de abril, com pagamento pelo site da prefeitura, por tag ou em totens. Quem fica vários dias paga uma vez; quem sai e volta depois de 24 horas paga de novo. Confira o período e o valor vigentes no site da Prefeitura de Bombinhas antes de viajar.",
            ],
          },
          {
            heading: "De ônibus",
            paragraphs: [
              "As linhas de Florianópolis chegam até Itapema, a cerca de 20 km. De lá, segue-se de transfer, táxi ou aplicativo.",
            ],
          },
        ],
        faqs: [
          { q: "Qual o aeroporto mais perto de Bombinhas?", a: "Navegantes, a cerca de 50 a 60 km. Florianópolis fica a cerca de 80 km." },
          { q: "Precisa de carro em Bombinhas?", a: "Para ficar na Praia de Bombinhas, não: restaurantes e passeios ficam a pé. Para conhecer Mariscal, Zimbros e Tainha, o carro ajuda." },
          { q: "A pousada oferece transfer?", a: "Para quem tem reserva, a Pousada Gaúcha agenda o transfer com parceiro local." },
        ],
      },
      es: {
        intro:
          "A Bombinhas se llega por la BR-101, saliendo en Porto Belo. Los aeropuertos más cercanos son Navegantes (cerca de 50 a 60 km) y Florianópolis (cerca de 80 km). No hay ómnibus directo desde los aeropuertos: el último tramo se hace en transfer, aplicación de viajes o auto alquilado.",
        sections: [
          {
            heading: "En avión",
            items: [
              { title: "Navegantes (NVT)", text: "el más cercano, a unos 50 a 60 km." },
              { title: "Florianópolis (FLN)", text: "a unos 80 km, con más opciones de vuelos." },
              { title: "Del aeropuerto a la posada", text: "transfer, auto alquilado o aplicación de viajes. Para quienes tienen reserva, la Pousada Gaúcha agenda el transfer con un socio local." },
            ],
          },
          {
            heading: "En auto",
            paragraphs: [
              "Por la BR-101, la salida es en Porto Belo, tanto para quien viene del norte (Curitiba, São Paulo) como del sur (Florianópolis, Porto Alegre).",
              "La ciudad tiene dos accesos: el principal entra por Bombas y lleva al centro; el segundo llega por Zimbros y Canto Grande. En verano conviene revisar el tránsito de los dos antes de elegir.",
              "En enero, Año Nuevo y Carnaval la entrada a la ciudad está más cargada. Llegar temprano a la mañana o a la noche suele ser más rápido.",
              "La posada tiene estacionamiento gratuito.",
            ],
          },
          {
            heading: "Tasa de Preservación Ambiental (TPA)",
            paragraphs: [
              "En temporada alta, Bombinhas cobra una tasa por vehículo que entra a la ciudad, con lectura automática de la patente. En la temporada 2025/26 el cobro fue del 15 de noviembre al 15 de abril, con pago por el sitio web de la municipalidad, por tag o en tótems. Quien se queda varios días paga una sola vez; quien sale y vuelve después de 24 horas paga de nuevo. Antes de viajar, conviene confirmar el período y el valor vigentes en el sitio de la Prefeitura de Bombinhas.",
            ],
          },
          {
            heading: "En ómnibus",
            paragraphs: [
              "Las líneas desde Florianópolis llegan hasta Itapema, a unos 20 km. Desde allí se sigue en transfer, taxi o aplicación de viajes.",
            ],
          },
        ],
        faqs: [
          { q: "¿Cuál es el aeropuerto más cercano a Bombinhas?", a: "Navegantes, a unos 50 a 60 km. Florianópolis está a unos 80 km." },
          { q: "¿Hace falta auto en Bombinhas?", a: "Para quedarse en la Praia de Bombinhas, no: restaurantes y paseos quedan a pie. Para conocer Mariscal, Zimbros y Tainha, el auto ayuda." },
          { q: "¿La posada ofrece transfer?", a: "Para quienes tienen reserva, la Pousada Gaúcha agenda el transfer con un socio local." },
        ],
      },
    }}
  />
);

export default Page;
