import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Month } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { Month } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Month
      month={value}
      value={value}
      onChange={setValue}
      weekendDays={[5, 6]}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Group position="center">
      <Month month={value} value={value} onChange={setValue} weekendDays={[5, 6]} />
    </Group>
  );
}

export const weekendDays: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
