import { AppShell, Burger, Button, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

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
          Header is hidden when disabled
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">Navbar is hidden when disabled</AppShell.Navbar>
      <AppShell.Main>
        <Text>This is the main section, your app content here.</Text>
        <Text>
          When you set disabled prop on AppShell, all elements except AppShell.Main are hidden. Try
          it out:
        </Text>
        <Button onClick={toggleDisabled} mt="md">
          Toggle disabled
        </Button>
      </AppShell.Main>
    </AppShell>
  );
}
