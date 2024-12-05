import { IconLock } from '@tabler/icons-react';
import { PasswordInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { PasswordInputStylesApi } from '@docs/styles-api';

const code = `
import { IconLock } from '@tabler/icons-react';
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput
      label="Label"
      placeholder="PasswordInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconLock size={18} />}
      {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <PasswordInput
      label="Label"
      placeholder="PasswordInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconLock size={18} />}
      {...props}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: PasswordInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
