import React from 'react';
import { storiesOf } from '@storybook/react';
import { Pagination } from './Pagination';

storiesOf('@mantine/core/Pagination', module)
  .add('General usage', () => (
    <div style={{ padding: 40 }}>
      <Pagination total={10} color="cyan" />
    </div>
  ))
  .add('No siblings', () => <Pagination siblings={0} total={20} color="orange" initialPage={7} />)
  .add('With 2 boundaries', () => <Pagination total={20} boundary={2} initialPage={12} />)
  .add('With 2 boundaries and 2 siblings', () => (
    <Pagination siblings={2} boundary={2} total={20} initialPage={12} />
  ));
