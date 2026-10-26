import { IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, Button, useMantineColorScheme } from '@mantine/core';
import { NAV_LINKS } from './data';
import classes from './PianoLessons.module.css';

const ICON_PROPS = { size: 20, stroke: 1.7 };

export function Header() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <header className={`${classes.wrap} ${classes.top}`}>
      <a className={classes.name} href="#">
        <b>Anouk Verbeek</b>
        <span>Piano lessons in Utrecht and online</span>
      </a>
      <nav className={classes.nav} aria-label="Main">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className={classes.topActions}>
        <ActionIcon onClick={toggleColorScheme} aria-label="Switch color scheme">
          <IconMoon {...ICON_PROPS} className={classes.moon} />
          <IconSun {...ICON_PROPS} className={classes.sun} />
        </ActionIcon>
        <Button component="a" href="#book" size="xs" className={classes.topBook}>
          Book a lesson
        </Button>
      </div>
    </header>
  );
}
