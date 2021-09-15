import React from 'react';
import { Pagination } from '../Pagination';

function Demo() {
  return <Pagination total={10} position="center" />;
}

// This demo is used in use-pagination hook demos
export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
};
