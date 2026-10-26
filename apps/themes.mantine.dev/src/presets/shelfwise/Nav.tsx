'use client';

import { useState } from 'react';
import { IconMenu2, IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, Button, Transition, useMantineColorScheme } from '@mantine/core';
import { navLinks } from './data';
import { Logo } from './Logo';
import marigold from './Marigold.module.css';
import classes from './Nav.module.css';

const ICON_PROPS = { size: 20, stroke: 1.8 };

export function Nav() {
  const { toggleColorScheme } = useMantineColorScheme();
  const [sheetOpened, setSheetOpened] = useState(false);

  return (
    <header className={classes.nav}>
      <Logo />

      <nav className={classes.links} aria-label="Main">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className={classes.link}>
            {link.label}
          </a>
        ))}
      </nav>

      <span className={classes.spacer} />

      <div className={`${classes.actions} ${marigold.zone}`}>
        <ActionIcon onClick={toggleColorScheme} aria-label="Switch color scheme">
          <IconMoon {...ICON_PROPS} className={classes.moon} />
          <IconSun {...ICON_PROPS} className={classes.sun} />
        </ActionIcon>
        <Button
          component="a"
          href="#"
          variant="default"
          size="sm"
          className={classes.login}
          onClick={(event) => event.preventDefault()}
        >
          Log in
        </Button>
        <Button component="a" href="#demo" size="sm" className={classes.trial}>
          Start free trial
        </Button>
        <ActionIcon
          className={classes.menuButton}
          onClick={() => setSheetOpened((opened) => !opened)}
          aria-label="Open menu"
          aria-expanded={sheetOpened}
        >
          <IconMenu2 {...ICON_PROPS} />
        </ActionIcon>
      </div>

      <Transition mounted={sheetOpened} transition="pop-top-right" duration={140}>
        {(styles) => (
          <div className={classes.sheet} style={styles}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={classes.sheetLink}
                onClick={() => setSheetOpened(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              component="a"
              href="#demo"
              className={classes.sheetButton}
              onClick={() => setSheetOpened(false)}
            >
              Start free trial
            </Button>
          </div>
        )}
      </Transition>
    </header>
  );
}
