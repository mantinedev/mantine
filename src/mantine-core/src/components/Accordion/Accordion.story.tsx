import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { Group } from '../Group';
import { Accordion, AccordionProps } from './Accordion';
import { useAccordionState } from './use-accordion-state/use-accordion-state';

const paragraph =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quisquam quaerat dolore ex. Dicta voluptate sit corrupti dignissimos, eius reprehenderit! Veritatis unde ad tenetur officiis consequatur qui quasi eum atque!';

const form = (
  <>
    <TextInput label="Email" placeholder="Email" />
    <TextInput label="Name" placeholder="Name" mt="md" />
  </>
);

function Controlled(props: Partial<AccordionProps>) {
  const [state, handlers] = useAccordionState({ total: 3, multiple: props.multiple || false });

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
        {...props}
      >
        <Accordion.Item label="First tab">First tab content</Accordion.Item>
        <Accordion.Item label="Second tab">Second tab content</Accordion.Item>
        <Accordion.Item label="Third tab">Third tab content</Accordion.Item>
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
  .add('With different heading level', () => (
    <Accordion mt="xl" mx="auto" sx={{ maxWidth: 400 }} order={2}>
      <Accordion.Item label="First tab">First tab content</Accordion.Item>
      <Accordion.Item label="Second tab">Second tab content</Accordion.Item>
    </Accordion>
  ))
  .add('Dynamic children', () => <Dynamic />)
  .add('Controlled single', () => <Controlled />)
  .add('Controlled multiple', () => <Controlled multiple />)
  .add('Multiline label', () => (
    <Accordion mt="xl" mx="auto" sx={{ maxWidth: 400 }}>
      <Accordion.Item label="First item with a large label that will collapse to second line">
        {paragraph}
      </Accordion.Item>
      <Accordion.Item label="Second item with even larger label that will also collapse to second line or maybe even on third line, who knows">
        {paragraph}
      </Accordion.Item>
    </Accordion>
  ))
  .add('Overflow label', () => (
    <Accordion mt="xl" mx="auto" sx={{ maxWidth: 400 }} initialItem={0}>
      <Accordion.Item label="SomeonePutContentWithoutLineBreaksOrEvenWhiteSpaceHere">
        SomeonePutContentWithoutLineBreaksOrEvenWhiteSpaceHere
      </Accordion.Item>
    </Accordion>
  ))
  .add('Nested', () => (
    <Accordion mt="xl" mx="auto" sx={{ maxWidth: 400 }}>
      <Accordion.Item label="First tab">
        <Accordion>
          <Accordion.Item label="Nested First tab">Nested First tab content</Accordion.Item>
          <Accordion.Item label="Nested Second tab">Nested Second tab content</Accordion.Item>
        </Accordion>
      </Accordion.Item>
      <Accordion.Item label="Second tab">Second tab content</Accordion.Item>
    </Accordion>
  ));
