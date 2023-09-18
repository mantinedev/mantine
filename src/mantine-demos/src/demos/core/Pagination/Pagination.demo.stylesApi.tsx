import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Pagination } from '@mantine/core';
import { PaginationStylesApi } from '@mantine/styles-api';

const code = `
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`;

function Demo(props: any) {
  return <Pagination total={10} {...props} />;
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: PaginationStylesApi,
  component: Demo,
  code,
  centered: true,
};
