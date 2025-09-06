import 'dayjs/locale/ru';

import { MiniCalendar } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import 'dayjs/locale/ru';
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  return <MiniCalendar defaultDate="2025-04-15" locale="ru" />;
}
`;

function Demo() {
  return <MiniCalendar defaultDate="2025-04-15" locale="ru" />;
}

export const locale: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
