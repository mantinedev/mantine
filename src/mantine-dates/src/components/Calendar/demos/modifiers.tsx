import React from 'react';
import cx from 'clsx';
import { Group, theming } from '@mantine/core';
import { createUseStyles } from 'react-jss';
import { Calendar } from '../Calendar';

const code = `
import cx from 'clsx';
import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const useStyles = createUseStyles(
  (theme) => ({
    outside: {
      opacity: 0,
    },

    weekend: {
      color: \`\${theme.colors.blue[6]} !important\`,
    },
  }),
  { theming }
);


function Demo() {
  const classes = useStyles();

  return (
    <Calendar
      disableOutsideEvents
      initialMonth={new Date(2021, 7)}
      dayClassName={(date, modifiers) =>
        cx({ [classes.outside]: modifiers.outside, [classes.weekend]: modifiers.weekend })
      }
    />
  );
}
`;

const useStyles = createUseStyles(
  (theme) => ({
    outside: {
      opacity: 0,
    },

    weekend: {
      color: `${theme.colors.blue[6]} !important`,
    },
  }),
  { theming }
);

function Demo() {
  const classes = useStyles();
  return (
    <Group position="center">
      <Calendar
        disableOutsideEvents
        initialMonth={new Date(2021, 7)}
        dayClassName={(date, modifiers) =>
          cx({ [classes.outside]: modifiers.outside, [classes.weekend]: modifiers.weekend })
        }
      />
    </Group>
  );
}

export const modifiers: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
