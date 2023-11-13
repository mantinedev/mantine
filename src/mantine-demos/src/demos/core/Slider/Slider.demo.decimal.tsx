import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Slider } from '@mantine/core';

const code = `
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}
`;

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}

export const decimal: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
