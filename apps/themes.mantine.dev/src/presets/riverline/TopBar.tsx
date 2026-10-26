'use client';

import { useState } from 'react';
import { IconBell, IconBike, IconMenu2, IconMoon, IconSearch, IconSun } from '@tabler/icons-react';
import {
  ActionIcon,
  Avatar,
  Badge,
  Indicator,
  NavLink,
  Popover,
  ThemeIcon,
  useMantineColorScheme,
} from '@mantine/core';
import classes from './TopBar.module.css';

const links = [
  { label: 'Overview', active: true },
  { label: 'Stations' },
  { label: 'Rebalancing', count: 4 },
  { label: 'Fleet', secondary: true },
  { label: 'Reports', secondary: true },
];

const ICON_PROPS = { size: 20, stroke: 1.75 };

function CountBadge({ count }: { count: number }) {
  return (
    <Badge circle color="red" size="sm" className={classes.count}>
      {count}
    </Badge>
  );
}

export function TopBar() {
  const { toggleColorScheme } = useMantineColorScheme();
  const [navOpened, setNavOpened] = useState(false);

  return (
    <header className={classes.root}>
      <span className={classes.brand}>
        <ThemeIcon radius="xl" size={32}>
          <IconBike size={19} stroke={1.75} />
        </ThemeIcon>
        <span className={classes.brandName}>Riverline</span>
      </span>

      <nav className={classes.nav} aria-label="Main">
        {links.map((link) => (
          <a
            key={link.label}
            href="#"
            className={classes.link}
            data-secondary={link.secondary || undefined}
            aria-current={link.active ? 'page' : undefined}
            onClick={(event) => event.preventDefault()}
          >
            {link.label}
            {link.count && <CountBadge count={link.count} />}
          </a>
        ))}
      </nav>

      <div className={classes.actions}>
        <ActionIcon aria-label="Search">
          <IconSearch {...ICON_PROPS} />
        </ActionIcon>
        <Indicator color="red" size={8} offset={9} withBorder>
          <ActionIcon aria-label="Notifications, 3 unread">
            <IconBell {...ICON_PROPS} />
          </ActionIcon>
        </Indicator>
        <ActionIcon onClick={toggleColorScheme} aria-label="Switch color scheme">
          <IconMoon {...ICON_PROPS} className={classes.moon} />
          <IconSun {...ICON_PROPS} className={classes.sun} />
        </ActionIcon>
        <Avatar className={classes.avatar} title="Maya Okafor, dispatch lead">
          MO
        </Avatar>

        <Popover
          opened={navOpened}
          onChange={setNavOpened}
          withinPortal={false}
          position="bottom-end"
          width={260}
          shadow="md"
        >
          <Popover.Target>
            <ActionIcon
              className={classes.navToggle}
              onClick={() => setNavOpened((o) => !o)}
              aria-label="Open navigation"
              aria-expanded={navOpened}
            >
              <IconMenu2 {...ICON_PROPS} />
            </ActionIcon>
          </Popover.Target>
          <Popover.Dropdown p="2xs">
            {links.map((link) => (
              <NavLink
                key={link.label}
                href="#"
                variant="rail"
                label={link.label}
                active={link.active}
                rightSection={link.count && <CountBadge count={link.count} />}
                onClick={(event) => {
                  event.preventDefault();
                  setNavOpened(false);
                }}
              />
            ))}
          </Popover.Dropdown>
        </Popover>
      </div>
    </header>
  );
}
