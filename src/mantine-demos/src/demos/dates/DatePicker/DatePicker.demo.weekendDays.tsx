import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { DatePicker } from '@mantine/dates';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}
`;

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}

export const weekendDays: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
