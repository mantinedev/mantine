import { Button, Code, Group, Stack, Text } from '@mantine/core';
import { TimePicker, useTimePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Code, Group, Stack, Text } from '@mantine/core';
import { TimePicker, useTimePicker } from '@mantine/dates';

function Demo() {
  const timePicker = useTimePicker({ withSeconds: true });

  return (
    <Stack>
      <TimePicker controller={timePicker} withDropdown />

      <Text size="sm">
        Value: <Code>{timePicker.getValue() || 'empty'}</Code>, hours: <Code>{String(timePicker.getHours())}</Code>,
        minutes: <Code>{String(timePicker.getMinutes())}</Code>, seconds: <Code>{String(timePicker.getSeconds())}</Code>
      </Text>

      <Group>
        <Button variant="default" onClick={() => timePicker.setValue('09:30:00')}>
          Set 09:30:00
        </Button>
        <Button variant="default" onClick={() => timePicker.focus('minutes')}>
          Focus minutes
        </Button>
        <Button variant="default" onClick={timePicker.clear} disabled={!timePicker.hasValue()}>
          Clear
        </Button>
      </Group>
    </Stack>
  );
}
`;

function Demo() {
  const timePicker = useTimePicker({ withSeconds: true });

  return (
    <Stack>
      <TimePicker controller={timePicker} withDropdown />

      <Text size="sm">
        Value: <Code>{timePicker.getValue() || 'empty'}</Code>, hours:{' '}
        <Code>{String(timePicker.getHours())}</Code>, minutes:{' '}
        <Code>{String(timePicker.getMinutes())}</Code>, seconds:{' '}
        <Code>{String(timePicker.getSeconds())}</Code>
      </Text>

      <Group>
        <Button variant="default" onClick={() => timePicker.setValue('09:30:00')}>
          Set 09:30:00
        </Button>
        <Button variant="default" onClick={() => timePicker.focus('minutes')}>
          Focus minutes
        </Button>
        <Button variant="default" onClick={timePicker.clear} disabled={!timePicker.hasValue()}>
          Clear
        </Button>
      </Group>
    </Stack>
  );
}

export const controller: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  maxWidth: 400,
  centered: true,
};
