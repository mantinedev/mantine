import React, { useState } from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { useMantineTheme, ColorSwatch, Group } from '@mantine/core';

const code = `
import { useState } from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { ColorSwatch, Group, useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(true);

  return (
    <Group position="center" spacing="xs">
      <ColorSwatch component="a" href="https://mantine.dev" color={theme.colors.blue[6]} />
      <ColorSwatch
        component="button"
        color={theme.colors.grape[6]}
        onClick={() => setChecked((c) => !c)}
        style={{ color: '#fff', cursor: 'pointer' }}
      >
        {checked && <CheckIcon />}
      </ColorSwatch>
    </Group>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(true);

  return (
    <Group position="center" spacing="xs">
      <ColorSwatch component="a" href="https://mantine.dev" color={theme.colors.blue[6]} />
      <ColorSwatch
        component="button"
        color={theme.colors.grape[6]}
        onClick={() => setChecked((c) => !c)}
        style={{ color: '#fff', cursor: 'pointer' }}
      >
        {checked && <CheckIcon />}
      </ColorSwatch>
    </Group>
  );
}

export const component: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
