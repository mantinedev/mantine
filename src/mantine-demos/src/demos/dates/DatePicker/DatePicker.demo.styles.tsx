import React from 'react';
import { useMantineTheme } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import { useMantineTheme } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const theme = useMantineTheme();

  return (
    <DatePicker
      placeholder="Pick date"
      label="Event date"
      dayStyle={(date) =>
        date.getDay() === 5 && date.getDate() === 13
          ? { backgroundColor: theme.colors.red[9], color: theme.white }
          : null
      }
    />
  );
}
`;

function Demo() {
  const theme = useMantineTheme();

  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        placeholder="Pick date"
        label="Event date"
        withinPortal
        dayStyle={(date) =>
          date.getDay() === 5 && date.getDate() === 13
            ? { backgroundColor: theme.colors.red[9], color: theme.white }
            : null
        }
      />
    </div>
  );
}

export const styles: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
