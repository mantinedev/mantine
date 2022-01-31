import React from 'react';
import { storiesOf } from '@storybook/react';
import { Group } from '@mantine/core';

storiesOf('@mantine/core/Group/styles-api', module).add('With sx', () => (
  <div style={{ padding: 40 }}>
    <Group sx={{ border: '1px solid red' }}>
      <div>Child</div>
    </Group>
  </div>
));
