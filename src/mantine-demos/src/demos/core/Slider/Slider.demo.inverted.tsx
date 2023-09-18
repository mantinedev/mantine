import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { RangeSlider, Slider } from '@mantine/core';

const code = `
import { RangeSlider, Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} />
      <RangeSlider inverted defaultValue={[40, 80]} mt="xl" />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} />
      <RangeSlider inverted defaultValue={[40, 80]} mt="xl" />
    </>
  );
}

export const inverted: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 400,
};
