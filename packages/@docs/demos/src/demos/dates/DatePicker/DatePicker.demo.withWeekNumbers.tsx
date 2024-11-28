import { DatePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker withWeekNumbers />;
}
`;

function Demo() {
  return <DatePicker withWeekNumbers />;
}

export const withWeekNumbers: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
