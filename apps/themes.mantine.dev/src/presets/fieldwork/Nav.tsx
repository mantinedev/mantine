import { useState } from 'react';
import { IconMenu2, IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, Button, useMantineColorScheme } from '@mantine/core';
import { navLinks } from './data';
import { Logo } from './Logo';
import classes from './Fieldwork.module.css';

const ICON_PROPS = { size: 20, stroke: 1.9 };

export function Nav() {
  const { toggleColorScheme } = useMantineColorScheme();
  const [sheetOpened, setSheetOpened] = useState(false);
  const closeSheet = () => setSheetOpened(false);

  return (
    <header className={`${classes.nav} ${classes.wrap}`}>
      <Logo />
      <nav className={classes.navLinks} aria-label="Main">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <span className={classes.spacer} />
      <div className={classes.navActions}>
        <ActionIcon aria-label="Switch color scheme" onClick={toggleColorScheme}>
          <IconMoon {...ICON_PROPS} className={classes.moon} />
          <IconSun {...ICON_PROPS} className={classes.sun} />
        </ActionIcon>
        <Button component="a" href="#tickets" size="sm" className={classes.navCta}>
          Get tickets
        </Button>
        <ActionIcon
          className={classes.menuButton}
          aria-label="Open menu"
          aria-expanded={sheetOpened}
          aria-controls="fw-nav-sheet"
          onClick={() => setSheetOpened((opened) => !opened)}
        >
          <IconMenu2 {...ICON_PROPS} />
        </ActionIcon>
      </div>
      {sheetOpened && (
        <div className={classes.navSheet} id="fw-nav-sheet">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={classes.sheetLink} onClick={closeSheet}>
              {link.label}
            </a>
          ))}
          <Button component="a" href="#tickets" mt="md" onClick={closeSheet}>
            Get tickets
          </Button>
        </div>
      )}
    </header>
  );
}
