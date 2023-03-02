import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <DatePicker
        defaultLevel="decade"
        decadeLabelFormat="YY"
        yearLabelFormat="YYYY [year]"
        monthLabelFormat="MM/YY"
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
      <DatePicker
        defaultLevel="decade"
        decadeLabelFormat="YY"
        yearLabelFormat="YYYY [year]"
        monthLabelFormat="MM/YY"
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
