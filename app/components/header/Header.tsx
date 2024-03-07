import { navigation, navigationList, root } from "./Header.css";

export function Header() {
  return (
    <header className={root}>
      <h1>Sebastian Software GmbH</h1>
      <nav className={navigation}>
        <ul className={navigationList}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
