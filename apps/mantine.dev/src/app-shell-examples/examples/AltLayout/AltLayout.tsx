import { BellIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
import { ActionIcon, AppShell, Burger, Group, Text, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Aside } from './Aside';
import { Dashboard } from './Dashboard';
import { Navbar } from './Navbar';
import { UserMenu } from './UserMenu';
import classes from './AltLayout.module.css';

export function AltLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
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
        <AppShell.Section p="md">
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
        </AppShell.Section>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main className={classes.main}>
        <Dashboard />
      </AppShell.Main>

      <AppShell.Aside p="md">
        <Aside />
      </AppShell.Aside>

      <AppShell.Footer>
        <Group h="100%" px="md" justify="space-between">
          <Text size="sm">© 2026 Acme Inc.</Text>
          <Text size="sm">v2.4.1 · Last synced 2 minutes ago</Text>
        </Group>
      </AppShell.Footer>
    </AppShell>
  );
}
