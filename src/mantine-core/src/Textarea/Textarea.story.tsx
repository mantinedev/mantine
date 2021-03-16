import React from 'react';
import { storiesOf } from '@storybook/react';
import { Textarea } from './Textarea';

storiesOf('@mantine/core/Textarea', module).add('Textarea', () => (
  <div style={{ padding: 50 }}>
    <>
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
    </>
  </div>
));
