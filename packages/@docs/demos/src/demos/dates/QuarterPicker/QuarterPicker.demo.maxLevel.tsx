import { QuarterPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { QuarterPicker } from '@mantine/dates';

function Demo() {
  return <QuarterPicker maxLevel="year" />;
}
`;

function Demo() {
  return <QuarterPicker maxLevel="year" />;
}

export const maxLevel: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
