import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { baseDemoItems } from '../demos/_base';
import { TextInput } from '../../TextInput';
import { Button } from '../../Button';
import { Group } from '../../Group';
import { Accordion } from '../Accordion';
import { useAccordionState } from '../use-accordion-state/use-accordion-state';

const form = (
  <>
    <TextInput label="Email" placeholder="Email" />
    <TextInput label="Name" placeholder="Name" mt="md" />
  </>
);

function Controlled() {
  const [state, handlers] = useAccordionState({ itemsCount: 3, multiple: true });

  return (
    <>
      <Group position="center" mt="xl">
        <Button variant="outline" onClick={() => handlers.toggle(0)}>
          Toggle 0
        </Button>
        <Button variant="outline" onClick={() => handlers.toggle(1)}>
          Toggle 1
        </Button>
        <Button variant="outline" onClick={() => handlers.toggle(2)}>
          Toggle 2
        </Button>
      </Group>
      <Accordion
        mt="xl"
        mx="auto"
        sx={{ maxWidth: 400 }}
        state={state}
        onChange={handlers.setState}
      >
        {baseDemoItems}
      </Accordion>
    </>
  );
}

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
  .add('Dynamic children', () => <Dynamic />)
  .add('Controlled', () => <Controlled />);
