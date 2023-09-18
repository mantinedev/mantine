import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { ColorInput } from '@mantine/core';
import { ColorInputStylesApi } from '@mantine/styles-api';

const code = `
import { ColorInput, rem } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      label="Label"
      placeholder="ColorInput"
      description="Description"
      error="Error"
      withAsterisk
      swatches={['#000', '#fff', '#f00', '#0f0', '#00f']}
      format="rgba"
      {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <ColorInput
      label="Label"
      placeholder="ColorInput"
      description="Description"
      error="Error"
      withAsterisk
      swatches={['#000', '#fff', '#f00', '#0f0', '#00f']}
      format="rgba"
      classNames={props.classNames}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: ColorInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
