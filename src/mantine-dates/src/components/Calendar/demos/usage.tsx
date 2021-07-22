import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Calendar } from '../Calendar';

const code = `
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState(new Date());
  return <Calendar value={value} onChange={setValue} />;
}
`;

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Group position="center">
      <Calendar value={value} onChange={setValue} />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
