import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { useI18n } from "./context";
import { SITE_URL } from "./config";
import { translateSchema } from "./translate";

/** Shared head wrapper: translates existing metadata and JSON-LD without duplicating page components. */
export function LocaleHelmet({ children }: { children: ReactNode }) {
  const { locale, text, path } = useI18n();
  function visit(child: ReactNode): ReactNode {
    if (!isValidElement(child)) return child;
    const element = child as ReactElement<Record<string, unknown>>;
    const props = element.props;
    if (typeof element.type !== "string") return cloneElement(element, {}, Children.map(props.children as ReactNode, visit));
    const next: Record<string, unknown> = {};
    if (element.type === "meta" && typeof props.content === "string") {
      next.content = props.property === "og:url" ? localizeUrl(props.content) : text(props.content);
    }
    if (element.type === "link" && props.rel === "canonical" && typeof props.href === "string") next.href = localizeUrl(props.href);
    if (element.type === "script" && props.type === "application/ld+json" && typeof props.children === "string") {
      next.children = JSON.stringify(translateSchema(JSON.parse(props.children), locale));
    } else if (element.type === "title" && typeof props.children === "string") next.children = text(props.children);
    return cloneElement(element, next);
  }
  function localizeUrl(url: string) {
    if (!url.startsWith(SITE_URL)) return url;
    return SITE_URL + path(url.slice(SITE_URL.length) || "/");
  }
  return <Helmet>{Children.map(children, visit)}</Helmet>;
}
