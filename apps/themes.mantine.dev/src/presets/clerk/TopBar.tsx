'use client';

import { IconMenu2, IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, Avatar, SegmentedControl, useMantineColorScheme } from '@mantine/core';
import type { Pane } from './Clerk';
import classes from './TopBar.module.css';

const ICON_PROPS = { size: 18, stroke: 1.7 };

interface TopBarProps {
  pane: Pane;
  onPaneChange: (pane: Pane) => void;
  mattersOpened: boolean;
  onOpenMatters: () => void;
}

export function TopBar({ pane, onPaneChange, mattersOpened, onOpenMatters }: TopBarProps) {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <header className={classes.root}>
      <ActionIcon
        className={classes.mattersButton}
        onClick={onOpenMatters}
        aria-label="Show matters"
        aria-expanded={mattersOpened}
      >
        <IconMenu2 {...ICON_PROPS} />
      </ActionIcon>

      <span className={classes.logo}>
        <span className={classes.logoMark} aria-hidden="true">
          c
        </span>
        Clerk
      </span>
      <span className={classes.firm}>Muir &amp; Calder, Solicitors</span>

      <span className={classes.spacer} />

      <SegmentedControl
        className={classes.paneTabs}
        value={pane}
        onChange={(value) => onPaneChange(value as Pane)}
        data={[
          { value: 'chat', label: 'Chat' },
          { value: 'doc', label: 'Lease' },
        ]}
        aria-label="Show"
      />

      <ActionIcon variant="subtle" onClick={toggleColorScheme} aria-label="Switch color scheme">
        <IconMoon {...ICON_PROPS} className={classes.moon} />
        <IconSun {...ICON_PROPS} className={classes.sun} />
      </ActionIcon>
      <Avatar title="Isla Muir">IM</Avatar>
    </header>
  );
}
