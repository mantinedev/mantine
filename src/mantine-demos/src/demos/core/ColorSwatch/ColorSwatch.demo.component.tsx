import React, { useState } from 'react';
import { useMantineTheme, ColorSwatch, Group, CheckIcon } from '@mantine/core';

const code = `
import { useState } from 'react';
import { ColorSwatch, Group, useMantineTheme, CheckIcon } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(true);

  return (
    <Group position="center" spacing="xs">
      <ColorSwatch
        component="button"
        color={theme.colors.grape[6]}
        onClick={() => setChecked((c) => !c)}
        sx={{ color: '#fff', cursor: 'pointer' }}
      >
        {checked && <CheckIcon width={10} />}
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
      <ColorSwatch
        component="button"
        color={theme.colors.grape[6]}
        onClick={() => setChecked((c) => !c)}
        sx={{ color: '#fff', cursor: 'pointer' }}
      >
        {checked && <CheckIcon width={10} />}
      </ColorSwatch>
    </Group>
  );
}

export const component: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
