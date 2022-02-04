import React from 'react';
import { storiesOf } from '@storybook/react';
import { LoadingOverlay } from '@mantine/core';

storiesOf('@mantine/core/LoadingOverlay/styles-api', module).add('With sx', () => (
  <div style={{ padding: 40 }}>
    <LoadingOverlay visible sx={{ border: '1px solid red' }} />
  </div>
));
