import React, { useState } from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
import { Collapse } from './Collapse';

export default { title: 'Collapse' };

function Container({
  children,
}: {
  children: (
    opened: boolean,
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
  ) => React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => setOpened((o) => !o)}>Toggle content</Button>
      {children(opened, setOpened)}
    </div>
  );
}

const paragraph = `From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with
darker patches. It has red eyes with white pupils, pointed, ear-like structures on top
of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth
are visible in the upper jaw when its mouth is open. Each of its thick legs ends with
three sharp claws. On Bulbasaur back is a green plant bulb, which is grown from a seed
planted there at birth. The bulb also conceals two slender, tentacle-like vines and
provides it with energy through photosynthesis as well as from the nutrient-rich seeds
contained within.`;

export function YAxis() {
  return (
    <Container>
      {(opened) => (
        <Collapse axis="y" in={opened}>
          <div style={{ backgroundColor: 'gray' }}>{paragraph}</div>
        </Collapse>
      )}
    </Container>
  );
}

export function XAxis() {
  return (
    <Container>
      {(opened) => (
        <Collapse axis="x" in={opened}>
          <div style={{ backgroundColor: 'gray' }}>{paragraph}</div>
        </Collapse>
      )}
    </Container>
  );
}

export function XAxisWithFlexBox() {
  return (
    <Container>
      {(opened) => (
        <div style={{ display: 'flex' }}>
          <Collapse axis="x" in={opened}>
            <div style={{ backgroundColor: 'gray' }}>{paragraph}</div>
          </Collapse>
          <Box>{paragraph}</Box>
        </div>
      )}
    </Container>
  );
}
