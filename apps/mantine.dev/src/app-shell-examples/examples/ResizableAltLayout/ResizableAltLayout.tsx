import { BellIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
import {
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Button,
  Group,
  TextInput,
  useAppShellResize,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Aside } from './Aside';
import { Dashboard } from './Dashboard';
import { Navbar } from './Navbar';
import { UserMenu } from './UserMenu';
import classes from './ResizableAltLayout.module.css';

export function ResizableAltLayout() {
  const [opened, { toggle }] = useDisclosure();
  const resize = useAppShellResize({
    navbar: { min: 200, max: 500 },
    aside: { min: 200, max: 500 },
    header: { min: 48, max: 120 },
  });

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{ width: 260, breakpoint: 'sm', collapsed: { desktop: false, mobile: true } }}
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
              className={classes.notifications}
            >
              <BellIcon size={18} />
            </ActionIcon>
            <Box className={classes.user}>
              <UserMenu />
            </Box>
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
    </AppShell>
  );
}
