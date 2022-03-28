import React from 'react';
import { Textarea } from '@mantine/core';

const code = `
// Error as boolean – red border color
<Textarea error />

// Error as React node – red border color and message below input
<Textarea error="Comment should not include bad words" />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Textarea label="Your comment" placeholder="Your comment" error />

      <Textarea
        style={{ marginTop: 15 }}
        label="Your comment"
        placeholder="Your comment"
        error="Comment should not include bad words"
      />
    </div>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
