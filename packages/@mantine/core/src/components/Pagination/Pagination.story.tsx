import { useState } from 'react';
import { Button } from '../Button';
import { Group } from '../Group';
import { Pagination } from './Pagination';

export default { title: 'Pagination' };

export function DynamicTotal() {
  const [total, setTotal] = useState(20);
  return (
    <div style={{ padding: 40 }}>
      <Pagination total={total} mb="xl" />
      <Group>
        <Button onClick={() => setTotal(30)}>Set 30</Button>
        <Button onClick={() => setTotal(10)}>Set 10</Button>
      </Group>
    </div>
  );
}

export function AutoContrast() {
  return <Pagination total={45} color="lime.3" autoContrast />;
}

export function SimpleType() {
  return <Pagination total={45} withPages={false} />;
}

export function Controlled() {
  const [value, setValue] = useState(1);
  return (
    <>
      Current page: {value}
      <Pagination total={20} value={value} onChange={setValue} withEdges />
    </>
  );
}

export function Unstyled() {
  const [value, setValue] = useState(1);
  return (
    <>
      Current page: {value}
      <Pagination total={20} value={value} onChange={setValue} withEdges unstyled />
    </>
  );
}

export function Disabled() {
  return <Pagination total={45} disabled />;
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
      <Group gap={5}>
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
  return <Pagination total={20} gap={0} withEdges />;
}
