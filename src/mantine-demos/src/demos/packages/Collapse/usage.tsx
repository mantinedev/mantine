import React, { useState } from 'react';
import { Button, Group, Text, Collapse } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Button, Collapse } from '@mantine/core';

function Demo() {
  const [opened, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen((o) => !o)}>
        Toggle content
      </Button>

      <Collapse in={opened}>
        {/* content... */}
      </Collapse>
    </>
  );
}
`;

function Demo() {
  const [opened, setOpen] = useState(false);

  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <Group position="center" style={{ marginBottom: 5 }}>
        <Button onClick={() => setOpen((o) => !o)} style={{ marginBottom: 5 }}>
          Toggle content
        </Button>
      </Group>

      <Collapse in={opened}>
        <Text>
          From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with
          darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of
          its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are
          visible in the upper jaw when its mouth is open. Each of its thick legs ends with three
          sharp claws. On Bulbasaur&apos;s back is a green plant bulb, which is grown from a seed
          planted there at birth. The bulb also conceals two slender, tentacle-like vines and
          provides it with energy through photosynthesis as well as from the nutrient-rich seeds
          contained within.
        </Text>
      </Collapse>
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
