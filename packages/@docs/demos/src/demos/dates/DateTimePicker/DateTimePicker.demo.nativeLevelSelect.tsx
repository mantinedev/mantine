import { DateTimePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      label="Pick date and time"
      placeholder="Pick date and time"
      withNativeLevelSelect
    />
  );
}
`;

function Demo() {
  return (
    <DateTimePicker
      label="Pick date and time"
      placeholder="Pick date and time"
      withNativeLevelSelect
    />
  );
}

export const nativeLevelSelect: MantineDemo = {
  type: 'code',
  maxWidth: 400,
  centered: true,
  component: Demo,
  code,
};
