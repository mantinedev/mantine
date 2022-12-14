import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { IndicatorProps, Button, Flex } from '@mantine/core';

function Wrapper(props: IndicatorProps) {
  return (
    <Flex mih={50} bg="rgba(0, 0, 0, .3)" {...props}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}

const codeTemplate = (props: string) => `
import { Flex, Button } from '@mantine/core';

function Demo() {
  return (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
     ${props}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configuratorProps: {
    multiline: 3,
  },
  configurator: [
    { name: 'gap', type: 'size', initialValue: 'md', defaultValue: null },
    {
      name: 'justify',
      type: 'select',
      data: [
        { value: 'flex-start', label: 'flex-start' },
        { value: 'center', label: 'center' },
        { value: 'flex-end', label: 'flex-end' },
      ],
      initialValue: 'flex-start',
      defaultValue: null,
    },
    {
      name: 'align',
      type: 'select',
      data: [
        { value: 'flex-start', label: 'flex-start' },
        { value: 'center', label: 'center' },
        { value: 'flex-end', label: 'flex-end' },
      ],
      initialValue: 'flex-start',
      defaultValue: null,
    },
    {
      name: 'direction',
      type: 'select',
      data: [
        { value: 'row', label: 'row' },
        { value: 'column', label: 'column' },
        { value: 'row-reverse', label: 'row-reverse' },
        { value: 'column-reverse', label: 'column-reverse' },
      ],
      initialValue: 'row',
      defaultValue: null,
    },
    {
      name: 'wrap',
      type: 'select',
      data: [
        { value: 'wrap', label: 'wrap' },
        { value: 'nowrap', label: 'nowrap' },
        { value: 'wrap-reverse', label: 'wrap-reverse' },
      ],
      initialValue: 'wrap',
      defaultValue: null,
    },
  ],
};
