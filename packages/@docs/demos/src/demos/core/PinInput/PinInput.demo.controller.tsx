import { Button, Group, PinInput, Stack, Text, usePinInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, PinInput, Stack, Text, usePinInput } from '@mantine/core';

function Demo() {
  const pin = usePinInput({ length: 6 });

  return (
    <Stack align="center">
      <PinInput controller={pin} type="number" />

      <Text size="sm">
        Value: {pin.value || '(empty)'} – {pin.isComplete() ? 'complete' : 'incomplete'}
      </Text>

      <Group>
        <Button variant="default" onClick={() => pin.focus(0)}>
          Focus first
        </Button>
        <Button variant="default" onClick={pin.focusNext}>
          Focus next
        </Button>
        <Button variant="default" onClick={() => pin.setValue('123456')}>
          Fill
        </Button>
        <Button variant="default" onClick={pin.clear} disabled={pin.value === ''}>
          Clear
        </Button>
      </Group>
    </Stack>
  );
}
`;

function Demo() {
  const pin = usePinInput({ length: 6 });

  return (
    <Stack align="center">
      <PinInput controller={pin} type="number" />

      <Text size="sm">
        Value: {pin.value || '(empty)'} – {pin.isComplete() ? 'complete' : 'incomplete'}
      </Text>

      <Group>
        <Button variant="default" onClick={() => pin.focus(0)}>
          Focus first
        </Button>
        <Button variant="default" onClick={pin.focusNext}>
          Focus next
        </Button>
        <Button variant="default" onClick={() => pin.setValue('123456')}>
          Fill
        </Button>
        <Button variant="default" onClick={pin.clear} disabled={pin.value === ''}>
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
