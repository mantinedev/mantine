'use client';

import cx from 'clsx';
import { AppShell, Burger, Group, RemoveScroll, useMantineColorScheme } from '@mantine/core';
import { useDisclosure, useHotkeys } from '@mantine/hooks';
import { ColorSchemeControl, HeaderControls } from '@mantinex/mantine-header';
import { MantineLogo } from '@mantinex/mantine-logo';
import { meta } from '@mantinex/mantine-meta';
import classes from './Shell.module.css';

interface ShellProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export function Shell({ sidebar, children }: ShellProps) {
  const [opened, { toggle }] = useDisclosure();
  const { toggleColorScheme } = useMantineColorScheme();
  useHotkeys([['mod + J', toggleColorScheme]]);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 360, breakpoint: 'md', collapsed: { mobile: !opened } }}
    >
      <AppShell.Header className={cx(RemoveScroll.classNames.zeroRight, classes.header)}>
        <div className={classes.inner}>
          <Group gap="sm">
            <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
            <a href="https://mantine.dev" className={cx('mantine-focus-auto', classes.logo)}>
              <MantineLogo size={30} />
            </a>
          </Group>

          <HeaderControls
            visibleFrom="sm"
            githubLink="https://github.com/mantinedev/mantine"
            withDirectionToggle={false}
            withSearch={false}
            discordLink={meta.discordLink}
          />

          <Group hiddenFrom="sm">
            <ColorSchemeControl />
          </Group>
        </div>
      </AppShell.Header>

      <AppShell.Navbar>{sidebar}</AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
