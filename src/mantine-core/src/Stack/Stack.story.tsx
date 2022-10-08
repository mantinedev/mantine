import React from 'react';
import { storiesOf } from '@storybook/react';
import { Stack } from './Stack';

function Item() {
  return <div style={{ backgroundColor: 'silver' }}>child</div>;
}

storiesOf('Stack', module).add('Usage', () => (
  <div style={{ padding: 40 }}>
    <Stack align="flex-start" sx={{ height: 400, backgroundColor: '#eee' }}>
      <Item />
      <Item />
      <Item />
    </Stack>
  </div>
));
