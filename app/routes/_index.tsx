import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { RichText } from "~/components/richtext/RichText";

export const meta: MetaFunction = () => {
  return [
    { title: "Sebastian Software" },
    {
      name: "description",
      content:
        "Ein Team von Spezialisten für React-Entwicklung mit Fokus auf nachhaltige, innovative Lösungen mit über 20 Jahre Erfahrung.",
    },
  ];
};

export default function Index() {
  return (
    <RichText>
      <h1>Sebastian Software</h1>
      <h2>Consulting</h2>

      <p>
        Wir sind ein Team aus passionierten Experten, das sich auf die
        Entwicklung langlebiger, hochwertiger React-Anwendungen spezialisiert
        hat. Mit über 7 Jahren Fokussierung auf React bieten wir tiefgreifende
        Lösungen, die den Kern Ihrer technischen Herausforderungen treffen.
        Unser Ansatz kombiniert innovative Technologien mit einer klaren Vision
        für Nutzererfahrung und Architektur, um Produkte zu schaffen, die nicht
        nur heute, sondern auch in Zukunft begeistern. Entdecken Sie mit uns die
        Zukunft der Softwareentwicklung – nachhaltig, zuverlässig und immer
        einen Schritt voraus.
      </p>

      <p>
        <Link to="/consulting">Mehr erfahren</Link>
      </p>
    </RichText>
  );
}
