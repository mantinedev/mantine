import { useState } from 'react';
import { IconCheck, IconX } from '@tabler/icons-react';
import { Switch } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Switch } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      color="teal"
      size="md"
      label="Switch with thumb icon"
      thumbIcon={
        checked ? (
          <IconCheck size={12} color="var(--mantine-color-teal-6)" stroke={3} />
        ) : (
          <IconX size={12} color="var(--mantine-color-red-6)" stroke={3} />
        )
      }
    />
  );
}
`;

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      color="teal"
      size="md"
      label="Switch with thumb icon"
      thumbIcon={
        checked ? (
          <IconCheck size={12} color="var(--mantine-color-teal-6)" stroke={3} />
        ) : (
          <IconX size={12} color="var(--mantine-color-red-6)" stroke={3} />
        )
      }
    />
  );
}

export const thumbIcon: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
