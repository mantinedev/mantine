import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Month } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { Month } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState(new Date());
  return <Month month={value} value={value} onChange={setValue} />;
}
`;

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Group position="center">
      <Month month={value} value={value} onChange={setValue} />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
