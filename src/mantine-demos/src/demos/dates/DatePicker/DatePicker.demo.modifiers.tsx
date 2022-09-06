import React from 'react';
import { createStyles } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import { createStyles } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const useStyles = createStyles((theme) => ({
  outside: {
    opacity: 0,
  },

  weekend: {
    color: \`\${theme.colors.blue[6]} !important\`,
  },

  selected: {
    color: \`\${theme.white} !important\`,
  },
}));

function Demo() {
  const { classes, cx } = useStyles();

  return (
    <DatePicker
      disableOutsideEvents
      placeholder="Pick date"
      label="Event date"
      dayClassName={(date, modifiers) =>
        cx({
          [classes.outside]: modifiers.outside,
          [classes.weekend]: modifiers.weekend,
          [classes.selected]: modifiers.selected,
        })
      }
    />
  );
}
`;

const useStyles = createStyles((theme) => ({
  outside: {
    opacity: 0,
  },

  weekend: {
    color: `${theme.colors.blue[6]} !important`,
  },

  selected: {
    color: `${theme.white} !important`,
  },
}));

function Demo() {
  const { classes, cx } = useStyles();

  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        disableOutsideEvents
        placeholder="Pick date"
        label="Event date"
        withinPortal
        dayClassName={(date, modifiers) =>
          cx({
            [classes.outside]: modifiers.outside,
            [classes.weekend]: modifiers.weekend,
            [classes.selected]: modifiers.selected,
          })
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
