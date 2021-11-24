import React from 'react';
import { storiesOf } from '@storybook/react';
import { Pagination } from './Pagination';

storiesOf('@mantine/core/Pagination', module)
  .add('General usage', () => (
    <div style={{ padding: 40 }}>
      <Pagination total={10} color="cyan" size="xs" withControls={false} />
      <Pagination style={{ marginTop: 15 }} total={1000} color="cyan" size="sm" />
      <Pagination style={{ marginTop: 15 }} total={10} color="cyan" size="md" />
      <Pagination style={{ marginTop: 15 }} total={10} color="cyan" size="lg" />
      <Pagination style={{ marginTop: 15 }} total={10} color="cyan" size="xl" />
    </div>
  ))
  .add('No siblings', () => (
    <div style={{ padding: 40 }}>
      <Pagination siblings={0} total={20} color="orange" initialPage={7} />
    </div>
  ))
  .add('With 2 boundaries', () => (
    <div style={{ padding: 40 }}>
      <Pagination total={20} boundaries={2} initialPage={12} />
    </div>
  ))
  .add('With 2 siblings', () => (
    <div style={{ padding: 40 }}>
      <Pagination siblings={2} total={20} initialPage={12} />
    </div>
  ))
  .add('With jump to first/last buttons', () => (
    <div style={{ padding: 40 }}>
      <Pagination total={20} boundaries={2} initialPage={12} withEdges />
    </div>
  ));
