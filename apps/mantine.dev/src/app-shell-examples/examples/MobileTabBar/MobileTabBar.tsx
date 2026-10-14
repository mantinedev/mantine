import { useState } from 'react';
import { BellIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
import { ActionIcon, AppShell, Group, TextInput } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Dashboard } from './Dashboard';
import { Navbar } from './Navbar';
import { TabBar } from './TabBar';
import { UserMenu } from './UserMenu';
import classes from './MobileTabBar.module.css';

export function MobileTabBar() {
  const [active, setActive] = useState('Dashboard');

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: { base: 60, sm: 0 } }}
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: true } }}
      padding={{ base: 'md', sm: 'xl' }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <MantineLogo size={28} />

          <Group>
            <TextInput
              placeholder="Search"
              leftSection={<MagnifyingGlassIcon size={16} />}
              visibleFrom="sm"
              w={240}
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
        <Navbar active={active} onChange={setActive} />
      </AppShell.Navbar>

      <AppShell.Main className={classes.main}>
        <Dashboard />
      </AppShell.Main>

      <AppShell.Footer hiddenFrom="sm">
        <TabBar active={active} onChange={setActive} />
      </AppShell.Footer>
    </AppShell>
  );
}
