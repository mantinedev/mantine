import { WeekPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { WeekPicker } from '@mantine/dates';

function Demo() {
  return <WeekPicker firstDayOfWeek={0} />;
}
`;

function Demo() {
  return <WeekPicker firstDayOfWeek={0} />;
}

export const firstDayOfWeek: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
