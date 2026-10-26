'use client';

import { useState } from 'react';
import { IconMenu2, IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, Button, Transition, useMantineColorScheme } from '@mantine/core';
import { navLinks } from './data';
import { LogoMark } from './Logo';
import classes from './NavBar.module.css';

const ICON_PROPS = { size: 20, stroke: 1.8 };

export function NavBar() {
  const { toggleColorScheme } = useMantineColorScheme();
  const [sheetOpened, setSheetOpened] = useState(false);

  return (
    <header className={classes.root}>
      <a className={classes.logo} href="#">
        <LogoMark className={classes.logoMark} />
        <span>
          <b>Friends of the Union Canal</b>
          <span>Edinburgh, since 1987</span>
        </span>
      </a>

      <nav className={classes.links} aria-label="Main">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className={classes.actions}>
        <ActionIcon
          className={classes.iconButton}
          size={40}
          onClick={toggleColorScheme}
          aria-label="Switch color scheme"
        >
          <IconMoon {...ICON_PROPS} className={classes.moon} />
          <IconSun {...ICON_PROPS} className={classes.sun} />
        </ActionIcon>
        <Button component="a" href="#donate" size="sm" color="chrome.4" className={classes.donate}>
          Donate
        </Button>
        <ActionIcon
          className={`${classes.iconButton} ${classes.menuButton}`}
          size={40}
          onClick={() => setSheetOpened((opened) => !opened)}
          aria-label="Open menu"
          aria-expanded={sheetOpened}
        >
          <IconMenu2 {...ICON_PROPS} />
        </ActionIcon>
      </div>

      <Transition mounted={sheetOpened} transition="fade-down" duration={150}>
        {(styles) => (
          <nav className={classes.sheet} style={styles} aria-label="Main">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setSheetOpened(false)}>
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </Transition>
    </header>
  );
}
