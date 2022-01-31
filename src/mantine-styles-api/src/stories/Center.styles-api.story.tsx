import React from 'react';
import { storiesOf } from '@storybook/react';
import { Center } from '@mantine/core';

storiesOf('@mantine/core/Center/styles-api', module).add('With sx', () => (
  <div style={{ padding: 40 }}>
    <Center sx={{ border: '1px solid cyan' }}>test</Center>
  </div>
));
