import { useState } from 'react';
import { CompareSlider, Image, Slider, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const image = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png';

const code = `
import { useState } from 'react';
import { CompareSlider, Image, Slider, Stack, Text } from '@mantine/core';

function Demo() {
  const [position, setPosition] = useState(30);

  return (
    <Stack>
      <CompareSlider
        aria-label="Compare images"
        h={{ base: 192, sm: 320 }}
        w={{ base: 300, sm: 500 }}
        position={position}
        onPositionChange={setPosition}
        before={<Image src="/before.png" alt="Before" h="100%" w="100%" fit="cover" />}
        after={
          <Image
            src="/after.png"
            alt="After"
            h="100%"
            w="100%"
            fit="cover"
            style={{ filter: 'grayscale(1)' }}
          />
        }
      />

      <Text size="sm">Divider position: {Math.round(position)}%</Text>
      <Slider value={position} onChange={setPosition} label={(value) => \`\${value}%\`} />
    </Stack>
  );
}
`;

function Demo() {
  const [position, setPosition] = useState(30);

  return (
    <Stack>
      <CompareSlider
        aria-label="Compare images"
        h={{ base: 192, sm: 320 }}
        w={{ base: 300, sm: 500 }}
        position={position}
        onPositionChange={setPosition}
        before={<Image src={image} alt="Before" h="100%" w="100%" fit="cover" />}
        after={
          <Image
            src={image}
            alt="After"
            h="100%"
            w="100%"
            fit="cover"
            style={{ filter: 'grayscale(1)' }}
          />
        }
      />

      <Text size="sm">Divider position: {Math.round(position)}%</Text>
      <Slider value={position} onChange={setPosition} label={(value) => `${value}%`} />
    </Stack>
  );
}

export const controlled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
