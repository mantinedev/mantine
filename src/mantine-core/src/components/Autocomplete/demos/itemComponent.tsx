import React from 'react';
import { Group, Avatar, Text, MantineColor } from '../../../index';
import { SelectItemProps } from '../../Select/Select';
import { Autocomplete } from '../Autocomplete';

const code = `
import { Group, Avatar, Text, Autocomplete } from '@mantine/core';

const data = [
  { value: 'bob@handsome.inc', color: 'red', email: 'bob@handsome.inc', name: 'Bob Handsome' },
  { value: 'bill@outlook.com', color: 'teal', email: 'bill@outlook.com', name: 'Bill Gates' },
  { value: 'amy@wong.cn', color: 'blue', email: 'amy@wong.cn', name: 'Amy Wong' },
];

function AutoCompleteItem({ color, email, name, ...others }) {
  return (
    <div {...others}>
      <Group>
        <Avatar color={color}>
          {name
            .split(' ')
            .map((part) => part.charAt(0).toUpperCase())
            .join('')}
        </Avatar>

        <div>
          <Text>{name}</Text>
          <Text size="xs" color="blue">
            {email}
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
        item.name.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.email.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
}
`;

const data = [
  { value: 'bob@handsome.inc', color: 'red', email: 'bob@handsome.inc', name: 'Bob Handsome' },
  { value: 'bill@outlook.com', color: 'teal', email: 'bill@outlook.com', name: 'Bill Gates' },
  { value: 'amy@wong.cn', color: 'blue', email: 'amy@wong.cn', name: 'Amy Wong' },
];

interface ItemProps extends SelectItemProps {
  color: MantineColor;
  email: string;
  name: string;
}

function AutoCompleteItem({ color, email, name, ...others }: ItemProps) {
  return (
    <div {...others}>
      <Group>
        <Avatar color={color}>
          {name
            .split(' ')
            .map((part) => part.charAt(0).toUpperCase())
            .join('')}
        </Avatar>

        <div>
          <Text>{name}</Text>
          <Text size="xs" color="blue">
            {email}
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
          item.name.toLowerCase().includes(value.toLowerCase().trim()) ||
          item.email.toLowerCase().includes(value.toLowerCase().trim())
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
