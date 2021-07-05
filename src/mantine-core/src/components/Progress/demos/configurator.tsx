import React from 'react';
import { Progress, ProgressProps } from '../Progress';

function Wrapper(props: ProgressProps) {
  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <Progress {...props} />
    </div>
  );
}

const codeTemplate = (props: string) => `<Progress${props} />`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'value', type: 'number', initialValue: 50, max: 100, min: 0, step: 10 },
    { name: 'striped', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
