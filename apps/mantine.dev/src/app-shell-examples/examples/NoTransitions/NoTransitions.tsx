import { BellIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
import { ActionIcon, AppShell, Burger, Group, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Dashboard } from './Dashboard';
import { Navbar } from './Navbar';
import { UserMenu } from './UserMenu';
import classes from './NoTransitions.module.css';

export function NoTransitions() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      transitionDuration={0}
      padding={{ base: 'md', sm: 'xl' }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              aria-label="Toggle navigation"
            />
            <MantineLogo size={28} />
          </Group>

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
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main className={classes.main}>
        <Dashboard />
      </AppShell.Main>
    </AppShell>
  );
}
