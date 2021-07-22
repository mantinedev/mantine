import React from 'react';
import { Group, Avatar, Text, UnstyledButton } from '../../../index';
import { Autocomplete } from '../Autocomplete';

const code = `
import { Group, Avatar, Text, UnstyledButton, Autocomplete } from '@mantine/core';

const data = [
  { value: 'bob@handsome.inc', color: 'red', email: 'bob@handsome.inc', name: 'Bob Handsome' },
  { value: 'bill@outlook.com', color: 'teal', email: 'bill@outlook.com', name: 'Bill Gates' },
  { value: 'amy@wong.cn', color: 'blue', email: 'amy@wong.cn', name: 'Amy Wong' },
];

function AutoCompleteItem({ color, email, name, ...others }) {
  return (
    <UnstyledButton {...others}>
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
    </UnstyledButton>
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

interface ItemProps extends React.ComponentProps<'button'> {
  color: string;
  email: string;
  name: string;
}

function AutoCompleteItem({ color, email, name, ...others }: ItemProps) {
  return (
    <UnstyledButton {...others}>
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
    </UnstyledButton>
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
