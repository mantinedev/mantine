import { JsonInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { JsonInput } from '@mantine/core';

function Demo() {
  return <JsonInput label="JSON config" placeholder="JSON config" success="Valid JSON" />;
}
`;

function Demo() {
  return <JsonInput label="JSON config" placeholder="JSON config" success="Valid JSON" />;
}

export const success: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
