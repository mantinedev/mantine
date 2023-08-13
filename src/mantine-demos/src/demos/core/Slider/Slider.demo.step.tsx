import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Slider, Text, Box } from '@mantine/core';

const code = `
import { Slider } from '@mantine/core';

// Configure marks to match step
const MARKS = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' },
];

function Demo() {
  return (
    <>
      {/* Set min, max and step props to replace default values */}
      <Slider
        defaultValue={5}
        min={-10}
        max={10}
        label={(value) => value.toFixed(1)}
        step={0.1}
        precision={1}
        styles={{ markLabel: { display: 'none' } }}
      />

      <Slider
        label={(val) => MARKS.find((mark) => mark.value === val).label}
        defaultValue={50}
        step={25}
        marks={MARKS}
        styles={{ markLabel: { display: 'none' } }}
      />
    </>
  );
}
`;

function Demo() {
  const MARKS = [
    { value: 0, label: 'xs' },
    { value: 25, label: 'sm' },
    { value: 50, label: 'md' },
    { value: 75, label: 'lg' },
    { value: 100, label: 'xl' },
  ];

  return (
    <Box maw={400} mx="auto">
      <Text>Decimal step</Text>
      <Slider
        defaultValue={0}
        min={-10}
        max={10}
        label={(value) => value.toFixed(1)}
        step={0.1}
        styles={{ markLabel: { display: 'none' } }}
      />

      <Text mt="md">Step matched with marks</Text>
      <Slider
        defaultValue={50}
        label={(val) => MARKS.find((mark) => mark.value === val).label}
        step={25}
        marks={MARKS}
        styles={{ markLabel: { display: 'none' } }}
      />
    </Box>
  );
}

export const step: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
