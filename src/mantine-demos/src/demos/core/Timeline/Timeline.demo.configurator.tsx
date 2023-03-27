import React from 'react';
import { TimelineProps, Box } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { TimelineBase } from './_base';

function Wrapper(props: TimelineProps) {
  return (
    <Box maw={320} mx="auto">
      <TimelineBase noIcon {...props} />
    </Box>
  );
}

const codeTemplate = (props: string) => `
import { Timeline } from '@mantine/core';

function Demo() {
  return (
    <Timeline${props}>
      {/* items */}
    </Timeline>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
    { name: 'active', type: 'number', initialValue: 1, defaultValue: null, min: -1, max: 3 },
    { name: 'reverseActive', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'lineWidth', type: 'number', initialValue: 4, defaultValue: 4, min: 1, max: 8 },
    {
      name: 'bulletSize',
      type: 'number',
      initialValue: 20,
      defaultValue: 20,
      min: 12,
      max: 30,
      step: 2,
    },
    {
      name: 'align',
      type: 'segmented',
      data: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      initialValue: 'left',
      defaultValue: 'left',
    },
  ],
};
