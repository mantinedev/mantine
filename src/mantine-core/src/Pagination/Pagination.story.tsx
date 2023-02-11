import React, { useState } from 'react';
import { IconDotsDiagonal } from '@tabler/icons-react';
import { Group } from '../Group';
import { Pagination } from './Pagination';
import { PaginationControl } from './PaginationControl/PaginationControl';
import { PaginationDots } from './PaginationDots/PaginationDots';
import { PaginationNext } from './PaginationEdges/PaginationEdges';
import { PaginationRoot } from './PaginationRoot/PaginationRoot';

export default { title: 'Pagination' };

export function Controlled() {
  const [value, setValue] = useState(2);
  return (
    <>
      Current page: {value}
      <Pagination total={20} page={value} onChange={setValue} />
    </>
  );
}

export function DecimalTotal() {
  return <Pagination total={45.331} />;
}

export function NegativeTotal() {
  return <Pagination total={-10} />;
}

export function ComposedPaginationControl() {
  return (
    <div style={{ padding: 40 }}>
      <PaginationControl active={false}>10</PaginationControl>
      <PaginationControl active={false}>100</PaginationControl>
      <PaginationControl active={false} disabled>
        100
      </PaginationControl>
      <PaginationControl active>10000</PaginationControl>
      <PaginationControl active color="orange">
        10
      </PaginationControl>
      <PaginationControl active color="orange" radius="xl">
        10
      </PaginationControl>
    </div>
  );
}

export function ComposedPaginationDots() {
  return (
    <Group p="xl" spacing={5}>
      <PaginationRoot total={20}>
        <PaginationControl>1</PaginationControl>
        <PaginationDots icon={IconDotsDiagonal} />
        <PaginationDots />
        <PaginationControl>2</PaginationControl>
        <PaginationNext />
        <PaginationNext icon={IconDotsDiagonal} />
      </PaginationRoot>
    </Group>
  );
}
