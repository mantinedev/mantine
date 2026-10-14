import { BellIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
import {
  ActionIcon,
  AppShell,
  Burger,
  Button,
  Group,
  TextInput,
  useAppShellResize,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Dashboard } from './Dashboard';
import { Navbar } from './Navbar';
import { UserMenu } from './UserMenu';
import classes from './ResizableAppShell.module.css';

export function ResizableAppShell() {
  const [opened, { toggle }] = useDisclosure();
  const resize = useAppShellResize({
    navbar: { min: 200, max: 500 },
    header: { min: 48, max: 120 },
  });

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
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
            <MantineLogo size={28} />
          </Group>

          <Group wrap="nowrap">
            <Button onClick={resize.resetAll} variant="default" visibleFrom="sm">
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
