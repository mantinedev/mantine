import React, { useState } from 'react';
import { TextInput, Tooltip } from '@mantine/core';

const code = `
import { useState } from 'react';
import { TextInput, Tooltip } from '@mantine/core';

function Demo() {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      label="TextInput with tooltip"
      description="Tooltip will be relative to the input"
      placeholder="Focus me to see tooltip"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      inputContainer={(children) => (
        <Tooltip label="Additional information" position="top-start" opened={focused}>
          {children}
        </Tooltip>
      )}
    />
  );
}
`;

function Demo() {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TextInput
        label="TextInput with tooltip"
        description="Tooltip will be relative to the input"
        placeholder="Focus me to see tooltip"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        inputContainer={(children) => (
          <Tooltip label="Additional information" position="top-start" opened={focused}>
            {children}
          </Tooltip>
        )}
      />
    </div>
  );
}

export const inputContainer: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
