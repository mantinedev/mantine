import { AppShell, Badge, Group, Text } from '@mantine/core';

export function NestedAppShell() {
  return (
    <AppShell mode="fixed" header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Text>Outer AppShell (Fixed Mode)</Text>
          <Badge color="blue">Fixed</Badge>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Text fw={500} mb="md">
          Nested AppShell Example
        </Text>
        <Text mb="md">
          This example demonstrates a static mode AppShell nested inside a fixed mode AppShell. The
          outer shell uses fixed positioning, while the inner shell uses static positioning with
          sticky sections.
        </Text>

        <AppShell
          mode="static"
          header={{ height: 50 }}
          navbar={{ width: 250, breakpoint: 'sm' }}
          padding="md"
          withBorder
        >
          <AppShell.Header>
            <Group h="100%" px="md" justify="space-between">
              <Text size="sm">Inner AppShell (Static Mode)</Text>
              <Badge color="green" size="sm">
                Static
              </Badge>
            </Group>
          </AppShell.Header>
          <AppShell.Navbar p="md">
            <Text size="sm" mb="sm" fw={500}>
              Inner Navbar (Sticky)
            </Text>
            <Text size="sm">
              This navbar uses position: sticky and will stick within the scrollable area of the
              inner AppShell.
            </Text>
          </AppShell.Navbar>
          <AppShell.Main>
            <Text size="sm" mb="md">
              Inner Main Content
            </Text>
            <Text size="sm" mb="sm">
              Scroll this inner content area to see the sticky behavior of the inner header and
              navbar. They stick within their container, which is the inner AppShell.
            </Text>
            {Array.from({ length: 20 }, (_, index) => (
              <Text key={index} size="sm" mb="xs">
                Inner paragraph {index + 1}: This demonstrates how static mode works within a nested
                context. The sticky sections remain visible as you scroll within this container.
              </Text>
            ))}
          </AppShell.Main>
        </AppShell>

        <Text mt="xl" mb="md">
          Content after the nested AppShell
        </Text>
        {Array.from({ length: 10 }, (_, index) => (
          <Text key={index} mb="sm">
            Outer paragraph {index + 1}: This content is part of the outer AppShell's main area. It
            demonstrates that the inner static AppShell behaves like a regular element within the
            document flow.
          </Text>
        ))}
      </AppShell.Main>
    </AppShell>
  );
}
