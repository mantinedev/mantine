import { Button, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ActionBar } from './ActionBar';

export default { title: 'ActionBar' };

export function Usage() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="center">
        <Button onClick={toggle}>Toggle action bar</Button>
      </Group>

      <ActionBar opened={opened} onClose={close}>
        <Text size="sm">3 selected</Text>
        <ActionBar.Divider />
        <Button variant="subtle" size="compact-sm">
          Delete
        </Button>
        <Button variant="subtle" size="compact-sm">
          Move
        </Button>
        <ActionBar.CloseButton />
      </ActionBar>
    </>
  );
}

export function Unstyled() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="center">
        <Button onClick={toggle}>Toggle action bar</Button>
      </Group>

      <ActionBar opened={opened} onClose={close} unstyled>
        <Text size="sm">3 selected</Text>
        <ActionBar.Divider />
        <Button variant="subtle" size="compact-sm">
          Delete
        </Button>
        <ActionBar.CloseButton />
      </ActionBar>
    </>
  );
}
