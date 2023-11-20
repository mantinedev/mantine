import React from 'react';
import { MantineDemo } from '@mantinex/demo';
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10} />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
};
