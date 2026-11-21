import { QuarterPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { QuarterPicker } from '@mantine/dates';

function Demo() {
  return <QuarterPicker fullWidth />;
}
`;

function Demo() {
  return <QuarterPicker fullWidth />;
}

export const fullWidth: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 500,
  component: Demo,
  code,
};
