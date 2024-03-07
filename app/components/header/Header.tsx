import { root } from "./Header.css";

export function Header() {
  return (
    <header className={root}>
      <h1>Sebastian Software GmbH</h1>
      <nav>
        <ul>
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
