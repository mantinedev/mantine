import React from 'react';
import { Group, Avatar, Text } from '../../../index';
import { LABELS_DATA } from './_mockdata';
import { Accordion, AccordionProps } from '../Accordion';

const code = `
import { Group, Avatar, Text, Accordion } from '../../../index';

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
    <Accordion initialItem={-1}>
      <Accordion.Item label={<AccordionLabel image="./avatar.png" label="Bender Bending Rodríguez" description="..." />}>
        <Text size="sm">{item.content}</Text>
      </Accordion.Item>

      {/* ... more items */}
    </Accordion>
  );
}
`;

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
  // eslint-disable-next-line react/no-unused-prop-types
  content?: string;
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
  const items = LABELS_DATA.map((item) => (
    <Accordion.Item label={<AccordionLabel {...item} />} key={item.label}>
      <Text size="sm">{item.content}</Text>
    </Accordion.Item>
  ));

  return (
    <Accordion initialItem={-1} {...props}>
      {items}
    </Accordion>
  );
}

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <AccordionDemo />
    </div>
  );
}

export const label: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
