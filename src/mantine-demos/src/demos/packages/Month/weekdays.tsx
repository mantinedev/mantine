import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Month } from '@mantine/dates';

const code = `
<Month hideWeekdays />
`;

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Group position="center">
      <Month month={value} value={value} onChange={setValue} hideWeekdays />
    </Group>
  );
}

export const weekdays: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
