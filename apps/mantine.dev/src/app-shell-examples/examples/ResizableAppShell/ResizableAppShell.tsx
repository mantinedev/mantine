import { AppShell, Burger, Button, Group, Text, useAppShellResize } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function ResizableAppShell() {
  const [opened, { toggle }] = useDisclosure();
  const resize = useAppShellResize({
    navbar: { min: 200, max: 500 },
    header: { min: 48, max: 120 },
  });

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
      resize={resize}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group h="100%">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            Drag the bottom edge of this header to resize it
          </Group>
          <Button onClick={resize.resetAll} variant="default" size="xs">
            Reset layout
          </Button>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Drag the right edge of the navbar, or focus it and use arrow keys, to resize it.
      </AppShell.Navbar>
      <AppShell.Main>
        <Text>This is the main section, your app content here.</Text>
        <Text>Navbar and header can be resized with mouse, touch or keyboard.</Text>
      </AppShell.Main>
    </AppShell>
  );
}
