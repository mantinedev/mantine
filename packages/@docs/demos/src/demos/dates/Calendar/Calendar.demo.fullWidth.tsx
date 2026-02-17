import { Calendar } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Calendar } from '@mantine/dates';

function Demo() {
  return <Calendar fullWidth />;
}
`;

function Demo() {
  return <Calendar fullWidth />;
}

export const fullWidth: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 600,
  component: Demo,
  code,
};
