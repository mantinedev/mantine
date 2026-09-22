import { Button, Group, Stack, Text } from '@mantine/core';
import { Calendar, useCalendar } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, Stack, Text } from '@mantine/core';
import { Calendar, useCalendar } from '@mantine/dates';

function Demo() {
  const calendar = useCalendar({ defaultDate: '2024-06-15' });

  return (
    <Stack align="center">
      <Group justify="center">
        <Button variant="default" onClick={calendar.previous}>
          Previous
        </Button>
        <Button variant="default" onClick={calendar.next}>
          Next
        </Button>
        <Button variant="default" onClick={() => calendar.setDate(new Date())}>
          Today
        </Button>
        <Button variant="default" onClick={() => calendar.setLevel('decade')}>
          Decade level
        </Button>
      </Group>

      <Calendar controller={calendar} />

      <Text size="sm" c="dimmed">
        Displayed {calendar.getLevel()}: {calendar.getDisplayedDate()}
      </Text>
    </Stack>
  );
}
`;

function Demo() {
  const calendar = useCalendar({ defaultDate: '2024-06-15' });

  return (
    <Stack align="center">
      <Group justify="center">
        <Button variant="default" onClick={calendar.previous}>
          Previous
        </Button>
        <Button variant="default" onClick={calendar.next}>
          Next
        </Button>
        <Button variant="default" onClick={() => calendar.setDate(new Date())}>
          Today
        </Button>
        <Button variant="default" onClick={() => calendar.setLevel('decade')}>
          Decade level
        </Button>
      </Group>

      <Calendar controller={calendar} />

      <Text size="sm" c="dimmed">
        Displayed {calendar.getLevel()}: {calendar.getDisplayedDate()}
      </Text>
    </Stack>
  );
}

export const controller: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
