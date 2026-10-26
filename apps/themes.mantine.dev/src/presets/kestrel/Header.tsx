'use client';

import { useState } from 'react';
import { IconMenu2, IconMoon, IconRss, IconSun } from '@tabler/icons-react';
import { ActionIcon, Popover, UnstyledButton, useMantineColorScheme } from '@mantine/core';
import { NAV_LINKS } from './data';
import classes from './Header.module.css';

const ICON_PROPS = { size: 18, stroke: 1.75 };

function KestrelMark() {
  return (
    <svg viewBox="0 0 28 28" className={classes.mark} aria-hidden="true">
      <rect width="28" height="28" rx="4" className={classes.markBg} />
      <path d="M5 19c3-1 5-4 6-8 1 3 3 5 6 5l6-6-2 8c-3 2-7 2-10 0z" className={classes.markBird} />
    </svg>
  );
}

const preventDefault = (event: React.MouseEvent) => event.preventDefault();

export function Header() {
  const { toggleColorScheme } = useMantineColorScheme();
  const [sheetOpened, setSheetOpened] = useState(false);

  return (
    <header className={classes.root}>
      <a href="#" className={classes.logo} onClick={preventDefault}>
        <KestrelMark />
        Kestrel <span>Engineering</span>
      </a>

      <nav className={classes.nav} aria-label="Main">
        {NAV_LINKS.map((link, index) => (
          <a
            key={link}
            href="#"
            className={classes.link}
            aria-current={index === 0 ? 'page' : undefined}
            onClick={preventDefault}
          >
            {link}
          </a>
        ))}
      </nav>

      <div className={classes.actions}>
        <ActionIcon
          component="a"
          href="#"
          onClick={preventDefault}
          aria-label="RSS feed"
          className={classes.rss}
        >
          <IconRss {...ICON_PROPS} />
        </ActionIcon>
        <ActionIcon onClick={toggleColorScheme} aria-label="Switch color scheme">
          <IconMoon {...ICON_PROPS} className={classes.moon} />
          <IconSun {...ICON_PROPS} className={classes.sun} />
        </ActionIcon>

        <Popover
          opened={sheetOpened}
          onChange={setSheetOpened}
          withinPortal={false}
          position="bottom-end"
          offset={13}
          width="calc(100cqi - 2 * var(--kestrel-gutter))"
        >
          <Popover.Target>
            <ActionIcon
              className={classes.menuButton}
              onClick={() => setSheetOpened((opened) => !opened)}
              aria-label="Open menu"
              aria-expanded={sheetOpened}
            >
              <IconMenu2 {...ICON_PROPS} />
            </ActionIcon>
          </Popover.Target>
          <Popover.Dropdown className={classes.sheet}>
            {[...NAV_LINKS, 'RSS feed'].map((link) => (
              <UnstyledButton
                key={link}
                component="a"
                href="#"
                className={classes.sheetLink}
                onClick={(event: React.MouseEvent) => {
                  event.preventDefault();
                  setSheetOpened(false);
                }}
              >
                {link}
              </UnstyledButton>
            ))}
          </Popover.Dropdown>
        </Popover>
      </div>
    </header>
  );
}
