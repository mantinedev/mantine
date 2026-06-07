import { InlineDateTimePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  return <InlineDateTimePicker type="range" valueFormat="MMMM YYYY, DD HH:mm" />;
}
`;

function Demo() {
  return <InlineDateTimePicker type="range" valueFormat="MMMM YYYY, DD HH:mm" />;
}

export const format: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 280,
  component: Demo,
  code,
};
