import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Switch } from '@mantine/core';
import { SwitchStylesApi } from '@mantine/styles-api';

const code = `
import { Switch } from '@mantine/core';

function Demo() {
  return <Switch{{props}} label="Switch component" description="Switch description" error="Switch error />;
}
`;

function Demo(props: any) {
  return (
    <Switch
      {...props}
      label="Switch component"
      description="Switch description"
      error="Switch error"
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: SwitchStylesApi,
  component: Demo,
  centered: true,
  code,
};
