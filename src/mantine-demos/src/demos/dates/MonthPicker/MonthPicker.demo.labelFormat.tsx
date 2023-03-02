import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group } from '@mantine/core';
import { MonthPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <MonthPicker
        decadeLabelFormat="YY"
        yearLabelFormat="YYYY [year]"
        value={value}
        onChange={setValue}
      />
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <MonthPicker
        decadeLabelFormat="YY"
        yearLabelFormat="YYYY [year]"
        value={value}
        onChange={setValue}
      />
    </Group>
  );
}

export const labelFormat: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
