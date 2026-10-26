'use client';

import { IconMoon, IconPlus, IconRss, IconSun } from '@tabler/icons-react';
import { ActionIcon, Button, Menu, useMantineColorScheme } from '@mantine/core';
import { podcastApps } from './data';
import { CrescentIcon } from './Icons';
import classes from './Masthead.module.css';

const links = [
  { label: 'Episodes', href: '#', active: true },
  { label: 'About', href: '#' },
  { label: 'Newsletter', href: '#newsletter' },
];

interface MastheadProps {
  onToast: (message: string) => void;
}

export function Masthead({ onToast }: MastheadProps) {
  const { toggleColorScheme } = useMantineColorScheme();

  const copyFeed = () => {
    const fallback = () => onToast('Feed: nightshift.example/feed.xml');
    try {
      navigator.clipboard
        .writeText('https://nightshift.example/feed.xml')
        .then(() => onToast('RSS feed link copied'), fallback);
    } catch {
      fallback();
    }
  };

  return (
    <header className={classes.root}>
      <a href="#" className={classes.logo} onClick={(event) => event.preventDefault()}>
        <span className={classes.mark}>
          <CrescentIcon />
        </span>
        Night Shift
      </a>

      <nav className={classes.nav} aria-label="Main">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={classes.link}
            aria-current={link.active ? 'page' : undefined}
            onClick={link.href === '#' ? (event) => event.preventDefault() : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className={classes.actions}>
        <ActionIcon onClick={toggleColorScheme} aria-label="Switch color scheme">
          <IconSun size={20} stroke={1.8} className={classes.sun} />
          <IconMoon size={20} stroke={1.8} className={classes.moon} />
        </ActionIcon>

        <Menu position="bottom-end" offset={8}>
          <Menu.Target>
            <Button leftSection={<IconPlus size={18} stroke={1.8} />}>Follow</Button>
          </Menu.Target>
          <Menu.Dropdown>
            {podcastApps.map((app) => (
              <Menu.Item
                key={app.name}
                leftSection={
                  <span className={classes.appDot} style={{ background: app.color }}>
                    {app.letter}
                  </span>
                }
                onClick={() => onToast(`Opening ${app.name}`)}
              >
                {app.name}
              </Menu.Item>
            ))}
            <Menu.Divider />
            <Menu.Item leftSection={<IconRss size={20} stroke={1.8} />} onClick={copyFeed}>
              Copy RSS feed
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </header>
  );
}
