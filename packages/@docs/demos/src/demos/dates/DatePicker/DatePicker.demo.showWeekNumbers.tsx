import { DatePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker showWeekNumbers />;
}
`;

function Demo() {
  return <DatePicker showWeekNumbers />;
}

export const showWeekNumbers: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
