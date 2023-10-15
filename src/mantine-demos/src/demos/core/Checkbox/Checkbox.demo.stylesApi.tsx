import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Checkbox } from '@mantine/core';
import { CheckboxStylesApi } from '@mantine/styles-api';

const code = `
import { Checkbox } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  return (
    <Checkbox
      label="Checkbox"
      description="Checkbox description"
      error="Checkbox error"
      defaultChecked
     {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <Checkbox
      label="Checkbox"
      description="Checkbox description"
      error="Checkbox error"
      defaultChecked
      {...props}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: CheckboxStylesApi,
  component: Demo,
  code,
  centered: true,
};
