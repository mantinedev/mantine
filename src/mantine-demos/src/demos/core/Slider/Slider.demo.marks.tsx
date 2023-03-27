import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Slider, RangeSlider, Box } from '@mantine/core';

const code = `
import { Slider, RangeSlider } from '@mantine/core';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return (
    <>
      <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} />
      <Slider defaultValue={40} marks={marks} />
      <RangeSlider defaultValue={[20, 80]} marks={marks} />
    </>
  );
}
`;

function Demo() {
  const marks = [
    { value: 20, label: '20%' },
    { value: 50, label: '50%' },
    { value: 80, label: '80%' },
  ];

  return (
    <Box maw={400} mx="auto">
      <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} pb={50} />
      <Slider defaultValue={40} marks={marks} pb={50} />
      <RangeSlider defaultValue={[20, 80]} marks={marks} pb={50} />
    </Box>
  );
}

export const marks: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
