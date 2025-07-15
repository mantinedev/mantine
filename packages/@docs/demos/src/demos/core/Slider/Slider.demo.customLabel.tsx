import React from 'react';
import { Slider } from '@mantine/core';

function valueLabel(value: number) {
  return `Volume: ${value}%`;
}

function Demo() {
  return (
    <Slider
      defaultValue={40}
      label={valueLabel}
      step={5}
      min={0}
      max={100}
    />
  );
}

export const customLabel: MantineDemo = {
  type: 'demo',
  component: Demo,
};
