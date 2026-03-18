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
          Header with position: sticky
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar with position: sticky. Scroll down to see the sticky behavior – sections remain
        visible within the document flow.
      </AppShell.Navbar>
      <AppShell.Main>
        <Text fw={500} mb="md">
          Static Mode Example
        </Text>
        <Text mb="md">
          In static mode, all AppShell sections use position: sticky instead of position: fixed.
          This allows sections to stick within the document flow rather than being fixed to the
          viewport.
        </Text>
        <Text mb="md">
          Scroll down to see how the header and navbar stick to the top of the page. Unlike fixed
          mode, the sections are part of the normal document flow and the main content does not need
          padding offsets.
        </Text>
        {Array.from({ length: 30 }, (_, index) => (
          <Text key={index} mb="sm">
            Paragraph {index + 1}: This content demonstrates the scrolling behavior in static mode.
            The header and navbar will stick to the top as you scroll, maintaining their position
            relative to the viewport while remaining in the document flow.
          </Text>
        ))}
      </AppShell.Main>
    </AppShell>
  );
}
