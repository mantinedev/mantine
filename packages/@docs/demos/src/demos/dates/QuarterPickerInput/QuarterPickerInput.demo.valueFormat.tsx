import { QuarterPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { QuarterPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <QuarterPickerInput
      valueFormat="YYYY [Q]Q"
      type="multiple"
      label="Pick quarter"
      placeholder="Pick quarter"
    />
  );
}
`;

function Demo() {
  return (
    <QuarterPickerInput
      valueFormat="YYYY [Q]Q"
      type="multiple"
      label="Pick quarter"
      placeholder="Pick quarter"
    />
  );
}

export const valueFormat: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
