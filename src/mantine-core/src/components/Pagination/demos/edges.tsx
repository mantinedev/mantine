import React from 'react';
import { Pagination } from '../Pagination';

const code = `
  <Pagination total={20} boundaries={1} initialPage={10} withEdges />
`;

function Demo() {
  return (
    <Pagination total={20} boundaries={1} initialPage={10} withEdges />
  );
}

export const edges: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
