import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Skeleton, Button } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';

export function Disabled() {
  const [opened, { toggle }] = useDisclosure();
  const [disabled, { toggle: toggleDisabled }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
      disabled={disabled}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <MantineLogo size={30} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Button onClick={toggleDisabled}>Toggle disabled</Button>
      </AppShell.Main>
    </AppShell>
  );
}
