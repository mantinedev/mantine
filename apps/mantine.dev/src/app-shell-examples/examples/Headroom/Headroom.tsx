import { BellIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
import { ActionIcon, AppShell, Group, Stack, Text, TextInput, Title } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { OrdersTable } from './OrdersTable';
import { UserMenu } from './UserMenu';
import classes from './Headroom.module.css';

export function Headroom() {
  const { pinned } = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: false }}
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

      <AppShell.Main className={classes.main} pt="var(--app-shell-header-height)">
        <Stack gap="lg" pt={{ base: 'md', sm: 'xl' }}>
          <div>
            <Title order={2} c="var(--mantine-color-bright)">
              Orders
            </Title>
            <Text size="sm">All orders placed in your store</Text>
          </div>
          <OrdersTable />
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
