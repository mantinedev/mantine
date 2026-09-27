import { Stack } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Stack } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <DateTimePicker dropdownType="drawer" label="Drawer" placeholder="Pick date and time" />
      <DateTimePicker dropdownType="modal" label="Modal" placeholder="Pick date and time" />
      <DateTimePicker dropdownType="popover" label="Popover" placeholder="Pick date and time" />
      <DateTimePicker
        dropdownType={{ base: 'drawer', 600: 'popover' }}
        label="Drawer below 600px, popover above"
        placeholder="Pick date and time"
      />
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <DateTimePicker dropdownType="drawer" label="Drawer" placeholder="Pick date and time" />
      <DateTimePicker dropdownType="modal" label="Modal" placeholder="Pick date and time" />
      <DateTimePicker dropdownType="popover" label="Popover" placeholder="Pick date and time" />
      <DateTimePicker
        dropdownType={{ base: 'drawer', 600: 'popover' }}
        label="Drawer below 600px, popover above"
        placeholder="Pick date and time"
      />
    </Stack>
  );
}

export const dropdownType: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
