import React, { useState } from 'react';
import { MantineDemo } from '@mantinex/demo';
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

const code = `
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`;

export const formatsConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      prop: 'format',
      type: 'select',
      initialValue: 'hex',
      libraryValue: 'hex',
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
