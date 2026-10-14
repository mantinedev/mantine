import { BellIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
import { ActionIcon, AppShell, Burger, Group, Stack, Switch, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Dashboard } from './Dashboard';
import { Navbar } from './Navbar';
import { UserMenu } from './UserMenu';
import classes from './Disabled.module.css';

export function Disabled() {
  const [opened, { toggle }] = useDisclosure();
  const [disabled, { toggle: toggleDisabled }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding={{ base: 'md', sm: 'xl' }}
      disabled={disabled}
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
        <Stack gap="lg">
          <Group justify="flex-end">
            <Switch label="Focus mode" checked={disabled} onChange={toggleDisabled} />
          </Group>
          <Dashboard />
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
