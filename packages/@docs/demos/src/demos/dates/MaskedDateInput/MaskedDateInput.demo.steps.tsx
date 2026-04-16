import { MaskedDateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MaskedDateInput } from '@mantine/dates';

function Demo() {
  return (
    <MaskedDateInput
      label="Date and time"
      withTime
      withSeconds
      hoursStep={1}
      minutesStep={5}
      secondsStep={10}
    />
  );
}
`;

function Demo() {
  return (
    <MaskedDateInput
      label="Date and time"
      withTime
      withSeconds
      hoursStep={1}
      minutesStep={5}
      secondsStep={10}
    />
  );
}

export const steps: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
