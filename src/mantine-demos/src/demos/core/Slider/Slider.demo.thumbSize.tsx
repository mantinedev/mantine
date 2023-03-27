import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Slider, RangeSlider, Box } from '@mantine/core';

function Wrapper(props: any) {
  return (
    <Box maw={400} mx="auto">
      <Slider {...props} defaultValue={20} />
      <RangeSlider {...props} mt="xl" defaultValue={[20, 80]} />
    </Box>
  );
}

const codeTemplate = (props: string) => `
import { Slider, RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider${props} defaultValue={20} />
      <RangeSlider${props} mt="xl" defaultValue={[20, 80]} />
    </>
  );
}
`;

export const thumbSize: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: 'thumbSize', type: 'number', min: 14, max: 32, initialValue: 14 }],
};
