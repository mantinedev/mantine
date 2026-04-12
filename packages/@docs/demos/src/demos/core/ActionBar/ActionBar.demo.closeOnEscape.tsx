import { ActionBar, Button, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { ActionBar, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="center">
        <Button onClick={toggle}>Toggle action bar</Button>
      </Group>

      <ActionBar opened={opened} onClose={close} closeOnEscape>
        <Text size="sm">Press Escape to close this bar</Text>
        <ActionBar.Divider />
        <Button variant="default" size="compact-sm" onClick={close}>
          Close
        </Button>
      </ActionBar>
    </>
  );
}
`;

function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="center">
        <Button onClick={toggle}>Toggle action bar</Button>
      </Group>

      <ActionBar opened={opened} onClose={close} closeOnEscape>
        <Text size="sm">Press Escape to close this bar</Text>
        <ActionBar.Divider />
        <Button variant="default" size="compact-sm" onClick={close}>
          Close
        </Button>
      </ActionBar>
    </>
  );
}

export const closeOnEscape: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
