import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Progress, ProgressProps } from '@mantine/core';

function Wrapper(props: ProgressProps) {
  return <Progress {...props} />;
}

const codeTemplate = (props: string) => `
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress${props} />;
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'value', type: 'number', initialValue: 50, max: 100, min: 0, step: 10 },
    { name: 'striped', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'animate', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
