import { rem, Stack, Text } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DatePicker } from '@mantine/dates';
import { Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Stack gap="xs">
      <Text size="sm" fw={500}>Pick date with keyboard navigation</Text>
      <DatePicker enableKeyboardNavigation />
      <Text size="xs" c="dimmed">
        Use Ctrl/Cmd + Arrow keys for year navigation, 
        Ctrl/Cmd + Shift + Arrow keys for decade navigation, 
        or press Y to open year view
      </Text>
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack gap="xs">
      <Text size="sm" fw={500}>
        Pick date with keyboard navigation
      </Text>
      <DatePicker enableKeyboardNavigation />
      <Text size="xs" c="dimmed">
        Use Ctrl/Cmd + Arrow keys for year navigation, Ctrl/Cmd + Shift + Arrow keys for decade
        navigation, or press Y to open year view
      </Text>
    </Stack>
  );
}

export const keyboardNavigation: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
