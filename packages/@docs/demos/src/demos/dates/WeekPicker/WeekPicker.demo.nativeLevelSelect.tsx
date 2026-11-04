import { WeekPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { WeekPicker } from '@mantine/dates';

function Demo() {
  return <WeekPicker withNativeLevelSelect />;
}
`;

function Demo() {
  return <WeekPicker withNativeLevelSelect />;
}

export const nativeLevelSelect: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
