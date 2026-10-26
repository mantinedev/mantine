'use client';

import { IconHeart, IconMessage, IconMoon, IconPlus, IconSun, IconTag } from '@tabler/icons-react';
import { ActionIcon, Badge, Button, useMantineColorScheme } from '@mantine/core';
import classes from './TopBar.module.css';

const ICON_PROPS = { size: 20, stroke: 1.7 };

function Logo() {
  return (
    <svg viewBox="0 0 30 30" width={30} height={30} aria-hidden="true">
      <path d="M4 14 15 5l11 9v11H4z" fill="var(--mantine-primary-color-filled)" />
      <path
        d="M9 25v-6h12v6M9 19v-2.5h12V19"
        fill="none"
        stroke="var(--mantine-primary-color-contrast)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 25v2M19.5 25v2"
        stroke="var(--mantine-primary-color-filled)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface TopBarProps {
  unread: number;
}

export function TopBar({ unread }: TopBarProps) {
  const { toggleColorScheme } = useMantineColorScheme();

  const links = [
    { label: 'Browse', icon: IconTag },
    { label: 'Saved', icon: IconHeart },
    { label: 'Messages', icon: IconMessage, active: true, count: unread },
  ];

  return (
    <header className={classes.root}>
      <a className={classes.logo} href="#" onClick={(event) => event.preventDefault()}>
        <Logo />
        Second Home
      </a>

      <nav className={classes.nav} aria-label="Main">
        {links.map((link) => (
          <a
            key={link.label}
            href="#"
            className={classes.link}
            aria-current={link.active ? 'page' : undefined}
            aria-label={link.label}
            onClick={(event) => event.preventDefault()}
          >
            <link.icon {...ICON_PROPS} />
            <span className={classes.label}>{link.label}</span>
            {!!link.count && (
              <Badge circle size="md" aria-label={`${link.count} unread`}>
                {link.count}
              </Badge>
            )}
          </a>
        ))}
      </nav>

      <span className={classes.spacer} />

      <ActionIcon onClick={toggleColorScheme} aria-label="Switch color scheme">
        <IconMoon {...ICON_PROPS} className={classes.moon} />
        <IconSun {...ICON_PROPS} className={classes.sun} />
      </ActionIcon>
      <Button
        component="a"
        href="#"
        onClick={(event) => event.preventDefault()}
        leftSection={<IconPlus size={18} stroke={1.7} />}
      >
        Sell something
      </Button>
    </header>
  );
}
