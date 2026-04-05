import { MonthPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <MonthPickerInput label="Pick month" placeholder="Pick month" withNativeLevelSelect />
  );
}
`;

function Demo() {
  return <MonthPickerInput label="Pick month" placeholder="Pick month" withNativeLevelSelect />;
}

export const nativeLevelSelect: MantineDemo = {
  type: 'code',
  maxWidth: 400,
  centered: true,
  component: Demo,
  code,
};
