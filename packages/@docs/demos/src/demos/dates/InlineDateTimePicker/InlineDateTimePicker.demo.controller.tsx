import { useState } from 'react';
import { Button, Group, Stack, Text } from '@mantine/core';
import { InlineDateTimePicker, useInlineDateTimePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, Stack, Text } from '@mantine/core';
import { InlineDateTimePicker, useInlineDateTimePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  const controller = useInlineDateTimePicker({ defaultDate: '2024-06-15' });

  return (
    <Stack align="center">
      <Group justify="center">
        <Button variant="default" onClick={controller.previous}>
          Previous
        </Button>
        <Button variant="default" onClick={controller.next}>
          Next
        </Button>
        <Button
          variant="default"
          onClick={() => {
            controller.setLevel('month');
            controller.setTime('09:00');
            controller.focusTime('minutes');
          }}
        >
          Start at 9:00
        </Button>
      </Group>

      <InlineDateTimePicker value={value} onChange={setValue} controller={controller} />

      <Text size="sm" c="dimmed">
        Time: {controller.getTime() || 'not set'}
      </Text>
    </Stack>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  const controller = useInlineDateTimePicker({ defaultDate: '2024-06-15' });

  return (
    <Stack align="center">
      <Group justify="center">
        <Button variant="default" onClick={controller.previous}>
          Previous
        </Button>
        <Button variant="default" onClick={controller.next}>
          Next
        </Button>
        <Button
          variant="default"
          onClick={() => {
            controller.setLevel('month');
            controller.setTime('09:00');
            controller.focusTime('minutes');
          }}
        >
          Start at 9:00
        </Button>
      </Group>

      <InlineDateTimePicker value={value} onChange={setValue} controller={controller} />

      <Text size="sm" c="dimmed">
        Time: {controller.getTime() || 'not set'}
      </Text>
    </Stack>
  );
}

export const controller: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
