import { WeekPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { WeekPicker } from '@mantine/dates';

function Demo() {
  return <WeekPicker fullWidth />;
}
`;

function Demo() {
  return <WeekPicker fullWidth />;
}

export const fullWidth: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 500,
  component: Demo,
  code,
};
