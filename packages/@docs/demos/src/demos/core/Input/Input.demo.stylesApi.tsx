import React from 'react';
import { IconAt, IconChevronDown } from '@tabler/icons-react';
import { Input, rem } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { InputStylesApi } from '@docs/styles-api';

const code = `
import { Input, rem } from '@mantine/core';

function Demo() {
  const at = <IconAt style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
  const chevron = <IconChevronDown style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
  return <Input{{props}} placeholder="Input component" leftSection={at} rightSection={chevron} />;
}
`;

function Demo(props: any) {
  const at = <IconAt style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
  const chevron = <IconChevronDown style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
  return <Input placeholder="Input component" leftSection={at} rightSection={chevron} {...props} />;
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: InputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
