import React from 'react';
import { Group, Avatar, Text } from '../../../index';
import { Accordion, AccordionItem } from '../Accordion';

const code = `
import { Group, Avatar, Text, Accordion, AccordionItem } from '../../../index';

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
  <AccordionItem
    label={<AccordionLabel name="Bob Handsome" job="Graphic Designer" avatar={images[0]} />}
  >
    {lorem}
  </AccordionItem>

  {/* ... more items */}
</Accordion>
`;

const images = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
  'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
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

const lorem =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam exercitationem ipsum rem iste, quia, laudantium, voluptates quam mollitia illum qui velit dolorum voluptatem saepe accusantium earum ratione corrupti inventore. Illo.';

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <Accordion initialItem={-1}>
        <AccordionItem
          label={<AccordionLabel name="Bob Handsome" job="Graphic Designer" avatar={images[0]} />}
        >
          {lorem}
        </AccordionItem>

        <AccordionItem
          label={
            <AccordionLabel name="Bill Rataconda" job="Integrations Engineer" avatar={images[1]} />
          }
        >
          {lorem}
        </AccordionItem>

        <AccordionItem
          label={<AccordionLabel name="Emily Wansteighn" job="DevOps" avatar={images[2]} />}
        >
          {lorem}
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export const label: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
