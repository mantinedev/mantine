import { DateTimePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      dropdownType="drawer"
      applyOnSubmit={false}
      label="Applied on selection"
      placeholder="Pick date and time"
    />
  );
}
`;

function Demo() {
  return (
    <DateTimePicker
      dropdownType="drawer"
      applyOnSubmit={false}
      label="Applied on selection"
      placeholder="Pick date and time"
    />
  );
}

export const applyOnSubmit: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
