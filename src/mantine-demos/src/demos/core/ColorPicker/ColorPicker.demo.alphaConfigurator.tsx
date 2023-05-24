import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { Text, DEFAULT_THEME, AlphaSlider, AlphaSliderProps, Box } from '@mantine/core';

function Wrapper(props: AlphaSliderProps) {
  const [value, onChange] = useState(1);
  return (
    <Box maw={300} mx="auto">
      <Text mb="xs" ml={-6}>
        Alpha value: {value}
      </Text>
      <AlphaSlider
        mx="auto"
        color={DEFAULT_THEME.colors.blue[7]}
        value={value}
        onChange={onChange}
        {...props}
      />
    </Box>
  );
}

const codeTemplate = (props: string) => `import { useState } from 'react';
import { AlphaSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(1);

  return (
    <>
      <Text>Alpha value: {value}</Text>
      <AlphaSlider color="${DEFAULT_THEME.colors.blue[7]}" value={value} onChange={onChange}${props} />
    </>
  );
}`;

export const alphaConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' }],
};
