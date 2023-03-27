import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { ColorInput, ColorInputProps } from '@mantine/core';

function Wrapper(props: ColorInputProps) {
  return (
    <ColorInput
      maw={320}
      mx="auto"
      label="Choose color format"
      placeholder={props.format}
      defaultValue="#C5D899"
      {...props}
    />
  );
}

const codeTemplate = (props: string) => `
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput defaultValue="#C5D899"${props} />;
}
`;

export const formatsConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'format',
      type: 'select',
      initialValue: 'hex',
      defaultValue: 'hex',
      data: [
        { value: 'hex', label: 'HEX' },
        { value: 'hexa', label: 'HEXA' },
        { value: 'rgb', label: 'RGB' },
        { value: 'rgba', label: 'RGBA' },
        { value: 'hsl', label: 'HSL' },
        { value: 'hsla', label: 'HSLA' },
      ],
    },
  ],
};
