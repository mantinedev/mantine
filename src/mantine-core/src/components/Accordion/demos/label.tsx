import React from 'react';
import { Group, Avatar, Text } from '../../../index';
import { Accordion } from '../Accordion';

const code = `
import { Group, Avatar, Text, Accordion } from '../../../index';

function AccordionLabel({ name, avatar, job }) {
  return (
    <Group>
      <Avatar src={avatar} radius="xl" />
      <div>
        <Text>{name}</Text>
        <Text size="sm" color="gray">
          {job}
        </Text>
      </div>
    </Group>
  );
}

<Accordion initialItem={-1}>
  <Accordion.Item
    label={<AccordionLabel name="Bob Handsome" job="Graphic Designer" avatar={images[0]} />}
  >
    {description}
  </Accordion.Item>

  {/* ... more items */}
</Accordion>
`;

const images = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
  'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
];

const descriptions = [
  'Bob is a graphic designer from San Francisco, as stands from his surname, he is a handsome man',
  'Bill works as integrations engineer in a large company. Does something tell you that he likes snakes?',
  'Emily is a DevOps engineer at small regional company called Rob Johnson and sons',
];

interface AccordionLabelProps {
  name: string;
  avatar: string;
  job: string;
}

function AccordionLabel({ name, avatar, job }: AccordionLabelProps) {
  return (
    <Group>
      <Avatar src={avatar} radius="xl" />
      <div>
        <Text>{name}</Text>
        <Text size="sm" color="gray">
          {job}
        </Text>
      </div>
    </Group>
  );
}

export function AccordionDemo() {
  return (
    <Accordion initialItem={-1}>
      <Accordion.Item
        label={<AccordionLabel name="Bob Handsome" job="Graphic Designer" avatar={images[0]} />}
      >
        {descriptions[0]}
      </Accordion.Item>

      <Accordion.Item
        label={
          <AccordionLabel name="Bill Rataconda" job="Integrations Engineer" avatar={images[1]} />
        }
      >
        {descriptions[1]}
      </Accordion.Item>

      <Accordion.Item
        label={<AccordionLabel name="Emily Wansteighn" job="DevOps" avatar={images[2]} />}
      >
        {descriptions[2]}
      </Accordion.Item>
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
