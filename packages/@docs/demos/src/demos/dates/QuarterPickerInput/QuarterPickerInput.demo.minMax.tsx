import { QuarterPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { QuarterPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <QuarterPickerInput
      label="Pick quarter"
      placeholder="Pick quarter"
      defaultDate="2026-01-01"
      minDate="2026-04-01"
      maxDate="2027-07-01"
    />
  );
}
`;

function Demo() {
  return (
    <QuarterPickerInput
      label="Pick quarter"
      placeholder="Pick quarter"
      defaultDate="2026-01-01"
      minDate="2026-04-01"
      maxDate="2027-07-01"
    />
  );
}

export const minMax: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
