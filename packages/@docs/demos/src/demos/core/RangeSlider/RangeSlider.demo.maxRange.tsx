import { RangeSlider, Text } from '@mantine/core';
import { useState } from 'react';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { RangeSlider, Text } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [value, setValue] = useState<[number, number]>([20, 80]);

  return (
    <>
      <Text size="sm" mb="xs">
        Maximum range: 50 (selection cannot be wider than 50 units)
      </Text>
      <RangeSlider
        value={value}
        onChange={setValue}
        maxRange={50}
      />
      <Text size="sm" mt="xs">
        Value: [{value[0]}, {value[1]}] - Range: {value[1] - value[0]}
      </Text>
    </>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<[number, number]>([20, 80]);

  return (
    <>
      <Text size="sm" mb="xs">
        Maximum range: 50 (selection cannot be wider than 50 units)
      </Text>
      <RangeSlider
        value={value}
        onChange={setValue}
        maxRange={50}
      />
      <Text size="sm" mt="xs">
        Value: [{value[0]}, {value[1]}] - Range: {value[1] - value[0]}
      </Text>
    </>
  );
}

export const maxRange: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
