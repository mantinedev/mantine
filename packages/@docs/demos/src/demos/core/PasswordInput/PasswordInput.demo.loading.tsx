import { PasswordInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { PasswordInput } from '@mantine/core';

function Demo() {
  return <PasswordInput placeholder="Your password" loading />;
}
`;

function Demo() {
  return <PasswordInput placeholder="Your password" loading />;
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
