import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Month } from '../Month';

const code = `
import { useState } from 'react';
import { Month } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState(new Date());
  return <Month month={value} value={value} onChange={setValue} firstDayOfWeek="sunday" />;
}
`;

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Group position="center">
      <Month month={value} value={value} onChange={setValue} firstDayOfWeek="sunday" />
    </Group>
  );
}

export const firstDaySunday: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
