import { Button, Group, Stack, Text } from '@mantine/core';
import { Calendar, useCalendar } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, Stack, Text } from '@mantine/core';
import { Calendar, useCalendar } from '@mantine/dates';

function Demo() {
  const controller = useCalendar({ defaultDate: '2024-06-15' });

  return (
    <Stack align="center">
      <Group justify="center">
        <Button variant="default" onClick={controller.previous}>
          Previous
        </Button>
        <Button variant="default" onClick={controller.next}>
          Next
        </Button>
        <Button variant="default" onClick={() => controller.setDate(new Date())}>
          Today
        </Button>
        <Button variant="default" onClick={() => controller.setLevel('decade')}>
          Decade level
        </Button>
      </Group>

      <Calendar controller={controller} />

      <Text size="sm" c="dimmed">
        Displayed {controller.level}: {controller.getDisplayedDate()}
      </Text>
    </Stack>
  );
}
`;

function Demo() {
  const controller = useCalendar({ defaultDate: '2024-06-15' });

  return (
    <Stack align="center">
      <Group justify="center">
        <Button variant="default" onClick={controller.previous}>
          Previous
        </Button>
        <Button variant="default" onClick={controller.next}>
          Next
        </Button>
        <Button variant="default" onClick={() => controller.setDate(new Date())}>
          Today
        </Button>
        <Button variant="default" onClick={() => controller.setLevel('decade')}>
          Decade level
        </Button>
      </Group>

      <Calendar controller={controller} />

      <Text size="sm" c="dimmed">
        Displayed {controller.level}: {controller.getDisplayedDate()}
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
