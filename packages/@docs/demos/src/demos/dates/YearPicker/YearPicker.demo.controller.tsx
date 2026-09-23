import { useState } from 'react';
import { Button, Group, Stack } from '@mantine/core';
import { YearPicker, useCalendar } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, Stack } from '@mantine/core';
import { YearPicker, useCalendar } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  const controller = useCalendar({ defaultDate: '2024-01-01' });

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
            controller.setDate(new Date());
          }}
        >
          Today
        </Button>
      </Group>

      <YearPicker value={value} onChange={setValue} controller={controller} />
    </Stack>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  const controller = useCalendar({ defaultDate: '2024-01-01' });

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
            controller.setDate(new Date());
          }}
        >
          Today
        </Button>
      </Group>

      <YearPicker value={value} onChange={setValue} controller={controller} />
    </Stack>
  );
}

export const controller: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
