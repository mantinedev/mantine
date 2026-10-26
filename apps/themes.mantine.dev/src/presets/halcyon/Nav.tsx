import { useState } from 'react';
import { IconMenu, IconMoon, IconShoppingBag, IconSun } from '@tabler/icons-react';
import { ActionIcon, Indicator, useMantineColorScheme } from '@mantine/core';
import { navLinks } from './data';
import classes from './Nav.module.css';

const ICON_PROPS = { size: 20, stroke: 1.6 };

interface NavProps {
  cartCount: number;
  onCartOpen: () => void;
}

export function Nav({ cartCount, onCartOpen }: NavProps) {
  const { toggleColorScheme } = useMantineColorScheme();
  const [sheetOpened, setSheetOpened] = useState(false);

  return (
    <>
      <header className={classes.nav}>
        <a className={classes.logo} href="#">
          <i aria-hidden="true" />
          Halcyon
        </a>

        <nav className={classes.links} aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={classes.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <span className={classes.spacer} />

        <div className={classes.actions}>
          <ActionIcon onClick={toggleColorScheme} aria-label="Switch color scheme">
            <IconMoon {...ICON_PROPS} className={classes.moon} />
            <IconSun {...ICON_PROPS} className={classes.sun} />
          </ActionIcon>
          <Indicator inline label={cartCount} disabled={cartCount === 0}>
            <ActionIcon
              onClick={onCartOpen}
              aria-label={`Open cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
            >
              <IconShoppingBag {...ICON_PROPS} />
            </ActionIcon>
          </Indicator>
          <ActionIcon
            className={classes.menuButton}
            onClick={() => setSheetOpened((opened) => !opened)}
            aria-label="Open menu"
            aria-expanded={sheetOpened}
          >
            <IconMenu {...ICON_PROPS} />
          </ActionIcon>
        </div>
      </header>

      {sheetOpened && (
        <nav className={classes.sheet} aria-label="Menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={classes.sheetLink}
              onClick={() => setSheetOpened(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
