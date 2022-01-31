import React from 'react';
import { TextInput } from '@mantine/core';

const code = `
<TextInput disabled />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TextInput label="Disabled without value" placeholder="Your email" disabled />

      <TextInput
        style={{ marginTop: 15 }}
        label="Disabled with value"
        placeholder="Your email"
        disabled
        value="myemail@gmail.com"
      />
    </div>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
