import { QuarterPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { QuarterPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <QuarterPickerInput
      disabled
      label="Disabled"
      placeholder="Pick quarter"
      defaultValue="2026-04-01"
    />
  );
}
`;

function Demo() {
  return (
    <QuarterPickerInput
      disabled
      label="Disabled"
      placeholder="Pick quarter"
      defaultValue="2026-04-01"
    />
  );
}

export const disabled: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
