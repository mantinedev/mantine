import React from 'react';
import { Slider, RangeSlider } from '@mantine/core';

function Wrapper(props: any) {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Slider {...props} defaultValue={20} />
      <RangeSlider {...props} mt="xl" defaultValue={[20, 80]} />
    </div>
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
