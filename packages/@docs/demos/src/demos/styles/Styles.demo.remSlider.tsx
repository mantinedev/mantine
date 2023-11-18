import React, { useEffect } from 'react';
import { MantineDemo } from '@mantine/ds';
import { Slider } from '@mantine/core';

const code = `
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      defaultValue={100}
      min={70}
      max={130}
      onChange={(value) => {
        document.documentElement.style.fontSize = \`\${value}%\`;
      }}
    />
  );
}
`;

function Demo() {
  useEffect(
    () => () => {
      document.documentElement.style.fontSize = '100%';
    },
    []
  );

  return (
    <Slider
      defaultValue={100}
      min={70}
      max={130}
      onChange={(value) => {
        document.documentElement.style.fontSize = `${value}%`;
      }}
    />
  );
}

export const remSlider: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
