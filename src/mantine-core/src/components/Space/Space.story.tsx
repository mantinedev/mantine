import React from 'react';
import { storiesOf } from '@storybook/react';
import { Space } from './Space';

storiesOf('@mantine/core/Space', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <div>first</div>
    <Space h="xl" />
    <div>second</div>

    <div style={{ display: 'flex' }}>
      <div>first</div>
      <Space w="xl" />
      <div>second</div>
    </div>
  </div>
));
