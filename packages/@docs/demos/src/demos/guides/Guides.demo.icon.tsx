import React from 'react';
import { IconBrandMantine } from '@tabler/icons-react';
import { rem } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { rem } from '@mantine/core';
import { IconBrandMantine } from '@tabler/icons-react';

function Demo() {
  return (
    <IconBrandMantine
      style={{ width: rem(80), height: rem(80) }}
      stroke={1.5}
      color="var(--mantine-color-blue-filled)"
    />
  );
}
`;

function Demo() {
  return (
    <IconBrandMantine
      style={{ width: rem(80), height: rem(80) }}
      stroke={1.5}
      color="var(--mantine-color-blue-filled)"
    />
  );
}

export const icon: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
