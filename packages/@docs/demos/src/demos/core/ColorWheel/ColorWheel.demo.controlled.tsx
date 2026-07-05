import { useState } from 'react';
import { ColorSwatch, ColorWheel, Group, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { ColorSwatch, ColorWheel, Group, Stack, Text } from '@mantine/core';

function Demo() {
  const [hue, setHue] = useState(210);

  return (
    <Stack align="center">
      <Group>
        <ColorSwatch color={\`hsl(\${hue}, 100%, 50%)\`} />
        <Text size="sm">Hue: {hue}°</Text>
      </Group>
      <ColorWheel aria-label="Color wheel" value={hue} onChange={setHue} />
    </Stack>
  );
}
`;

function Demo() {
  const [hue, setHue] = useState(210);

  return (
    <Stack align="center">
      <Group>
        <ColorSwatch color={`hsl(${hue}, 100%, 50%)`} />
        <Text size="sm">Hue: {hue}°</Text>
      </Group>
      <ColorWheel aria-label="Color wheel" value={hue} onChange={setHue} />
    </Stack>
  );
}

export const controlled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
