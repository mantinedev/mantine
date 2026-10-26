import { footerLinks } from './data';
import classes from './Footer.module.css';

export function Footer() {
  return (
    <footer className={classes.footer}>
      <span>Halcyon Light Ltd, Edinburgh</span>
      <nav className={classes.links} aria-label="Footer">
        {footerLinks.map((link) => (
          <a key={link} href="#" className={classes.link}>
            {link}
          </a>
        ))}
      </nav>
    </footer>
  );
}
