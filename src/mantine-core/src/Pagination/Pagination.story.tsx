import React, { useState } from 'react';
import { Pagination } from './Pagination';
import { PaginationControl } from './PaginationControl/PaginationControl';

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
    </div>
  );
}
