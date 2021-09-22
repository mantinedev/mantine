import React from 'react';
import { Group, Avatar, Text, MantineColor } from '../../../index';
import { SelectItemProps } from '../../Select/Select';
import { LABELS_DATA } from '../../Accordion/demos/_mockdata';
import { Autocomplete } from '../Autocomplete';

const code = `
import { Group, Avatar, Text, Autocomplete } from '@mantine/core';

export const LABELS_DATA = [
  {
    image: 'avatar.png',
    value: 'Bender Bending Rodríguez',
    description: 'Fascinated with cooking, though has no sense of taste',
  },
  {
    image: 'avatar.png',
    value: 'Carol Miller',
    description: 'One of the richest people on Earth',
  },
  // ... other items
]

function AutoCompleteItem({ description, value, image, elementRef, ...others }) {
  return (
    <div {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text>{value}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  );
}

function Demo() {
  return (
    <Autocomplete
      label="Choose employee of the month"
      placeholder="Pick one"
      itemComponent={AutoCompleteItem}
      data={data}
      filter={(value, item) =>
        item.value.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
}
`;

const data = LABELS_DATA.map((item) => ({ ...item, value: item.label }));

interface ItemProps extends SelectItemProps {
  color: MantineColor;
  description: string;
  image: string;
}

function AutoCompleteItem({ description, value, image, elementRef, ...others }: ItemProps) {
  return (
    <div {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text>{value}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  );
}

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        label="Choose employee of the month"
        placeholder="Pick one"
        itemComponent={AutoCompleteItem}
        data={data}
        filter={(value, item) =>
          item.value.toLowerCase().includes(value.toLowerCase().trim()) ||
          item.description.toLowerCase().includes(value.toLowerCase().trim())
        }
      />
    </div>
  );
}

export const itemComponent: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
