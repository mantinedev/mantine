import { Badge } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
`;

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}

export const fullWidth: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
