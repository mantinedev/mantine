import { useRef } from 'react';
import { BellIcon } from '@phosphor-icons/react';
import { ActionIcon, AppShell, Badge, Burger, Group, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { SettingsForm } from './SettingsForm';
import { SettingsNavbar } from './SettingsNavbar';
import { UserMenu } from './UserMenu';
import classes from './NestedAppShell.module.css';

export function NestedAppShell() {
  const [opened, { toggle, close }] = useDisclosure();
  const burgerRef = useRef<HTMLButtonElement>(null);

  const closeNavigation = () => {
    close();
    burgerRef.current?.focus();
  };

  return (
    <AppShell mode="fixed" header={{ height: 60 }} padding={{ base: 'md', sm: 'xl' }}>
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <MantineLogo size={28} />
          <Group>
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

      <AppShell.Main className={classes.main}>
        <Stack gap="lg">
          <div>
            <Title order={2} c="var(--mantine-color-bright)">
              Project settings
            </Title>
            <Text size="sm">Manage project details, members and billing</Text>
          </div>

          <AppShell
            mode="static"
            header={{ height: 50 }}
            navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
            withBorder
          >
            <AppShell.Header component="div">
              <Group h="100%" px="md" justify="space-between">
                <Group>
                  <Burger
                    ref={burgerRef}
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                    aria-label="Toggle navigation"
                  />
                  <Text className={classes.projectName}>Website redesign</Text>
                </Group>
                <Badge color="green">Active</Badge>
              </Group>
            </AppShell.Header>
            <AppShell.Navbar>
              <SettingsNavbar onClose={closeNavigation} />
            </AppShell.Navbar>
            <AppShell.Main component="div">
              <SettingsForm />
            </AppShell.Main>
          </AppShell>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
