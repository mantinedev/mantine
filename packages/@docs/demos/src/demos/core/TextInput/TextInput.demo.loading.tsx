import { TextInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput placeholder="Your email" loading />;
}
`;

function Demo() {
  return <TextInput placeholder="Your email" loading />;
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
