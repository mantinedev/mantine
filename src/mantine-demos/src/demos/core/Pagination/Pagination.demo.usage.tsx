import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10} position="center" />;
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
};
