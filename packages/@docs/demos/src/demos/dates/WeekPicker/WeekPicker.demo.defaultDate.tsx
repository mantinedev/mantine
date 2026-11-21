import { WeekPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { WeekPicker } from '@mantine/dates';

function Demo() {
  return <WeekPicker defaultDate="2015-02-01" />;
}
`;

function Demo() {
  return <WeekPicker defaultDate="2015-02-01" />;
}

export const defaultDate: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
