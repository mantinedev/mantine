import React, { useState } from 'react';
import { Group, useMantineTheme } from '@mantine/core';
import { Calendar } from '../Calendar';

const code = `
<Calendar
  initialMonth={new Date(2021, 7)}
  dayStyle={(date) =>
    date.getDay() === 5 && date.getDate() === 13
      ? { backgroundColor: theme.colors.red[9], color: theme.white }
      : null
  }
/>
`;

function Demo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState(new Date());
  return (
    <Group position="center">
      <Calendar
        value={value}
        onChange={setValue}
        initialMonth={new Date(2021, 7)}
        dayStyle={(date) =>
          date.getDay() === 5 && date.getDate() === 13
            ? { backgroundColor: theme.colors.red[9], color: theme.white }
            : null
        }
      />
    </Group>
  );
}

export const styles: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
