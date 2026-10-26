import { Title } from '@mantine/core';
import { NAV_LINKS } from './data';
import { Logo } from './Logo';
import classes from './Saltwater.module.css';

const TRAVEL_LINKS = NAV_LINKS.filter((link) => link.href !== '#islands');
const HELP_LINKS = ['Accessibility on board', 'Travelling with pets', 'Contact'];

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.brand}>
        <Logo />
        <p>
          An island-hopping pass for the Inner and Outer Hebrides, run from the harbour office in
          Oban.
        </p>
      </div>
      <div>
        <Title order={4} className={classes.footerTitle}>
          Travel
        </Title>
        <ul>
          {TRAVEL_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Title order={4} className={classes.footerTitle}>
          Help
        </Title>
        <ul>
          {HELP_LINKS.map((label) => (
            <li key={label}>
              <a href="#" onClick={(event) => event.preventDefault()}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className={classes.credits}>
        Photos from Wikimedia Commons: Luskentyre by A_Peach (CC BY 2.0); Barra airport by
        calflier001 (CC BY-SA 2.0); Tobermory by Zakhx150 (CC BY-SA 4.0); Iona Abbey by August
        Schwerdfeger (CC BY 4.0); Callanish Stones by SidBaility (CC BY-SA 4.0); Fingal’s Cave by
        Luk (CC BY-SA 4.0); puffin by Jacob Spinks (CC BY 2.0); ferry near Oban by Colin Grice (CC
        BY-SA 2.0). Saltwater Pass is a fictional service.
      </p>
    </footer>
  );
}
