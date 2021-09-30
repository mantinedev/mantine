import React from 'react';
import { storiesOf } from '@storybook/react';
import { Pagination } from './Pagination';
import { DarkStory } from '../../../demos';

storiesOf('@mantine/core/Pagination', module)
  .add('General usage', () => (
    <div style={{ padding: 40 }}>
      <Pagination total={10} color="cyan" size="xs" />
      <Pagination style={{ marginTop: 15 }} total={1000} color="cyan" size="sm" />
      <Pagination style={{ marginTop: 15 }} total={10} color="cyan" size="md" />
      <Pagination style={{ marginTop: 15 }} total={10} color="cyan" size="lg" />
      <Pagination style={{ marginTop: 15 }} total={10} color="cyan" size="xl" />
    </div>
  ))
  .add('No siblings', () => <Pagination siblings={0} total={20} color="orange" initialPage={7} />)
  .add('With 2 boundaries', () => <Pagination total={20} boundaries={2} initialPage={12} />)
  .add('With 2 boundaries and 2 siblings', () => (
    <Pagination siblings={2} boundaries={2} total={20} initialPage={12} />
  ))
  .add('With jump to first/last buttons', () => (
      <div style={{ padding: 40 }}>
        <Pagination total={20} boundaries={2} initialPage={12} withEdges />
      </div>
  ))
  .add('Dark theme', () => (
    <DarkStory>
      <div style={{ padding: 40 }}>
        <Pagination total={10} color="cyan" size="md" />
      </div>
    </DarkStory>
  ));
