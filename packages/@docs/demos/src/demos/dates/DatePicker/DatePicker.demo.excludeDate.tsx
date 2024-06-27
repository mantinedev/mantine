import { DatePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker excludeDate={(date) => date.getDay() !== 5} />;
}
`;

function Demo() {
  return <DatePicker excludeDate={(date) => date.getDay() !== 5} />;
}

export const excludeDate: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
