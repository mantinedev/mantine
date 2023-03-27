import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { RangeSlider, Slider, Stack } from '@mantine/core';

const code = `
import { RangeSlider, Slider, Stack } from '@mantine/core';

function Demo() {
  function valueLabelFormat(value: number) {
    const units = ['KB', 'MB', 'GB', 'TB'];

    let unitIndex = 0;
    let scaledValue = value;

    while (scaledValue >= 1024 && unitIndex < units.length - 1) {
      unitIndex += 1;
      scaledValue /= 1024;
    }

    return \`\${scaledValue} \${units[unitIndex]}\`;
  }

  return (
    <Stack spacing="xl" p="xl">
      <Slider
        py="xl"
        scale={(v) => 2 ** v}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={10}
        label={valueLabelFormat}
      />
      <RangeSlider
        py="xl"
        scale={(v) => 2 ** v}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={[10, 20]}
        label={valueLabelFormat}
      />
    </Stack>
  );
}
`;

function Demo() {
  function valueLabelFormat(value: number) {
    const units = ['KB', 'MB', 'GB', 'TB'];

    let unitIndex = 0;
    let scaledValue = value;

    while (scaledValue >= 1024 && unitIndex < units.length - 1) {
      unitIndex += 1;
      scaledValue /= 1024;
    }

    return `${scaledValue} ${units[unitIndex]}`;
  }
  return (
    <Stack spacing="xl" p="xl">
      <Slider
        py="xl"
        scale={(v) => 2 ** v}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={10}
        label={valueLabelFormat}
      />
      <RangeSlider
        py="xl"
        scale={(v) => 2 ** v}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={[10, 20]}
        label={valueLabelFormat}
      />
    </Stack>
  );
}

export const scale: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
