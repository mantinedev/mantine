import { WeekPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { WeekPickerInput } from '@mantine/dates';

function Demo() {
  return <WeekPickerInput maxLevel="year" label="Pick week" placeholder="Pick week" />;
}
`;

function Demo() {
  return <WeekPickerInput maxLevel="year" label="Pick week" placeholder="Pick week" />;
}

export const maxLevel: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
