import { PasswordInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { PasswordInput } from '@mantine/core';

function Demo() {
  return <PasswordInput label="Password Input" placeholder="Password Input" success="Looks good!" />;
}
`;

function Demo() {
  return (
    <PasswordInput label="Password Input" placeholder="Password Input" success="Looks good!" />
  );
}

export const success: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
