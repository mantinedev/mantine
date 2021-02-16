import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import Textarea from './Textarea';

storiesOf('@mantine/core', module).add('Textarea', () => (
  <MantineProvider>
    <Textarea
      radius="md"
      autosize
      minRows={3}
      label="Textarea"
      error="Please fill in this field"
      required
      description="Description"
      placeholder="Textarea placeholder"
      value=""
      onChange={(f) => f}
      ref={(node) => node.focus()}
    />
  </MantineProvider>
));
