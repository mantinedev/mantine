import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Month } from '@mantine/dates';

const code = `
<Month excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6} />
`;

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Group position="center">
      <Month
        month={value}
        value={value}
        onChange={setValue}
        excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
    </Group>
  );
}

export const exclude: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
