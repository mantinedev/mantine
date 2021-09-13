import React from 'react';
import { Pagination } from '../Pagination';

const code = `
  <Pagination total={20} />
`;

function Demo() {
  return (
    <Pagination total={20} />
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
