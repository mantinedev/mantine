import { DatePickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return <DatePickerInput label="Pick date" placeholder="Pick date" withNativeLevelSelect />;
}
`;

function Demo() {
  return <DatePickerInput label="Pick date" placeholder="Pick date" withNativeLevelSelect />;
}

export const nativeLevelSelect: MantineDemo = {
  type: 'code',
  maxWidth: 400,
  centered: true,
  component: Demo,
  code,
};
