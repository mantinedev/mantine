import React, { useState } from 'react';
import { Group, Chip } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Chip } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Chip value="chip" checked={checked} onChange={setChecked}>
      Just a chip
    </Chip>
  );
}
`;

function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Group position="center">
      <Chip value="chip" checked={checked} onChange={setChecked}>
        Just a chip
      </Chip>
    </Group>
  );
}

export const chip: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
