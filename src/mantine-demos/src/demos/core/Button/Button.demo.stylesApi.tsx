import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Button, rem } from '@mantine/core';
import { ButtonStylesApi } from '@mantine/styles-api';
import { IconAt } from '@tabler/icons-react';

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
