import { Button } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button fullWidth>Full width button</Button>;
}
`;

function Demo() {
  return <Button fullWidth>Full width button</Button>;
}

export const fullWidth: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
