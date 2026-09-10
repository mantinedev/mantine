import 'dayjs/locale/ru';
import { WeekPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import 'dayjs/locale/ru';
import { WeekPicker } from '@mantine/dates';

function Demo() {
  return <WeekPicker locale="ru" />;
}
`;

function Demo() {
  return <WeekPicker locale="ru" />;
}

export const locale: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
