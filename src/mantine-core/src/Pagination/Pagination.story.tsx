import React, { useState } from 'react';
import { Group } from '../Group';
import { Pagination } from './Pagination';

export default { title: 'Pagination' };

export function Controlled() {
  const [value, setValue] = useState(1);
  return (
    <>
      Current page: {value}
      <Pagination total={20} value={value} onChange={setValue} withEdges />
    </>
  );
}

export function DecimalTotal() {
  return <Pagination total={45.331} />;
}

export function NegativeTotal() {
  return <Pagination total={-10} />;
}

export function Composed() {
  return (
    <Pagination.Root total={10}>
      <Group spacing={5}>
        <Pagination.First />
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
        <Pagination.Last />
      </Group>
    </Pagination.Root>
  );
}

export function SpacingZero() {
  return <Pagination total={20} spacing={0} withEdges />;
}
