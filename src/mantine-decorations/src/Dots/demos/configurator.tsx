import React from 'react';
import { Dots, DotsProps } from '../Dots';

function Wrapper(props: DotsProps) {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '100%' }}
    >
      <Dots {...props} />
    </div>
  );
}

const codeTemplate = (props: string) => `<Dots${props} />`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'size',
      type: 'number',
      initialValue: 185,
      defaultValue: 185,
      min: 50,
      max: 300,
      step: 5,
    },
    {
      name: 'radius',
      type: 'number',
      initialValue: 2,
      defaultValue: 2,
      max: 5,
      min: 0,
      step: 1,
    },
  ],
};
