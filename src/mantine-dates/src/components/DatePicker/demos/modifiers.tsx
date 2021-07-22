import React from 'react';
import cx from 'clsx';
import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';
import { DatePicker } from '../DatePicker';

const code = `
import cx from 'clsx';
import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

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
    <DatePicker
      disableOutsideEvents
      placeholder="Pick date"
      label="Event date"
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
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        disableOutsideEvents
        placeholder="Pick date"
        label="Event date"
        initialMonth={new Date(2021, 7)}
        dayClassName={(date, modifiers) =>
          cx({ [classes.outside]: modifiers.outside, [classes.weekend]: modifiers.weekend })
        }
      />
    </div>
  );
}

export const modifiers: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
