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

      <h2>Selbstverständnis</h2>

      <p>
        Wir sind leidenschaftliche Experten, die sich auf die Entwicklung
        hochwertiger React-Anwendungen spezialisiert haben. Mit mehr als 7
        Jahren Erfahrung in React bieten wir maßgeschneiderte Lösungen, die Ihre
        technischen Herausforderungen genau treffen. Unser Ansatz vereint
        innovative Technologien mit klarer Nutzerorientierung und Architektur,
        um Produkte zu schaffen, die heute und in Zukunft begeistern.
      </p>

      <p>
        <Link to="/ueber">Mehr erfahren</Link>
      </p>

      <h2>Consulting</h2>

      <p>
        Gemeinsam entwickeln wir maßgeschneiderte Lösungen, die genau auf Ihre
        Anforderungen zugeschnitten sind. Unterstützt von unserer umfangreichen
        Erfahrung und technischen Expertise bieten wir Ihnen eine Partnerschaft,
        die von der Entwicklung über Beratung bis hin zu Schulungen reicht.
        Unser Ziel ist es, Ihr Team zu stärken und Ihre Vision effektiv
        umzusetzen.
      </p>

      <p>
        <Link to="/consulting">Mehr erfahren</Link>
      </p>

      <h2>Team</h2>

      <p>
        Unser Team vereint fundiertes Informatikwissen mit jahrzehntelanger
        Erfahrung in der professionellen Softwareentwicklung. Als Experten für
        moderne Frontend-Technologien haben wir ein Auge für Details und
        verpassen keine relevanten Trends. Mit Elan und Ehrgeiz treiben wir
        Projekte voran und setzen Maßstäbe für herausragende Entwickler- und
        Benutzererfahrung.
      </p>

      <p>
        <Link to="/team">Mehr erfahren</Link>
      </p>
    </RichText>
  );
}
