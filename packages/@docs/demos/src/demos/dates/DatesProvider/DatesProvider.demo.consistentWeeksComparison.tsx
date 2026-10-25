import { Code, Group, Stack } from '@mantine/core';
import { DatePicker, DatesProvider } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Code, Group, Stack } from '@mantine/core';
import { DatePicker, DatesProvider } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center" align="flex-start" gap="xl">
      <Stack align="center" gap="xs">
        <Code>consistentWeeks: true (default)</Code>
        <DatePicker defaultDate="2026-02-01" />
      </Stack>

      <Stack align="center" gap="xs">
        <Code>consistentWeeks: false</Code>
        <DatesProvider settings={{ consistentWeeks: false }}>
          <DatePicker defaultDate="2026-02-01" />
        </DatesProvider>
      </Stack>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center" align="flex-start" gap="xl">
      <Stack align="center" gap="xs">
        <Code>consistentWeeks: true (default)</Code>
        <DatePicker defaultDate="2026-02-01" />
      </Stack>

      <Stack align="center" gap="xs">
        <Code>consistentWeeks: false</Code>
        <DatesProvider settings={{ consistentWeeks: false }}>
          <DatePicker defaultDate="2026-02-01" />
        </DatesProvider>
      </Stack>
    </Group>
  );
}

export const consistentWeeksComparison: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
