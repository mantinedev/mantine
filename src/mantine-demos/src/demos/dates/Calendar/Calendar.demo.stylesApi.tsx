import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <Calendar
      value={value}
      onChange={setValue}
      fullWidth
      size="xl"
      styles={(theme) => ({
        cell: {
          border: \`1px solid \${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
          }\`,
        },
        day: { borderRadius: 0, height: 70, fontSize: theme.fontSizes.lg },
        weekday: { fontSize: theme.fontSizes.lg },
        weekdayCell: {
          fontSize: theme.fontSizes.xl,
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
          border: \`1px solid \${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
          }\`,
          height: 70,
        },
      })}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <Calendar
        value={value}
        onChange={setValue}
        fullWidth
        size="xl"
        styles={(theme) => ({
          cell: {
            border: `1px solid ${
              theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,
          },
          day: { borderRadius: 0, height: 70, fontSize: theme.fontSizes.lg },
          weekday: { fontSize: theme.fontSizes.lg },
          weekdayCell: {
            fontSize: theme.fontSizes.xl,
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
            border: `1px solid ${
              theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,
            height: 70,
          },
        })}
      />
    </Group>
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
