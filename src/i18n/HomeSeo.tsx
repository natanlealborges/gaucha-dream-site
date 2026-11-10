import { Helmet } from "react-helmet-async";
import { useI18n } from "./context";
import { absoluteUrl } from "./config";
import { translateSchema } from "./translate";
import { siteSchemas } from "./siteSchema";

export function HomeSeo() {
  const { locale, text } = useI18n();
  const title = text("Pousada pé na areia em Bombinhas/SC · Pousada Gaúcha");
  const description = text("Pousada frente mar em Bombinhas/SC. Jacuzzi na cobertura, café à beira-mar e o acolhimento de uma família gaúcha há 26 anos. Reserve direto pelo site.");
  return <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={absoluteUrl("/", locale)} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={absoluteUrl("/", locale)} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={text("Pousada frente mar em Bombinhas/SC. Jacuzzi na cobertura, café à beira-mar e acolhimento familiar há 26 anos.")} />
    {locale !== "pt" && siteSchemas.map((schema) => <script key={schema["@type"]} type="application/ld+json">{JSON.stringify(translateSchema(schema, locale))}</script>)}
  </Helmet>;
}
