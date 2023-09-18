import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { JsonInput, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import { JsonInputStylesApi } from '@mantine/styles-api';

const code = `
import { IconAt } from '@tabler/icons-react';
import { JsonInput, rem } from '@mantine/core';

function Demo() {
  return (
    <JsonInput
      label="Label"
      placeholder="JsonInput"
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
    <JsonInput
      label="Label"
      placeholder="JsonInput"
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
  data: JsonInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
