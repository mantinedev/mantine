import { QuarterPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { QuarterPicker } from '@mantine/dates';

function Demo() {
  return <QuarterPicker withNativeLevelSelect />;
}
`;

function Demo() {
  return <QuarterPicker withNativeLevelSelect />;
}

export const nativeLevelSelect: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
