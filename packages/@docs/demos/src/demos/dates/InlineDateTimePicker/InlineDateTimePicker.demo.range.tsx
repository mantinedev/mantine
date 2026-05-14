import { InlineDateTimePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  return <InlineDateTimePicker type="range" />;
}
`;

function Demo() {
  return <InlineDateTimePicker type="range" />;
}

export const range: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 280,
  component: Demo,
  code,
};
