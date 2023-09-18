import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Textarea, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import { TextareaStylesApi } from '@mantine/styles-api';

const code = `
import { IconAt } from '@tabler/icons-react';
import { Textarea, rem } from '@mantine/core';

function Demo() {
  return (
    <Textarea
      label="Label"
      placeholder="Textarea"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      autosize
      {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <Textarea
      label="Label"
      placeholder="Textarea"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      autosize
      {...props}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: TextareaStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
