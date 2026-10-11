import { Progress } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress indeterminate aria-label="Loading" />;
}
`;

function Demo() {
  return <Progress indeterminate aria-label="Loading" />;
}

export const indeterminate: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
