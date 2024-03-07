import { navigation, navigationList, root } from "./Header.css";

export function Header() {
  return (
    <header className={root}>
      <h1>Sebastian Software GmbH</h1>
      <p>Erfahrung | Klarheit | Begeisterung</p>
      <nav className={navigation}>
        <ul className={navigationList}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/ueber">Über</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="/consulting">Consulting</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
