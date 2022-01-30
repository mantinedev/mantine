import React from 'react';
import { Group, useMantineTheme } from '@mantine/core';
import { Month } from '@mantine/dates';

const code = `
<Month
  month={new Date(2021, 7)}
  dayStyle={(date) =>
    date.getDay() === 5 && date.getDate() === 13
      ? { backgroundColor: theme.colors.red[9], color: theme.white }
      : null
  }
/>
`;

function Demo() {
  const theme = useMantineTheme();
  return (
    <Group position="center">
      <Month
        month={new Date(2021, 7)}
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
