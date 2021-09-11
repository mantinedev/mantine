import React, { useState } from 'react';
import { Pagination } from '../Pagination';

const code = `
import { useState } from 'react';
import { Pagination } from '@mantine/core';

function Demo() {
  const [page, setPage] = useState(1);

  return <Pagination page={page} onChange={setPage} total={20} />
}
`;

function Demo() {
  const [page, setPage] = useState(1);

  return <Pagination page={page} onChange={setPage} total={20} />;
}

export const controlled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
