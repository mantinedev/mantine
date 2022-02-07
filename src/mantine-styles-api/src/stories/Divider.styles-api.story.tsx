import React from 'react';
import { storiesOf } from '@storybook/react';
import { Divider } from '@mantine/core';

storiesOf('@mantine/core/Divider/styles-api', module).add('With sx', () => (
  <div style={{ padding: 40 }}>
    <Divider sx={{ border: '1px solid red' }} label="Test" />
  </div>
));
