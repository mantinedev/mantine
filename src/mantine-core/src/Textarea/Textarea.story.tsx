import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import Textarea from './Textarea';

storiesOf('@mantine/core', module).add('Textarea', () => (
  <MantineProvider>
    <Textarea
      autosize
      minRows={3}
      label="Textarea"
      error="Please fill in this field"
      required
      placeholder="Textarea placeholder"
    />
  </MantineProvider>
));
