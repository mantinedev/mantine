import { AppShell, Burger, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function StaticMode() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      mode="static"
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          Header in static mode
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar in static mode. Sections are rendered as part of the normal document flow using CSS
        Grid layout.
      </AppShell.Navbar>
      <AppShell.Main>
        <Text fw={500} mb="md">
          Static Mode Example
        </Text>
        <Text mb="md">
          In static mode, AppShell renders all sections as part of the normal document flow using
          CSS Grid instead of fixed positioning.
        </Text>
        <Text mb="md">
          Unlike fixed mode, the sections are part of the normal document flow and the main content
          does not need padding offsets.
        </Text>
        {Array.from({ length: 30 }, (_, index) => (
          <Text key={index} mb="sm">
            Paragraph {index + 1}: This content demonstrates how static mode arranges sections in a
            CSS Grid layout that stays within the normal document flow.
          </Text>
        ))}
      </AppShell.Main>
    </AppShell>
  );
}
