import { Switch } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Switch } from '@mantine/core';

function Demo() {
  return <Switch size="lg" label="Press and hold the switch" />;
}
`;

function Demo() {
  return <Switch size="lg" label="Press and hold the switch" />;
}

export const pressed: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
