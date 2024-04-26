import { DatePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideOutsideDates />;
}
`;

function Demo() {
  return <DatePicker hideOutsideDates />;
}

export const hideOutsideDates: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
