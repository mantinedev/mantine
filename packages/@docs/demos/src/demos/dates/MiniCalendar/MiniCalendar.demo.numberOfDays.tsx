import { MiniCalendar } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  return <MiniCalendar numberOfDays={5} />;
}
`;

function Demo() {
  return <MiniCalendar numberOfDays={5} />;
}

export const numberOfDays: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
