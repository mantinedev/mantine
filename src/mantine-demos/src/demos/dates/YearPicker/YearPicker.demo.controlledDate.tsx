import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group } from '@mantine/core';
import { YearPicker } from '@mantine/dates';

const code = `
function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [date, setDate] = useState(new Date());

  const handleChange = (val: [Date | null, Date | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => new Date(current.getFullYear() + 20, 1));
    }

    setValue(val);
  };

  return (
    <Group position="center">
      <YearPicker
        date={date}
        onNextDecade={setDate}
        onPreviousDecade={setDate}
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
      setDate((current) => new Date(current.getFullYear() + 20, 1));
    }

    setValue(val);
  };

  return (
    <Group position="center">
      <YearPicker
        date={date}
        onNextDecade={setDate}
        onPreviousDecade={setDate}
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
