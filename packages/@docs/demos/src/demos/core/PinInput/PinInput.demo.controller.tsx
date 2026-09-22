import { Button, Group, PinInput, Stack, Text, usePinInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, PinInput, Stack, Text, usePinInput } from '@mantine/core';

function Demo() {
  const controller = usePinInput({ length: 6 });

  return (
    <Stack align="center">
      <PinInput controller={controller} type="number" />

      <Text size="sm">
        Value: {controller.getValue() || '(empty)'} – {controller.isComplete() ? 'complete' : 'incomplete'}
      </Text>

      <Group>
        <Button variant="default" onClick={() => controller.focus(0)}>
          Focus first
        </Button>
        <Button variant="default" onClick={controller.focusNext}>
          Focus next
        </Button>
        <Button variant="default" onClick={() => controller.setValue('123456')}>
          Fill
        </Button>
        <Button variant="default" onClick={controller.clear} disabled={controller.getValue() === ''}>
          Clear
        </Button>
      </Group>
    </Stack>
  );
}
`;

function Demo() {
  const controller = usePinInput({ length: 6 });

  return (
    <Stack align="center">
      <PinInput controller={controller} type="number" />

      <Text size="sm">
        Value: {controller.getValue() || '(empty)'} –{' '}
        {controller.isComplete() ? 'complete' : 'incomplete'}
      </Text>

      <Group>
        <Button variant="default" onClick={() => controller.focus(0)}>
          Focus first
        </Button>
        <Button variant="default" onClick={controller.focusNext}>
          Focus next
        </Button>
        <Button variant="default" onClick={() => controller.setValue('123456')}>
          Fill
        </Button>
        <Button
          variant="default"
          onClick={controller.clear}
          disabled={controller.getValue() === ''}
        >
          Clear
        </Button>
      </Group>
    </Stack>
  );
}

export const controller: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
