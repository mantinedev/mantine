import 'dayjs/locale/ru';
import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Calendar } from '../Calendar';

const code = `
<Calendar
  withSelect
  locale="ru"
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 11, 31)}
  yearsRange={{ from: 2020, to: 2025 }}
/>
`;

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Group position="center">
      <Calendar
        value={value}
        onChange={setValue}
        withSelect
        locale="ru"
        minDate={new Date(2020, 0, 1)}
        maxDate={new Date(2025, 11, 31)}
        yearsRange={{ from: 2020, to: 2025 }}
      />
    </Group>
  );
}

export const localization: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
