import React, { forwardRef } from 'react';
import { Group, Avatar, Text, MantineColor, SelectItemProps, Autocomplete } from '@mantine/core';
import { charactersList } from './_mockdata';

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

const AutoCompleteItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ description, value, image, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
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
  )
);

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

const data = charactersList.map((item) => ({ ...item, value: item.label }));

interface ItemProps extends SelectItemProps {
  color: MantineColor;
  description: string;
  image: string;
}

const AutoCompleteItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ description, value, image, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
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
  )
);

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
