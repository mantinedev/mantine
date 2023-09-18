import React from 'react';
import { ScrollArea, ScrollAreaProps, Box } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { Content } from './_content';

function Wrapper(props: ScrollAreaProps) {
  return (
    <Box maw={400} mx="auto">
      <ScrollArea h={250} {...props}>
        <Content />
      </ScrollArea>
    </Box>
  );
}

const code = `
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={250}{{props}}>
      {/* ... content */}
    </ScrollArea>
  );
}
`;

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      prop: 'type',
      type: 'select',
      data: [
        { value: 'hover', label: 'Hover' },
        { value: 'auto', label: 'Auto' },
        { value: 'always', label: 'Always' },
        { value: 'scroll', label: 'Scroll' },
        { value: 'never', label: 'Never' },
      ],
      initialValue: 'hover',
      libraryValue: 'hover',
    },
    {
      prop: 'offsetScrollbars',
      type: 'boolean',
      libraryValue: false,
      initialValue: false,
    },
    {
      prop: 'scrollbarSize',
      type: 'number',
      min: 2,
      max: 20,
      step: 2,
      libraryValue: 10,
      initialValue: 10,
    },
    {
      prop: 'scrollHideDelay',
      type: 'number',
      min: 0,
      max: 6000,
      step: 500,
      libraryValue: 1000,
      initialValue: 1000,
    },
  ],
};
