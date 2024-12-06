import { useState } from 'react';
import { IconRefresh } from '@tabler/icons-react';
import { ActionIcon, ColorInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { IconRefresh } from '@tabler/icons-react';
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
          <IconRefresh size={16} />
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
          <IconRefresh size={16} />
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
