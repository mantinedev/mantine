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
          outer shell uses fixed positioning, while the inner shell renders its sections as part of
          the normal document flow using CSS Grid.
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
              Inner Navbar
            </Text>
            <Text size="sm">
              This navbar is rendered as part of the inner AppShell's CSS Grid layout, within the
              normal document flow.
            </Text>
          </AppShell.Navbar>
          <AppShell.Main>
            <Text size="sm" mb="md">
              Inner Main Content
            </Text>
            <Text size="sm" mb="sm">
              The inner header and navbar are placed in a CSS Grid layout within the inner AppShell
              and rendered as part of the normal document flow.
            </Text>
            {Array.from({ length: 20 }, (_, index) => (
              <Text key={index} size="sm" mb="xs">
                Inner paragraph {index + 1}: This demonstrates how static mode works within a nested
                context. Sections are placed in a CSS Grid layout as part of the document flow.
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
