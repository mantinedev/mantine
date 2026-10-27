'use client';

import cx from 'clsx';
import { AppShell, Burger, useMantineColorScheme } from '@mantine/core';
import { useDisclosure, useHotkeys } from '@mantine/hooks';
import { ColorSchemeControl, GithubControl } from '@mantinex/mantine-header';
import { MantineLogo } from '@mantinex/mantine-logo';
import { ShellContext } from './Shell.context';
import classes from './Shell.module.css';

interface ShellProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export function Shell({ sidebar, children }: ShellProps) {
  const [navbarOpened, { toggle: toggleNavbar }] = useDisclosure();
  const { toggleColorScheme } = useMantineColorScheme();
  useHotkeys([['mod + J', toggleColorScheme]]);

  return (
    <ShellContext value={{ navbarOpened, toggleNavbar }}>
      <AppShell navbar={{ width: 360, breakpoint: 'md', collapsed: { mobile: !navbarOpened } }}>
        <AppShell.Navbar className={classes.navbar}>
          <div className={classes.navbarHeader}>
            <a href="https://mantine.dev" className={cx('mantine-focus-auto', classes.logo)}>
              <MantineLogo size={28} />
            </a>
            <div className={classes.navbarControls}>
              <GithubControl link="https://github.com/mantinedev/mantine" />
              <ColorSchemeControl />
              <Burger
                opened={navbarOpened}
                onClick={toggleNavbar}
                hiddenFrom="md"
                size="sm"
                aria-label="Close theme controls"
              />
            </div>
          </div>
          <div className={classes.navbarBody}>{sidebar}</div>
        </AppShell.Navbar>
        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </ShellContext>
  );
}
