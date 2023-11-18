import React, { useState } from 'react';
import { IconRefresh } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { ActionIcon, ColorInput, rem } from '@mantine/core';

const code = `
import { useState } from 'react';
import { IconRefresh } from '@tabler/icons-react';
import { ActionIcon, ColorInput, rem } from '@mantine/core';

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
          <IconRefresh style={{ width: rem(16), height: rem(16) }} />
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
    <ColorInput
      maw={320}
      mx="auto"
      placeholder="Pick color"
      label="Your favorite color"
      value={value}
      onChange={onChange}
      rightSection={
        <ActionIcon onClick={() => onChange(randomColor())}>
          <IconRefresh style={{ width: rem(16), height: rem(16) }} />
        </ActionIcon>
      }
    />
  );
}

export const rightSection: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
