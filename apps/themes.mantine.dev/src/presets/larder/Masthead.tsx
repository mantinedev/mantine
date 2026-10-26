'use client';

import { IconLayoutSidebarRight, IconMenu2, IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, Breadcrumbs, useMantineColorScheme } from '@mantine/core';
import classes from './Masthead.module.css';

const ICON_PROPS = { size: 18, stroke: 1.75 };

interface MastheadProps {
  crumb: string;
  saving: boolean;
  saveText: string;
  panel: 'list' | 'publish' | null;
  onTogglePanel: (panel: 'list' | 'publish') => void;
}

export function Masthead({ crumb, saving, saveText, panel, onTogglePanel }: MastheadProps) {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <header className={classes.root}>
      <ActionIcon
        className={classes.listToggle}
        onClick={() => onTogglePanel('list')}
        aria-label="Show articles"
        aria-expanded={panel === 'list'}
      >
        <IconMenu2 {...ICON_PROPS} />
      </ActionIcon>

      <span className={classes.wordmark}>
        Larder
        <i aria-hidden="true" />
      </span>

      <Breadcrumbs component="nav" aria-label="Breadcrumb" className={classes.crumbs}>
        <span>Autumn issue</span>
        <span className={classes.current}>{crumb}</span>
      </Breadcrumbs>

      <span className={classes.saveState} data-saving={saving || undefined} role="status">
        <i />
        <span>{saveText}</span>
      </span>

      <ActionIcon onClick={toggleColorScheme} aria-label="Switch color scheme">
        <IconMoon {...ICON_PROPS} className={classes.moon} />
        <IconSun {...ICON_PROPS} className={classes.sun} />
      </ActionIcon>

      <ActionIcon
        className={classes.publishToggle}
        onClick={() => onTogglePanel('publish')}
        aria-label="Show publishing options"
        aria-expanded={panel === 'publish'}
      >
        <IconLayoutSidebarRight {...ICON_PROPS} />
      </ActionIcon>
    </header>
  );
}
