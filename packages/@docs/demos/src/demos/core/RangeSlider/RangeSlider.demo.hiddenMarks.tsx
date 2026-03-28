import { useState } from 'react';
import { Box, RangeSlider, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { RangeSlider, Text, Box } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [value, setValue] = useState<[number, number]>([25, 75]);

  return (
    <Box pb="md">
      <Text size="sm" mb="xs">
        Hidden marks allow you to snap to specific values without displaying them visually. Current
        value: [{value[0]}, {value[1]}]
      </Text>
      <RangeSlider
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        step={1}
        minRange={10}
        restrictToMarks
        marks={[
          { value: 0, label: '0%' },
          { value: 20, hidden: true },
          { value: 40, hidden: true },
          { value: 50, label: '50%' },
          { value: 60, hidden: true },
          { value: 80, hidden: true },
          { value: 100, label: '100%' },
        ]}
      />
    </Box>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<[number, number]>([25, 75]);

  return (
    <Box pb="md">
      <Text size="sm" mb="xs">
        Hidden marks allow you to snap to specific values without displaying them visually. Current
        value: [{value[0]}, {value[1]}]
      </Text>
      <RangeSlider
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        step={1}
        minRange={10}
        restrictToMarks
        marks={[
          { value: 0, label: '0%' },
          { value: 20, hidden: true },
          { value: 40, hidden: true },
          { value: 50, label: '50%' },
          { value: 60, hidden: true },
          { value: 80, hidden: true },
          { value: 100, label: '100%' },
        ]}
      />
    </Box>
  );
}

export const hiddenMarks: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
