import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { Stack, Text, ColorPicker, ColorPickerProps } from '@mantine/core';

function Wrapper(props: ColorPickerProps) {
  const [value, onChange] = useState('#C5D899');

  return (
    <Stack align="center">
      <ColorPicker value={value} onChange={onChange} {...props} />
      <Text>{value}</Text>
    </Stack>
  );
}

const codeTemplate = (props: string) => `
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker${props} />;
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
