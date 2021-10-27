import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Collapse } from './Collapse';
import { Select } from '../Select';
import { Button } from '../Button/Button';

const content = `
From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with
darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of
its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are
visible in the upper jaw when its mouth is open. Each of its thick legs ends with three
sharp claws. On Bulbasaur&apos;s back is a green plant bulb, which is grown from a seed
planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides
it with energy through photosynthesis as well as from the nutrient-rich seeds contained
within.`;

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' },
];

storiesOf('@mantine/core/Collapse', module)
  .add('Initially closed', () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: 40, maxWidth: 400 }}>
        <Button onClick={() => setOpen((prev) => !prev)} mb={20}>
          collapse
        </Button>

        <Collapse in={open} sx={{ maxWidth: 600, backgroundColor: '#e5d5e4' }}>
          {content}
        </Collapse>
      </div>
    );
  })
  .add('Initially opened', () => {
    const [open, setOpen] = useState(true);
    return (
      <div style={{ padding: 40, maxWidth: 400 }}>
        <Button onClick={() => setOpen((prev) => !prev)} mb={20}>
          collapse
        </Button>

        <Collapse in={open} style={{ maxWidth: '600px' }}>
          {content}
        </Collapse>
      </div>
    );
  })
  .add('With transition API', () => {
    const [open, setOpen] = useState(true);

    return (
      <div style={{ padding: 40, maxWidth: 400 }}>
        <Button onClick={() => setOpen((prev) => !prev)} style={{ marginBottom: 20 }}>
          collapse
        </Button>

        <Collapse
          in={open}
          transitionTimingFunction="ease"
          transitionDuration={600}
          style={{ maxWidth: '600px' }}
        >
          {content}
        </Collapse>
      </div>
    );
  })
  .add('With overflow children', () => {
    const [open, setOpen] = useState(true);

    return (
      <div style={{ padding: 40, maxWidth: 400 }}>
        <Button onClick={() => setOpen((prev) => !prev)} style={{ marginBottom: 20 }}>
          collapse
        </Button>

        <Collapse in={open} transitionTimingFunction="ease" style={{ maxWidth: '600px' }}>
          <Select label="Select" placeholder="Select" data={data} />
        </Collapse>
      </div>
    );
  })
  .add('With dynamic children', () => {
    const [open, setOpen] = useState(true);
    const [texts, setTexts] = useState(['Some text', 'Some text']);

    const addText = () => {
      setTexts((prev) => [...prev, 'Some text']);
    };

    return (
      <div style={{ padding: 40, maxWidth: 400 }}>
        <Button onClick={() => setOpen((prev) => !prev)} style={{ margin: 20 }}>
          collapse
        </Button>

        <Button onClick={addText}>add</Button>

        <Collapse in={open} style={{ maxWidth: '600px' }}>
          <div style={{ border: '1px solid black' }}>
            {texts.map((text) => (
              <div style={{ padding: '8px', border: '1px solid rgba(0, 0, 0, 0.5)' }}>{text}</div>
            ))}
          </div>
        </Collapse>
      </div>
    );
  });
