import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { RangeCalendar } from '@mantine/dates-old';

const code = `
import { useState } from 'react';
import { RangeCalendar } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);

  return <RangeCalendar value={value} onChange={setValue} />;
}
`;

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);
  return (
    <Group position="center">
      <RangeCalendar value={value} onChange={setValue} />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
