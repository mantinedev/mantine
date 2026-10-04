import { AppShell, Burger, Button, Group, Text, useAppShellResize } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

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
      aside={{ width: 260, breakpoint: 'sm' }}
      padding="md"
      resize={resize}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group h="100%">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            Header sits between the navbar and aside
          </Group>
          <Button onClick={resize.resetAll} variant="default" size="xs">
            Reset layout
          </Button>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">Navbar spans the full viewport height</AppShell.Navbar>
      <AppShell.Aside p="md">Aside spans the full viewport height</AppShell.Aside>
      <AppShell.Main>
        <Text>
          In alt layout the header and footer are inset by the navbar and aside, so dragging either
          side section moves the header edge with it.
        </Text>
        <Text mt="md">All three sections can be resized with mouse, touch or keyboard.</Text>
      </AppShell.Main>
    </AppShell>
  );
}
