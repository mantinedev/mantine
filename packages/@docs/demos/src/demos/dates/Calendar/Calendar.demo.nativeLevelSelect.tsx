import { Calendar } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Calendar } from '@mantine/dates';

function Demo() {
  return <Calendar withNativeLevelSelect />;
}
`;

function Demo() {
  return <Calendar withNativeLevelSelect />;
}

export const nativeLevelSelect: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
