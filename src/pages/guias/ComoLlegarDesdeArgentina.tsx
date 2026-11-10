import { LocalizedGuide } from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";

const Page = () => (
  <LocalizedGuide
    guide={getGuide("como-llegar-desde-argentina-paraguay-uruguay")!}
    content={{
      es: {
        intro:
          "La mayoría de los huéspedes de Argentina, Paraguay y Uruguay llega en auto y entra a Bombinhas por la BR-101, saliendo en Porto Belo. Quienes vienen en avión aterrizan en Florianópolis o Navegantes.",
        sections: [
          {
            heading: "En auto",
            paragraphs: ["Referencias de Google Maps (consulta de noviembre de 2026), tiempo al volante sin paradas:"],
            items: [
              { title: "Desde Buenos Aires", text: "cerca de 1.800 km y 21 a 22 horas, por la RN14 y la BR-290. Lo habitual es hacerlo en dos días, con una noche en el camino." },
              { title: "Desde Asunción", text: "cerca de 1.220 km y 17 a 18 horas, por la BR-277. Uno a dos días de viaje." },
              { title: "Desde Santa Rita (Alto Paraná)", text: "cerca de 960 km y 14 a 15 horas, por la BR-277." },
              { title: "Desde Uruguay", text: "también se llega por la BR-101 hasta Porto Belo." },
            ],
          },
          {
            heading: "El tramo final",
            paragraphs: ["El tramo final es siempre la BR-101 hasta Porto Belo. Los tiempos varían según el tránsito y las obras en la ruta."],
          },
          {
            heading: "Antes de salir",
            paragraphs: ["Conviene revisar con anticipación la documentación y el seguro exigidos para circular en Brasil con un vehículo extranjero."],
          },
          {
            heading: "En avión",
            items: [
              { title: "Florianópolis", text: "a unos 80 km." },
              { title: "Navegantes", text: "a unos 50 a 60 km." },
            ],
            paragraphs: ["Para quienes tienen reserva, la posada agenda el transfer con un socio local."],
          },
          {
            heading: "Tasa ambiental (TPA)",
            paragraphs: [
              "En temporada alta, Bombinhas cobra una tasa por vehículo que entra a la ciudad, con lectura automática de la patente. En la temporada 2025/26 el cobro fue del 15 de noviembre al 15 de abril, con pago por el sitio web de la municipalidad, por tag o en tótems. Quien se queda varios días paga una sola vez; quien sale y vuelve después de 24 horas paga de nuevo. Antes de viajar, conviene confirmar el período y el valor vigentes en el sitio de la Prefeitura de Bombinhas.",
            ],
            links: [{ to: "/es/guias/como-chegar-a-bombinhas", label: "Cómo llegar a Bombinhas" }],
          },
          {
            heading: "Estacionamiento",
            paragraphs: ["La posada tiene estacionamiento gratuito."],
          },
        ],
        faqs: [
          { q: "¿Cuánto se tarda en auto desde Buenos Aires a Bombinhas?", a: "Cerca de 21 a 22 horas al volante, unos 1.800 km; lo habitual es hacerlo en dos días." },
          { q: "¿Cuánto se tarda desde Asunción?", a: "Cerca de 17 a 18 horas al volante, unos 1.220 km." },
          { q: "¿La posada tiene estacionamiento?", a: "Sí, gratuito." },
        ],
      },
    }}
  />
);

export default Page;
