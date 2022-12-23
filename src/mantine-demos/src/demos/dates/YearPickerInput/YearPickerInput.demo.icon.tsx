import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { YearPickerInput } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons';

const code = `
import { YearPickerInput } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons';

function Demo() {
  return (
    <YearPickerInput
      icon={<IconCalendar size={18} stroke={1.5} />}
      label="Pick year"
      placeholder="Pick year"
      mx="auto"
      maw={400}
    />
  );
}
`;

function Demo() {
  return (
    <YearPickerInput
      icon={<IconCalendar size={18} stroke={1.5} />}
      label="Pick year"
      placeholder="Pick year"
      mx="auto"
      maw={400}
    />
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
