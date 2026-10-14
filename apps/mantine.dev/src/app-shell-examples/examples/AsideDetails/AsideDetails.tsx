import { useRef, useState } from 'react';
import { BellIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
import { ActionIcon, AppShell, Burger, Group, Stack, Text, TextInput, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Order } from './data';
import { Navbar } from './Navbar';
import { OrderDetails } from './OrderDetails';
import { OrdersTable } from './OrdersTable';
import { UserMenu } from './UserMenu';
import classes from './AsideDetails.module.css';

export function AsideDetails() {
  const [opened, { toggle }] = useDisclosure();
  const [selected, setSelected] = useState<Order | null>(null);
  const orderControlsRef = useRef<Record<string, HTMLButtonElement | null>>({});

  const handleClose = () => {
    if (selected) {
      orderControlsRef.current[selected.id]?.focus();
    }
    setSelected(null);
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{ width: 320, breakpoint: 'sm', collapsed: { desktop: !selected, mobile: !selected } }}
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
        <Stack gap="lg">
          <div>
            <Title order={2} c="var(--mantine-color-bright)">
              Orders
            </Title>
            <Text size="sm">Select an order to see its details</Text>
          </div>
          <OrdersTable
            selected={selected}
            onSelect={setSelected}
            orderControlsRef={orderControlsRef}
          />
        </Stack>
      </AppShell.Main>

      <AppShell.Aside p="md">
        {selected && <OrderDetails order={selected} onClose={handleClose} />}
      </AppShell.Aside>
    </AppShell>
  );
}
