import React from 'react';
import { Slider, SliderProps } from '../Slider/Slider';

function Wrapper(props: SliderProps) {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Slider
        defaultValue={40}
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
        {...props}
      />
    </div>
  );
}

const codeTemplate = (props: string) => `<Slider${props ? `\n ${props}` : ''}
  marks={[
    { value: 20, label: '20%' },
    { value: 50, label: '50%' },
    { value: 80, label: '80%' },
  ]}
/>`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'labelAlwaysOn', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
