import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group } from '@mantine/core';
import { MonthPicker } from '@mantine/dates';

const code = `
import { Group } from '@mantine/core';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [date, setDate] = useState(new Date());

  const handleChange = (val: [Date | null, Date | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => new Date(current.getFullYear() + 1, 1));
    }

    setValue(val);
  };

  return (
    <Group position="center">
      <MonthPicker
        date={date}
        onDateChange={setDate}
        type="range"
        value={value}
        onChange={handleChange}
      />
    </Group>
  );
}

`;

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [date, setDate] = useState(new Date());

  const handleChange = (val: [Date | null, Date | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => new Date(current.getFullYear() + 1, 1));
    }

    setValue(val);
  };

  return (
    <Group position="center">
      <MonthPicker
        date={date}
        onDateChange={setDate}
        type="range"
        value={value}
        onChange={handleChange}
      />
    </Group>
  );
}

export const controlledDate: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
