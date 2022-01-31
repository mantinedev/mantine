import React from 'react';
import { Slider, RangeSlider } from '@mantine/core';

function Wrapper(props: any) {
  const Component = props.type === 'range' ? RangeSlider : Slider;

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Component
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

const codeTemplate = (props: string) => `<${props.includes('range') ? 'RangeSlider' : 'Slider'}${
  props ? `\n  ${props.replace('type="range"', '').trim()}` : '' // please don't judge, this works somehow
}
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
    {
      name: 'type',
      type: 'segmented',
      initialValue: 'slider',
      defaultValue: 'slider',
      data: [
        { label: 'Default', value: 'slider' },
        { label: 'Range', value: 'range' },
      ],
    },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'showLabelOnHover', type: 'boolean', initialValue: true, defaultValue: true },
    { name: 'labelAlwaysOn', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
