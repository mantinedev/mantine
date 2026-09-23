import { MonthPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker withNativeLevelSelect />;
}
`;

function Demo() {
  return <MonthPicker withNativeLevelSelect />;
}

export const nativeLevelSelect: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
