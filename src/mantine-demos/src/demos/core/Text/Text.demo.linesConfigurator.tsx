import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Text, TextProps, Box } from '@mantine/core';

function Wrapper(props: TextProps) {
  return (
    <Box maw={400} mx="auto">
      <Text {...props}>
        From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with
        darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of
        its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are
        visible in the upper jaw when its mouth is open. Each of its thick legs ends with three
        sharp claws. On Bulbasaur&apos;s back is a green plant bulb, which is grown from a seed
        planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides
        it with energy through photosynthesis as well as from the nutrient-rich seeds contained
        within.
      </Text>
    </Box>
  );
}

const codeTemplate = (props: string) => `
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text${props}>
      {/* Text content */}
    </Text>
  );
}
`;

export const linesConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'size', type: 'size', defaultValue: 'md', initialValue: 'md' },
    {
      name: 'lineClamp',
      type: 'number',
      initialValue: 4,
      defaultValue: null,
      min: 1,
      max: 10,
      step: 1,
    },
  ],
};
