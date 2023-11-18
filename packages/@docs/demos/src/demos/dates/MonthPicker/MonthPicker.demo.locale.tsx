import 'dayjs/locale/ru';
import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { MonthPicker } from '@mantine/dates';

const code = `
import 'dayjs/locale/ru';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker locale="ru" />;
}
`;

function Demo() {
  return <MonthPicker locale="ru" />;
}

export const locale: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
