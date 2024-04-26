import { Box, TimelineProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { TimelineBase } from './_base';

function Wrapper(props: TimelineProps) {
  return (
    <Box maw={320} mx="auto">
      <TimelineBase noIcon {...props} />
    </Box>
  );
}

const code = `
import { Timeline } from '@mantine/core';

function Demo() {
  return (
    <Timeline{{props}}>
      {/* items */}
    </Timeline>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    { prop: 'color', type: 'color', initialValue: 'blue', libraryValue: 'blue' },
    { prop: 'radius', type: 'size', initialValue: 'xl', libraryValue: 'xl' },
    { prop: 'active', type: 'number', initialValue: 1, libraryValue: null, min: -1, max: 3 },
    { prop: 'reverseActive', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'lineWidth', type: 'number', initialValue: 4, libraryValue: 4, min: 1, max: 6 },
    {
      prop: 'bulletSize',
      type: 'number',
      initialValue: 25,
      libraryValue: 20,
      min: 18,
      max: 40,
      step: 1,
    },
    {
      prop: 'align',
      type: 'segmented',
      data: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      initialValue: 'left',
      libraryValue: 'left',
    },
  ],
};
