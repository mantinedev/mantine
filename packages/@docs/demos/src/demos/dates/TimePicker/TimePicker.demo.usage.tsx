import { TimePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" />;
}
`;

function Demo() {
  return <TimePicker label="Enter time" />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
