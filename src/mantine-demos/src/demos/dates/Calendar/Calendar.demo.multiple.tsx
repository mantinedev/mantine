import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return <Calendar multiple value={value} onChange={setValue} />;
}
`;

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <Group position="center">
      <Calendar multiple value={value} onChange={setValue} />
    </Group>
  );
}

export const multiple: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
