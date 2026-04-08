import { TimePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter duration"
      type="duration"
      withSeconds
      minHoursDigits={3}
    />
  );
}
`;

function Demo() {
  return <TimePicker label="Enter duration" type="duration" withSeconds minHoursDigits={3} />;
}

export const minHoursDigits: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
