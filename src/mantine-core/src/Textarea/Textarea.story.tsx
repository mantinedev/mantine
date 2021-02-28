import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import { Textarea } from './Textarea';

storiesOf('@mantine/core', module).add('Textarea', () => (
  <div style={{ padding: 50 }}>
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
        ref={(node) => node.focus()}
      />
      <Textarea
        style={{ marginTop: 20 }}
        radius="md"
        minRows={3}
        label="Textarea"
        placeholder="Textarea placeholder"
      />
    </MantineProvider>
  </div>
));
