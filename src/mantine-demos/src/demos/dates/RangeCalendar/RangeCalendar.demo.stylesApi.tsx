import React, { useState } from 'react';
import { RangeCalendar } from '@mantine/dates';
import { Group } from '@mantine/core';

const code = `
import { useState } from 'react';
import { RangeCalendar } from '@mantine/dates';
import { Group } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <Group position="center">
      <RangeCalendar
        value={value}
        onChange={setValue}
        styles={(theme) => ({
          day: {
            '&[data-selected]': {
              backgroundColor: theme.colors.cyan[4],
              borderRadius: 100,
              position: 'relative',
            },

            '&[data-in-range]': {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.fn.rgba(theme.colors.cyan[7], 0.2)
                  : theme.colors.cyan[0],
            },

            '&[data-first-in-range]': {
              backgroundColor: theme.colors.cyan[4],
              borderRadius: 100,
              position: 'relative',

              '&::after': {
                content: '""',
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.fn.rgba(theme.colors.cyan[7], 0.2)
                    : theme.colors.cyan[0],
                position: 'absolute',
                right: 0,
                left: 20,
                top: 0,
                bottom: 0,
                zIndex: -1,
              },
            },

            '&[data-last-in-range]': {
              backgroundColor: theme.colors.cyan[4],
              borderRadius: 100,
              '&::after': {
                content: '""',
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.fn.rgba(theme.colors.cyan[7], 0.2)
                    : theme.colors.cyan[0],
                position: 'absolute',
                left: 0,
                right: 20,
                top: 0,
                bottom: 0,
                zIndex: -1,
              },
            },
          },
        })}
      />
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <Group position="center">
      <RangeCalendar
        value={value}
        onChange={setValue}
        styles={(theme) => ({
          day: {
            '&[data-selected]': {
              backgroundColor: theme.colors.cyan[4],
              borderRadius: 100,
              position: 'relative',
            },

            '&[data-in-range]': {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.fn.rgba(theme.colors.cyan[7], 0.2)
                  : theme.colors.cyan[0],
            },

            '&[data-first-in-range]': {
              backgroundColor: theme.colors.cyan[4],
              borderRadius: 100,
              position: 'relative',

              '&::after': {
                content: '""',
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.fn.rgba(theme.colors.cyan[7], 0.2)
                    : theme.colors.cyan[0],
                position: 'absolute',
                right: 0,
                left: 20,
                top: 0,
                bottom: 0,
                zIndex: -1,
              },
            },

            '&[data-last-in-range]': {
              backgroundColor: theme.colors.cyan[4],
              borderRadius: 100,
              '&::after': {
                content: '""',
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.fn.rgba(theme.colors.cyan[7], 0.2)
                    : theme.colors.cyan[0],
                position: 'absolute',
                left: 0,
                right: 20,
                top: 0,
                bottom: 0,
                zIndex: -1,
              },
            },
          },
        })}
      />
    </Group>
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
