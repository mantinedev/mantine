import { ActionBar, Button, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { ActionBar, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [center, centerHandlers] = useDisclosure(false);
  const [left, leftHandlers] = useDisclosure(false);
  const [right, rightHandlers] = useDisclosure(false);

  return (
    <>
      <Group justify="center">
        <Button onClick={centerHandlers.toggle}>Center (default)</Button>
        <Button onClick={leftHandlers.toggle}>Left</Button>
        <Button onClick={rightHandlers.toggle}>Right</Button>
      </Group>

      <ActionBar opened={center} onClose={centerHandlers.close} shadow="md" aria-label="Actions">
        <Text size="sm">Center position (default)</Text>
        <ActionBar.CloseButton aria-label="Close" />
      </ActionBar>

      <ActionBar
        opened={left}
        onClose={leftHandlers.close}
        shadow="md"
        aria-label="Actions"
        position={{ bottom: 30, left: 30 }}
        styles={{ root: { marginInline: 0 } }}
      >
        <Text size="sm">Left position</Text>
        <ActionBar.CloseButton aria-label="Close" />
      </ActionBar>

      <ActionBar
        opened={right}
        onClose={rightHandlers.close}
        shadow="md"
        aria-label="Actions"
        position={{ bottom: 30, right: 30 }}
        styles={{ root: { marginInline: 0 } }}
      >
        <Text size="sm">Right position</Text>
        <ActionBar.CloseButton aria-label="Close" />
      </ActionBar>
    </>
  );
}
`;

function Demo() {
  const [center, centerHandlers] = useDisclosure(false);
  const [left, leftHandlers] = useDisclosure(false);
  const [right, rightHandlers] = useDisclosure(false);

  return (
    <>
      <Group justify="center">
        <Button onClick={centerHandlers.toggle}>Center (default)</Button>
        <Button onClick={leftHandlers.toggle}>Left</Button>
        <Button onClick={rightHandlers.toggle}>Right</Button>
      </Group>

      <ActionBar opened={center} onClose={centerHandlers.close} shadow="md" aria-label="Actions">
        <Text size="sm">Center position (default)</Text>
        <ActionBar.CloseButton aria-label="Close" />
      </ActionBar>

      <ActionBar
        opened={left}
        onClose={leftHandlers.close}
        shadow="md"
        aria-label="Actions"
        position={{ bottom: 30, left: 30 }}
        styles={{ root: { marginInline: 0 } }}
      >
        <Text size="sm">Left position</Text>
        <ActionBar.CloseButton aria-label="Close" />
      </ActionBar>

      <ActionBar
        opened={right}
        onClose={rightHandlers.close}
        shadow="md"
        aria-label="Actions"
        position={{ bottom: 30, right: 30 }}
        styles={{ root: { marginInline: 0 } }}
      >
        <Text size="sm">Right position</Text>
        <ActionBar.CloseButton aria-label="Close" />
      </ActionBar>
    </>
  );
}

export const placement: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
