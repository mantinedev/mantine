import 'dayjs/locale/ru';

import { MonthPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

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
