import { RangeSlider, Text } from '@mantine/core';
import { useState } from 'react';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { RangeSlider, Text } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [value, setValue] = useState<[number, number]>([30, 60]);

  return (
    <>
      <Text size="sm" mb="xs">
        Minimum range: 20 (thumbs must be at least 20 units apart)
      </Text>
      <RangeSlider
        value={value}
        onChange={setValue}
        minRange={20}
      />
      <Text size="sm" mt="xs">
        Value: [{value[0]}, {value[1]}] - Range: {value[1] - value[0]}
      </Text>
    </>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<[number, number]>([30, 60]);

  return (
    <>
      <Text size="sm" mb="xs">
        Minimum range: 20 (thumbs must be at least 20 units apart)
      </Text>
      <RangeSlider
        value={value}
        onChange={setValue}
        minRange={20}
      />
      <Text size="sm" mt="xs">
        Value: [{value[0]}, {value[1]}] - Range: {value[1] - value[0]}
      </Text>
    </>
  );
}

export const minRange: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
