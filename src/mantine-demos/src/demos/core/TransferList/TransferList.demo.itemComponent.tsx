import React, { useState } from 'react';
import {
  Checkbox,
  Group,
  Avatar,
  Text,
  TransferList,
  TransferListData,
  TransferListItemComponent,
  TransferListItemComponentProps,
} from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { charactersList } from './_mockdata';

const code = `
import { useState } from 'react';
import {
  Checkbox,
  Group,
  Avatar,
  Text,
  TransferList,
  TransferListData,
  TransferListItemComponent,
  TransferListItemComponentProps,
} from '@mantine/core';

const mockdata = [
  {
    value: 'bender',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodríguez',
    description: 'Fascinated with cooking, though has no sense of taste',
  },

  {
    value: 'carol',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    description: 'One of the richest people on Earth',
  },
  // ...other items
];

const ItemComponent: TransferListItemComponent = ({
  data,
  selected,
}: TransferListItemComponentProps) => (
  <Group noWrap>
    <Avatar src={data.image} radius="xl" size="lg" />
    <div style={{ flex: 1 }}>
      <Text size="sm" weight={500}>
        {data.label}
      </Text>
      <Text size="xs" color="dimmed" weight={400}>
        {data.description}
      </Text>
    </div>
    <Checkbox checked={selected} onChange={() => {}} tabIndex={-1} sx={{ pointerEvents: 'none' }} />
  </Group>
);


function Demo() {
  const [data, setData] = useState<TransferListData>([mockdata, []]);
  return (
    <TransferList
      value={data}
      onChange={setData}
      searchPlaceholder="Search employees..."
      nothingFound="No one here"
      titles={['Employees to hire', 'Employees to fire']}
      listHeight={300}
      breakpoint="sm"
      itemComponent={ItemComponent}
      filter={(query, item) =>
        item.label.toLowerCase().includes(query.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(query.toLowerCase().trim())
      }
    />
  );
}
`;

const initialValues: TransferListData = [
  charactersList.map((item, index) => ({ ...item, value: index.toString() })),
  [],
];

const ItemComponent: TransferListItemComponent = ({
  data,
  selected,
}: TransferListItemComponentProps) => (
  <Group noWrap>
    <Avatar src={data.image} radius="xl" size="lg" />
    <div style={{ flex: 1 }}>
      <Text size="sm" weight={500}>
        {data.label}
      </Text>
      <Text size="xs" color="dimmed" weight={400}>
        {data.description}
      </Text>
    </div>
    <Checkbox checked={selected} onChange={() => {}} tabIndex={-1} sx={{ pointerEvents: 'none' }} />
  </Group>
);

function Demo() {
  const [data, setData] = useState<TransferListData>(initialValues);
  return (
    <TransferList
      value={data}
      onChange={setData}
      searchPlaceholder="Search employees..."
      nothingFound="No one here"
      titles={['Employees to hire', 'Employees to fire']}
      listHeight={300}
      breakpoint="sm"
      itemComponent={ItemComponent}
      filter={(query, item) =>
        item.label.toLowerCase().includes(query.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(query.toLowerCase().trim())
      }
    />
  );
}

export const itemComponent: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
