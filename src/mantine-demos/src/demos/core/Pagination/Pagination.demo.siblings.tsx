import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Text, Pagination } from '@mantine/core';

const code = `
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 sibling (default)</Text>
      <Pagination total={20} siblings={1} defaultValue={10} />

      <Text mb="xs" mt="xl">2 siblings</Text>
      <Pagination total={20} siblings={2} defaultValue={10} />

      <Text mb="xs" mt="xl">3 siblings</Text>
      <Pagination total={20} siblings={3} defaultValue={10} />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Text mb="xs">1 sibling (default)</Text>
      <Pagination total={20} siblings={1} defaultValue={10} />

      <Text mb="xs" mt="xl">
        2 siblings
      </Text>
      <Pagination total={20} siblings={2} defaultValue={10} />

      <Text mb="xs" mt="xl">
        3 siblings
      </Text>
      <Pagination total={20} siblings={3} defaultValue={10} />
    </>
  );
}

export const siblings: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
