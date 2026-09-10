import 'dayjs/locale/ru';
import { QuarterPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import 'dayjs/locale/ru';
import { QuarterPicker } from '@mantine/dates';

function Demo() {
  return <QuarterPicker locale="ru" />;
}
`;

function Demo() {
  return <QuarterPicker locale="ru" />;
}

export const locale: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
