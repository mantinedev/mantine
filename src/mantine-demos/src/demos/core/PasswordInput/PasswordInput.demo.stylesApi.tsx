import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { PasswordInput, rem } from '@mantine/core';
import { IconLock } from '@tabler/icons-react';
import { PasswordInputStylesApi } from '@mantine/styles-api';

const code = `
import { IconLock } from '@tabler/icons-react';
import { PasswordInput, rem } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput
      label="Label"
      placeholder="PasswordInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
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
      leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
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
