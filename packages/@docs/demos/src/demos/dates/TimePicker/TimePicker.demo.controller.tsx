import { Button, Code, Group, Stack, Text } from '@mantine/core';
import { TimePicker, useTimePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Code, Group, Stack, Text } from '@mantine/core';
import { TimePicker, useTimePicker } from '@mantine/dates';

function Demo() {
  const controller = useTimePicker({ withSeconds: true });

  return (
    <Stack>
      <TimePicker controller={controller} />

      <Text size="sm">
        Value: <Code>{controller.getValue() || 'empty'}</Code>, hours: <Code>{String(controller.getHours())}</Code>,
        minutes: <Code>{String(controller.getMinutes())}</Code>, seconds: <Code>{String(controller.getSeconds())}</Code>
      </Text>

      <Group>
        <Button variant="default" onClick={() => controller.setValue('09:30:00')}>
          Set 09:30:00
        </Button>
        <Button variant="default" onClick={() => controller.focus('minutes')}>
          Focus minutes
        </Button>
        <Button variant="default" onClick={controller.clear} disabled={!controller.hasValue()}>
          Clear
        </Button>
      </Group>
    </Stack>
  );
}
`;

function Demo() {
  const controller = useTimePicker({ withSeconds: true });

  return (
    <Stack>
      <TimePicker controller={controller} />

      <Text size="sm">
        Value: <Code>{controller.getValue() || 'empty'}</Code>, hours:{' '}
        <Code>{String(controller.getHours())}</Code>, minutes:{' '}
        <Code>{String(controller.getMinutes())}</Code>, seconds:{' '}
        <Code>{String(controller.getSeconds())}</Code>
      </Text>

      <Group>
        <Button variant="default" onClick={() => controller.setValue('09:30:00')}>
          Set 09:30:00
        </Button>
        <Button variant="default" onClick={() => controller.focus('minutes')}>
          Focus minutes
        </Button>
        <Button variant="default" onClick={controller.clear} disabled={!controller.hasValue()}>
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
