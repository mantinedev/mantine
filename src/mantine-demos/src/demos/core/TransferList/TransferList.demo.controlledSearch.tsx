import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { Stack, Text } from '@mantine/core';
import { Wrapper } from './_wrapper';

const code = `
import { useState } from 'react'
import { TransferList, Stack, Text } from '@mantine/core';

function Demo() {
  const [search, setSearch] = useState(['', '']);

  return (
    <Stack>
      <Text>
        <Text component="span" weight="bold">Left search: </Text>
        {search[0] || '---'}
        {' / '}
        <Text component="span" weight="bold">Right search: </Text>
        {search[1] || '---'}
      </Text>

      <TransferList
        searchValues={search}
        onSearch={setSearch}
        {/* ...other props */}
      />
    </Stack>
  );
}
`;

function Demo() {
  const [search, setSearch] = useState<[string, string]>(['', '']);

  return (
    <Stack>
      <Text>
        <Text component="span" weight="bold">
          Left search:{' '}
        </Text>
        {search[0] || '---'}
        {' / '}
        <Text component="span" weight="bold">
          Right search:{' '}
        </Text>
        {search[1] || '---'}
      </Text>

      <Wrapper
        searchPlaceholder="Search..."
        nothingFound="Nothing here"
        titles={['Frameworks', 'Libraries']}
        breakpoint="sm"
        searchValues={search}
        onSearch={setSearch}
      />
    </Stack>
  );
}

export const controlledSearch: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
