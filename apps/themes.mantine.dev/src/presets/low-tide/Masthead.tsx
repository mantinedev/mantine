'use client';

import { useState } from 'react';
import { IconMenu2, IconMoon, IconSearch, IconSun } from '@tabler/icons-react';
import { ActionIcon, Button, NavLink, Popover, useMantineColorScheme } from '@mantine/core';
import { sections } from './data';
import { WaveLogo } from './WaveLogo';
import classes from './Masthead.module.css';

const ICON_PROPS = { size: 18, stroke: 1.75 };

export function Masthead() {
  const { toggleColorScheme } = useMantineColorScheme();
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header className={classes.root}>
      <a className={classes.logo} href="#" onClick={(event) => event.preventDefault()}>
        <WaveLogo />
        Low Tide
      </a>

      <nav className={classes.sections} aria-label="Sections">
        {sections.map((section, index) => (
          <a
            key={section}
            href="#"
            className={classes.section}
            aria-current={index === 0 ? 'page' : undefined}
            onClick={(event) => event.preventDefault()}
          >
            {section}
          </a>
        ))}
      </nav>

      <div className={classes.actions}>
        <ActionIcon aria-label="Search">
          <IconSearch {...ICON_PROPS} />
        </ActionIcon>
        <ActionIcon onClick={toggleColorScheme} aria-label="Switch color scheme">
          <IconMoon {...ICON_PROPS} className={classes.moon} />
          <IconSun {...ICON_PROPS} className={classes.sun} />
        </ActionIcon>

        <Popover
          opened={menuOpened}
          onChange={setMenuOpened}
          withinPortal={false}
          position="bottom-end"
          width={240}
        >
          <Popover.Target>
            <ActionIcon
              className={classes.menuButton}
              onClick={() => setMenuOpened((opened) => !opened)}
              aria-label="Sections"
              aria-expanded={menuOpened}
            >
              <IconMenu2 {...ICON_PROPS} />
            </ActionIcon>
          </Popover.Target>
          <Popover.Dropdown p={6}>
            {sections.map((section, index) => (
              <NavLink
                key={section}
                href="#"
                variant="rail"
                label={section}
                active={index === 0}
                onClick={(event) => {
                  event.preventDefault();
                  setMenuOpened(false);
                }}
              />
            ))}
          </Popover.Dropdown>
        </Popover>

        <Button component="a" href="#newsletter" className={classes.subscribe}>
          Subscribe
        </Button>
      </div>
    </header>
  );
}
