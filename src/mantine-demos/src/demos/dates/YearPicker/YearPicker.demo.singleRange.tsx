import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group } from '@mantine/core';
import { YearPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <Group position="center">
      <YearPicker type="range" value={value} onChange={setValue} />
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <Group position="center">
      <YearPicker type="range" allowSingleDateInRange value={value} onChange={setValue} />
    </Group>
  );
}

export const singleRange: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
