import { WeekPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { WeekPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <WeekPickerInput
      disabled
      label="Disabled"
      placeholder="Pick week"
      defaultValue="2026-03-02"
    />
  );
}
`;

function Demo() {
  return (
    <WeekPickerInput disabled label="Disabled" placeholder="Pick week" defaultValue="2026-03-02" />
  );
}

export const disabled: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
