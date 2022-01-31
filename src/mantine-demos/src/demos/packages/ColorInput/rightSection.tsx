import React, { useState } from 'react';
import { UpdateIcon } from '@modulz/radix-icons';
import { ActionIcon, ColorInput } from '@mantine/core';

const code = `
import { useState } from 'react';
import { UpdateIcon } from '@modulz/radix-icons';
import { ActionIcon, ColorInput } from '@mantine/core';

const randomColor = () => \`#\${Math.floor(Math.random() * 16777215).toString(16)}\`;

function Demo() {
  const [value, onChange] = useState(randomColor());
  return (
    <ColorInput
      placeholder="Pick color"
      label="Your favorite color"
      value={value}
      onChange={onChange}
      rightSection={
        <ActionIcon onClick={() => onChange(randomColor())}>
          <UpdateIcon />
        </ActionIcon>
      }
    />
  );
}
`;

const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

function Demo() {
  const [value, onChange] = useState(randomColor());
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput
        placeholder="Pick color"
        label="Your favorite color"
        value={value}
        onChange={onChange}
        rightSection={
          <ActionIcon onClick={() => onChange(randomColor())}>
            <UpdateIcon />
          </ActionIcon>
        }
      />
    </div>
  );
}

export const rightSection: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
