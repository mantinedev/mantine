import React from 'react';
import { Avatar, Group, Text } from '../../../index';
import { MultiSelect } from '../MultiSelect';

const code = `
import { Group, Avatar, Text, MultiSelect } from '@mantine/core';

const data = [
  { value: 'bob@handsome.inc', image: 'image-link', label: 'bob@handsome.inc', name: 'Bob Handsome' },
  { value: 'bill@outlook.com', image: 'image-link', label: 'bill@outlook.com', name: 'Bill Rataconda' },
  { value: 'amy@wong.cn', image: 'image-link', label: 'amy@wong.cn', name: 'Amy Wong' },
];

function SelectItem({ image, label, name, ...others }) {
  return (
    <div {...others}>
      <Group style={{ cursor: 'pointer' }}>
        <Avatar src={image} radius="xl" />

        <div>
          <Text>{name}</Text>
          <Text size="xs" color="blue">
            {label}
          </Text>
        </div>
      </Group>
    </div>
  );
}

function Demo() {
  return (
    <MultiSelect
      label="Choose employees of the month"
      placeholder="Pick all you like"
      itemComponent={SelectItem}
      data={data}
      searchable
      nothingFound="Nobody here"
      filter={(value, selected, item) =>
        !selected &&
        (item.name.toLowerCase().includes(value.toLowerCase().trim()) ||
          item.label.toLowerCase().includes(value.toLowerCase().trim()))
      }
    />
  );
}
`;

const images = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
  'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
];

const data = [
  { value: 'bob@handsome.inc', image: images[0], label: 'bob@handsome.inc', name: 'Bob Handsome' },
  {
    value: 'bill@outlook.com',
    image: images[1],
    label: 'bill@outlook.com',
    name: 'Bill Rataconda',
  },
  { value: 'amy@wong.cn', image: images[2], label: 'amy@wong.cn', name: 'Amy Wong' },
];

interface ItemProps extends React.ComponentProps<'div'> {
  image: string;
  label: string;
  name: string;
}

function SelectItem({ image, label, name, ...others }: ItemProps) {
  return (
    <div {...others}>
      <Group style={{ cursor: 'pointer' }}>
        <Avatar src={image} radius="xl" />

        <div>
          <Text>{name}</Text>
          <Text size="xs" color="blue">
            {label}
          </Text>
        </div>
      </Group>
    </div>
  );
}

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        label="Choose employees of the month"
        placeholder="Pick all you like"
        itemComponent={SelectItem}
        data={data}
        searchable
        nothingFound="Nobody here"
        filter={(value, selected, item) =>
          !selected &&
          (item.name.toLowerCase().includes(value.toLowerCase().trim()) ||
            item.label.toLowerCase().includes(value.toLowerCase().trim()))
        }
      />
    </div>
  );
}

export const users: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
