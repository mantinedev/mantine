import React, { useState } from 'react';
import { Stepper, createStyles } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Stepper, createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => ({
  root: {
    padding: theme.spacing.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  separator: {
    height: 2,
    borderTop: \`2px dashed \${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]}\`,
    borderRadius: theme.radius.xl,
    backgroundColor: 'transparent',
  },

  separatorActive: {
    borderWidth: 0,
    backgroundImage: theme.fn.linearGradient(45, theme.colors.blue[6], theme.colors.cyan[6]),
  },

  stepIcon: {
    ref: getRef('stepIcon'),
    borderColor: 'transparent',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
    borderWidth: 0,

    '&[data-completed]': {
      borderWidth: 0,
      backgroundColor: 'transparent',
      backgroundImage: theme.fn.linearGradient(45, theme.colors.blue[6], theme.colors.cyan[6]),
    },
  },

  step: {
    transition: 'transform 150ms ease',

    '&[data-progress]': {
      transform: 'scale(1.05)',
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  const [active, setActive] = useState(1);
  return (
    <Stepper classNames={classes} active={active} onStepClick={setActive} breakpoint="sm">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`;

const useStyles = createStyles((theme, _params, getRef) => ({
  root: {
    padding: theme.spacing.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  separator: {
    height: 2,
    borderTop: `2px dashed ${
      theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]
    }`,
    borderRadius: theme.radius.xl,
    backgroundColor: 'transparent',
  },

  separatorActive: {
    borderWidth: 0,
    backgroundImage: theme.fn.linearGradient(45, theme.colors.blue[6], theme.colors.cyan[6]),
  },

  stepIcon: {
    ref: getRef('stepIcon'),
    borderColor: 'transparent',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
    borderWidth: 0,

    '&[data-completed]': {
      borderWidth: 0,
      backgroundColor: 'transparent',
      backgroundImage: theme.fn.linearGradient(45, theme.colors.blue[6], theme.colors.cyan[6]),
    },
  },

  step: {
    transition: 'transform 150ms ease',

    '&[data-progress]': {
      transform: 'scale(1.05)',
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  const [active, setActive] = useState(1);
  return (
    <Stepper classNames={classes} active={active} onStepClick={setActive} breakpoint="sm">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
