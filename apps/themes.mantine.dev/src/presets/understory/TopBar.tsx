'use client';

import { IconMoon, IconShare2, IconSun } from '@tabler/icons-react';
import { ActionIcon, Avatar, Button, SegmentedControl, useMantineColorScheme } from '@mantine/core';
import type { Pane } from './Understory';
import classes from './TopBar.module.css';

const ICON_PROPS = { size: 18, stroke: 1.8 };

interface TopBarProps {
  pane: Pane;
  onPaneChange: (pane: Pane) => void;
  onShare: () => void;
}

export function TopBar({ pane, onPaneChange, onShare }: TopBarProps) {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <header className={classes.root}>
      <span className={classes.brand}>
        <svg viewBox="0 0 28 28" aria-hidden="true" className={classes.logo}>
          <circle cx="14" cy="14" r="14" fill="var(--mantine-primary-color-filled)" />
          <path
            d="M8 20c0-7 4-11 12-12-.5 8-5 12-12 12zM8 20l6-6"
            fill="none"
            stroke="var(--mantine-primary-color-contrast)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Understory
      </span>

      <span className={classes.crumb}>
        <span className={classes.separator} />
        <b>Back garden, Bishopston</b>
        <span className={classes.crumbSub}>6 × 4 m, north-facing</span>
      </span>

      <SegmentedControl
        className={classes.paneSwitch}
        aria-label="Show"
        value={pane}
        onChange={(value) => onPaneChange(value as Pane)}
        data={[
          { value: 'chat', label: 'Chat' },
          { value: 'plan', label: 'Plan' },
        ]}
      />

      <div className={classes.actions}>
        <Button
          variant="default"
          size="xs"
          className={classes.share}
          leftSection={<IconShare2 {...ICON_PROPS} />}
          onClick={onShare}
        >
          Share plan
        </Button>
        <ActionIcon onClick={toggleColorScheme} aria-label="Switch color scheme">
          <IconMoon {...ICON_PROPS} className={classes.moon} />
          <IconSun {...ICON_PROPS} className={classes.sun} />
        </ActionIcon>
        <Avatar title="Nadia Okafor">NO</Avatar>
      </div>
    </header>
  );
}
