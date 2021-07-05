import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Calendar } from '../Calendar';

const code = `
<Calendar labelFormat="MM/YYYY" />
`;

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Group position="center">
      <Calendar value={value} onChange={setValue} labelFormat="MM/YYYY" />
    </Group>
  );
}

export const format: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
