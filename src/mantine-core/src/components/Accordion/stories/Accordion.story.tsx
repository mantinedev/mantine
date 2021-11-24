import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { TextInput } from '../../TextInput';
import { Button } from '../../Button';
import { Group } from '../../Group';
import { Accordion } from '../Accordion';

const form = (
  <>
    <TextInput label="Email" placeholder="Email" />
    <TextInput label="Name" placeholder="Name" mt="md" />
  </>
);

function Dynamic() {
  const [count, setCount] = useState(2);
  const items = Array(count)
    .fill(0)
    .map((_, index) => (
      <Accordion.Item key={index} label={`Item ${index + 1}`}>
        Content {index + 1}
      </Accordion.Item>
    ));

  return (
    <>
      <Group position="center" mt="xl">
        <Button
          variant="outline"
          color="red"
          onClick={() => setCount((c) => (c - 1 > 0 ? c - 1 : 0))}
        >
          Remove item
        </Button>
        <Button variant="outline" onClick={() => setCount((c) => c + 1)}>
          Add item
        </Button>
      </Group>
      <Accordion mt="xl" mx="auto" sx={{ maxWidth: 400 }}>
        {items}
      </Accordion>
    </>
  );
}

storiesOf('@mantine/core/Accordion/stories', module)
  .add('With form', () => (
    <Accordion mt="xl" mx="auto" sx={{ maxWidth: 400 }}>
      <Accordion.Item label="First tab">{form}</Accordion.Item>
      <Accordion.Item label="Second tab">{form}</Accordion.Item>
    </Accordion>
  ))
  .add('Dynamic children', () => <Dynamic />);
