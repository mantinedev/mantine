'use client';

import Link from 'next/link';
import { IconPalette } from '@tabler/icons-react';
import cx from 'clsx';
import { ActionIcon, Button, Tooltip } from '@mantine/core';
import { ColorSchemeControl, GithubControl } from '@mantinex/mantine-header';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './ColorsGenerator.module.css';

export function GeneratorHeader() {
  return (
    <header className={classes.header}>
      <a href="https://mantine.dev" className={cx('mantine-focus-auto', classes.logo)}>
        <MantineLogo size={28} />
      </a>
      <div className={classes.headerControls}>
        <Button
          component={Link}
          href="/"
          variant="default"
          leftSection={<IconPalette size={18} stroke={1.5} />}
          visibleFrom="xs"
        >
          Theme editor
        </Button>
        <Tooltip label="Theme editor">
          <ActionIcon
            component={Link}
            href="/"
            variant="default"
            size={34}
            radius="md"
            aria-label="Theme editor"
            hiddenFrom="xs"
          >
            <IconPalette size={20} stroke={1.5} />
          </ActionIcon>
        </Tooltip>
        <GithubControl link="https://github.com/mantinedev/mantine" />
        <ColorSchemeControl />
      </div>
    </header>
  );
}
