import { useState } from 'react';
import { Slider, Stack, Text } from '@mantine/core';
import { useThrottledEffect } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Slider, Stack, Text } from '@mantine/core';
import { useThrottledEffect } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState(0);
  const [samples, setSamples] = useState<number[]>([]);

  useThrottledEffect(
    () => {
      setSamples((current) => [...current, value].slice(-12));
    },
    [value],
    500
  );

  return (
    <Stack>
      <Text size="sm">Drag the slider – the effect samples the value at most once per 500ms</Text>
      <Slider value={value} onChange={setValue} />
      <Text size="sm">Samples: {samples.join(', ') || '–'}</Text>
    </Stack>
  );
}
`;

function Demo() {
  const [value, setValue] = useState(0);
  const [samples, setSamples] = useState<number[]>([]);

  useThrottledEffect(
    () => {
      setSamples((current) => [...current, value].slice(-12));
    },
    [value],
    500
  );

  return (
    <Stack>
      <Text size="sm">Drag the slider – the effect samples the value at most once per 500ms</Text>
      <Slider value={value} onChange={setValue} />
      <Text size="sm">Samples: {samples.join(', ') || '–'}</Text>
    </Stack>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 400,
};
