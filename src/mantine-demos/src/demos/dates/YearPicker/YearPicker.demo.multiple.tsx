import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group } from '@mantine/core';
import { YearPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <Group position="center">
      <YearPicker type="multiple" value={value} onChange={setValue} />
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <Group position="center">
      <YearPicker type="multiple" value={value} onChange={setValue} />
    </Group>
  );
}

export const multiple: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
