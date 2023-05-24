import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { createStyles } from '@mantine/core';

const code = `
import { useState } from 'react';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    border: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderRadius: theme.radius.md,
    padding: \`\${theme.spacing.sm} \${theme.spacing.lg}\`,
    cursor: 'pointer',
    margin: theme.spacing.md,
  },

  active: {
    backgroundColor: theme.colors[theme.primaryColor][6],
    color: theme.white,
  },
}));

function Demo() {
  const [active, setActive] = useState(0);
  const { classes, cx } = useStyles();

  return (
    <div>
      <button
        className={cx(classes.button, { [classes.active]: active === 0 })}
        onClick={() => setActive(0)}
        type="button"
      >
        First
      </button>
      <button
        className={cx(classes.button, { [classes.active]: active === 1 })}
        onClick={() => setActive(1)}
        type="button"
      >
        Second
      </button>
    </div>
  );
}
`;

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    border: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderRadius: theme.radius.md,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    cursor: 'pointer',
    margin: theme.spacing.md,
  },

  active: {
    backgroundColor: theme.colors[theme.primaryColor][6],
    color: theme.white,
  },
}));

function Demo() {
  const [active, setActive] = useState(0);
  const { classes, cx } = useStyles();

  return (
    <div>
      <button
        className={cx(classes.button, { [classes.active]: active === 0 })}
        onClick={() => setActive(0)}
        type="button"
      >
        First
      </button>
      <button
        className={cx(classes.button, { [classes.active]: active === 1 })}
        onClick={() => setActive(1)}
        type="button"
      >
        Second
      </button>
    </div>
  );
}

export const createStylesCx: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
