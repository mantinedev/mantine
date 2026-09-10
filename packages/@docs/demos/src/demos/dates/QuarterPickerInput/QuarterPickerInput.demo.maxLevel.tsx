import { QuarterPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { QuarterPickerInput } from '@mantine/dates';

function Demo() {
  return <QuarterPickerInput maxLevel="year" label="Pick quarter" placeholder="Pick quarter" />;
}
`;

function Demo() {
  return <QuarterPickerInput maxLevel="year" label="Pick quarter" placeholder="Pick quarter" />;
}

export const maxLevel: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
