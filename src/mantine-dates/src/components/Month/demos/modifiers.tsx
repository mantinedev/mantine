import React from 'react';
import cx from 'clsx';
import { createUseStyles } from 'react-jss';
import { Group, theming } from '@mantine/core';
import { Month } from '../Month';

const code = `
import cx from 'clsx';
import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

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
    <Month
      disableOutsideEvents
      month={new Date(2021, 7)}
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
      <Month
        disableOutsideEvents
        month={new Date(2021, 7)}
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
