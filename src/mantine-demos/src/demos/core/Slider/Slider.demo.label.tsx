import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Slider, Text, Box } from '@mantine/core';

const code = `
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Disable label */}
      <Slider label={null} />

      {/* Format label with function */}
      <Slider label={(value) => \`\${value} °C\`} />

      {/* Always display label */}
      <Slider labelAlwaysOn />

      {/* Change label transition */}
      <Slider
        labelTransition="skew-down"
        labelTransitionDuration={150}
        labelTransitionTimingFunction="ease"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={400} mx="auto">
      <Text>No label</Text>
      <Slider defaultValue={40} label={null} />

      <Text mt="xl">Formatted label</Text>
      <Slider defaultValue={40} label={(value) => `${value} °C`} />

      <Text mt="xl">Label always visible</Text>
      <Slider defaultValue={40} labelAlwaysOn />

      <Text mt="xl">Custom label transition</Text>
      <Slider
        defaultValue={40}
        labelTransition="skew-down"
        labelTransitionDuration={150}
        labelTransitionTimingFunction="ease"
      />
    </Box>
  );
}

export const label: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
