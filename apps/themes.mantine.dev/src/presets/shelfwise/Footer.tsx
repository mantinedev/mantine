import { footerColumns } from './data';
import { Logo } from './Logo';
import classes from './Footer.module.css';

const preventDefault = (event: React.MouseEvent) => event.preventDefault();

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.brand}>
        <Logo />
        <p>
          Made in Bristol by former booksellers, for the shops that keep high streets interesting.
        </p>
      </div>
      {footerColumns.map((column) => (
        <div key={column.title}>
          <h4 className={classes.heading}>{column.title}</h4>
          <ul className={classes.links}>
            {column.links.map((link) => (
              <li key={link}>
                <a href="#" onClick={preventDefault}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className={classes.legal}>
        <span>© 2026 Shelfwise Ltd</span>
        <span className={classes.legalLinks}>
          <a href="#" onClick={preventDefault}>
            Privacy
          </a>
          <a href="#" onClick={preventDefault}>
            Terms
          </a>
        </span>
      </div>
    </footer>
  );
}
