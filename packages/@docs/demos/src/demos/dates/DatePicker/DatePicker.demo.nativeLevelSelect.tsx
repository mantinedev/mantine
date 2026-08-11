import { DatePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker withNativeLevelSelect yearsSelectRange={[2020, 2035]} />;
}
`;

function Demo() {
  return <DatePicker withNativeLevelSelect yearsSelectRange={[2020, 2035]} />;
}

export const nativeLevelSelect: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
