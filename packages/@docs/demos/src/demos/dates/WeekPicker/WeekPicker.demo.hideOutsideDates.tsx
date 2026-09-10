import { WeekPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { WeekPicker } from '@mantine/dates';

function Demo() {
  return <WeekPicker hideOutsideDates />;
}
`;

function Demo() {
  return <WeekPicker hideOutsideDates />;
}

export const hideOutsideDates: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
