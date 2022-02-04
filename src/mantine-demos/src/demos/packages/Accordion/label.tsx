import React from 'react';
import { Group, Avatar, Text, Accordion, AccordionProps } from '@mantine/core';
import { charactersList } from './_mockdata';

const code = `
import { Group, Avatar, Text, Accordion } from '@mantine/core';

function AccordionLabel({ label, image, description }) {
  return (
    <Group noWrap>
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" color="dimmed" weight={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

function Demo() {
  return (
    <Accordion initialItem={-1} iconPosition="right">
      <Accordion.Item label={<AccordionLabel image="./avatar.png" label="Bender Bending Rodríguez" description="..." />}>
        <Text size="sm">{item.content}</Text>
      </Accordion.Item>
      {/* ... other items */}
    </Accordion>
  );
}
`;

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group noWrap>
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" color="dimmed" weight={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

export function AccordionDemo(props: Partial<AccordionProps>) {
  const items = charactersList.map((item) => (
    <Accordion.Item label={<AccordionLabel {...item} />} key={item.label}>
      <Text size="sm">{item.content}</Text>
    </Accordion.Item>
  ));

  return (
    <Accordion initialItem={-1} iconPosition="right" {...props}>
      {items}
    </Accordion>
  );
}

function Demo() {
  return (
    <div style={{ maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
      <AccordionDemo />
    </div>
  );
}

export const label: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
