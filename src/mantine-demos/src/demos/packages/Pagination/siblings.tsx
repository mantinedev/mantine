import React from 'react';
import { Text, Pagination } from '@mantine/core';

const code = `
  <Pagination total={20} siblings={3} />
`;

function Demo() {
  return (
    <>
      <Text style={{ marginBottom: 10 }}>1 sibling (default)</Text>
      <Pagination total={20} siblings={1} initialPage={10} />

      <Text style={{ marginTop: 30, marginBottom: 10 }}>2 siblings</Text>
      <Pagination total={20} siblings={2} initialPage={10} />

      <Text style={{ marginTop: 30, marginBottom: 10 }}>3 siblings</Text>
      <Pagination total={20} siblings={3} initialPage={10} />
    </>
  );
}

export const siblings: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
