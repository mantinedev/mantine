import { Button, Group, PinInput, Stack, Text, usePinInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, PinInput, Stack, Text, usePinInput } from '@mantine/core';

function Demo() {
  const pinInput = usePinInput({ length: 6 });

  return (
    <Stack align="center">
      <PinInput controller={pinInput} type="number" />

      <Text size="sm">
        Value: {pinInput.getValue() || '(empty)'} – {pinInput.isComplete() ? 'complete' : 'incomplete'}
      </Text>

      <Group>
        <Button variant="default" onClick={() => pinInput.focus(0)}>
          Focus first
        </Button>
        <Button variant="default" onClick={pinInput.focusNext}>
          Focus next
        </Button>
        <Button variant="default" onClick={() => pinInput.setValue('123456')}>
          Fill
        </Button>
        <Button variant="default" onClick={pinInput.clear} disabled={pinInput.getValue() === ''}>
          Clear
        </Button>
      </Group>
    </Stack>
  );
}
`;

function Demo() {
  const pinInput = usePinInput({ length: 6 });

  return (
    <Stack align="center">
      <PinInput controller={pinInput} type="number" />

      <Text size="sm">
        Value: {pinInput.getValue() || '(empty)'} –{' '}
        {pinInput.isComplete() ? 'complete' : 'incomplete'}
      </Text>

      <Group>
        <Button variant="default" onClick={() => pinInput.focus(0)}>
          Focus first
        </Button>
        <Button variant="default" onClick={pinInput.focusNext}>
          Focus next
        </Button>
        <Button variant="default" onClick={() => pinInput.setValue('123456')}>
          Fill
        </Button>
        <Button variant="default" onClick={pinInput.clear} disabled={pinInput.getValue() === ''}>
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
