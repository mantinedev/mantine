import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Group } from '../Group/Group';
import { Button } from '../Button/Button';
import { Chip } from './Chip/Chip';
import { Chips } from './Chips';

function Dynamic() {
  const [count, setCount] = useState(3);
  const chips = Array(count)
    .fill(0)
    .map((_, index) => (
      <Chip key={index} value={index.toString()}>
        Chip {index + 1}
      </Chip>
    ));
  return (
    <>
      <Chips mt="xl" position="center">
        {chips}
      </Chips>
      <Group position="center" mt="xl">
        <Button
          variant="outline"
          color="red"
          onClick={() => setCount((c) => (c - 1 > 0 ? c - 1 : c))}
        >
          Remove
        </Button>
        <Button variant="outline" onClick={() => setCount((c) => c + 1)}>
          Add
        </Button>
      </Group>
    </>
  );
}

function Controlled() {
  const [value, setValue] = useState<string>(null);
  const chips = Array(3)
    .fill(0)
    .map((_, index) => (
      <Chip key={index} value={index.toString()}>
        Chip {index + 1}
      </Chip>
    ));

  return (
    <Chips multiple={false} value={value} onChange={setValue} sx={{ padding: 15 }}>
      {chips}
    </Chips>
  );
}

storiesOf('@mantine/core/Chips/stories', module)
  .add('Sizes', () => (
    <Group style={{ padding: 40 }} direction="column">
      <Chip value="1" size="xs">
        xs chip
      </Chip>
      <Chip value="1" size="sm">
        sm chip
      </Chip>
      <Chip value="1" size="md">
        md chip
      </Chip>
      <Chip value="1" size="lg">
        lg chip
      </Chip>
      <Chip value="1" size="xl">
        xl chip
      </Chip>
    </Group>
  ))
  .add('Dynamic chips', () => <Dynamic />)
  .add('Controlled', () => <Controlled />);
