import { useState } from 'react';
import { BellIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
import {
  ActionIcon,
  AppShell,
  AppShellResizeSizes,
  Burger,
  Button,
  Group,
  TextInput,
  useAppShellResize,
} from '@mantine/core';
import { useDisclosure, useLocalStorage } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Dashboard } from './Dashboard';
import { Navbar } from './Navbar';
import { UserMenu } from './UserMenu';
import classes from './PersistedResize.module.css';

export function PersistedResize() {
  const [opened, { toggle }] = useDisclosure();
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);
  const [sizes, setSizes, removeSizes] = useLocalStorage<AppShellResizeSizes>({
    key: 'app-shell-example-sizes',
    defaultValue: {},
  });

  const resize = useAppShellResize({
    navbar: { min: 200, max: 500, collapseThreshold: 120 },
    initialSizes: sizes,
    onResizeEnd: setSizes,
    onCollapseChange: (section, collapsed) => {
      if (section === 'navbar') {
        setNavbarCollapsed(collapsed);
      }
    },
  });

  const handleReset = () => {
    resize.resetAll();
    removeSizes();
    setNavbarCollapsed(false);
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 260,
        breakpoint: 'sm',
        collapsed: { mobile: !opened, desktop: navbarCollapsed },
      }}
      padding={{ base: 'md', sm: 'xl' }}
      resize={resize}
    >
      <AppShell.Header className={classes.header}>
        <Group h="100%" px="md" justify="space-between" wrap="nowrap">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              aria-label="Toggle navigation"
            />
            <Burger
              opened={!navbarCollapsed}
              onClick={() => setNavbarCollapsed((current) => !current)}
              visibleFrom="sm"
              size="sm"
              aria-label="Toggle navigation"
            />
            <MantineLogo size={28} />
          </Group>

          <Group wrap="nowrap">
            <Button onClick={handleReset} variant="default" visibleFrom="sm">
              Reset layout
            </Button>
            <TextInput
              placeholder="Search"
              leftSection={<MagnifyingGlassIcon size={16} />}
              visibleFrom="sm"
              w={240}
              className={classes.search}
            />
            <ActionIcon
              variant="default"
              size="lg"
              aria-label="Notifications"
              title="Notifications"
            >
              <BellIcon size={18} />
            </ActionIcon>
            <UserMenu />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main className={classes.main}>
        <Dashboard />
      </AppShell.Main>
    </AppShell>
  );
}
