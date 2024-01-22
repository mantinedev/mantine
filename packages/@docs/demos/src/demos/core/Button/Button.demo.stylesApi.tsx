import React from 'react';
import { IconAt } from '@tabler/icons-react';
import { Button, rem } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { ButtonStylesApi } from '@docs/styles-api';

const code = `
import { Button, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  return <Button{{props}} leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}>Your email</Button>;
}
`;

function Demo(props: any) {
  return (
    <Button leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} {...props}>
      Your email
    </Button>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: ButtonStylesApi,
  component: Demo,
  code,
  centered: true,
};
