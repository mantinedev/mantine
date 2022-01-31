import React, { useState } from 'react';
import { Stepper, StepperProps, createStyles } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Stepper, StepperProps, createStyles } from '@mantine/core';

const useStyles = createStyles((theme, params, getRef) => {
  const stepIcon = getRef('stepIcon');

  return {
    root: {
      padding: theme.spacing.md,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    separator: {
      height: 2,
      borderTop: \`2px dashed \${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]
      }\`,
      borderRadius: theme.radius.xl,
      backgroundColor: 'transparent',
    },

    separatorActive: {
      borderWidth: 0,
      backgroundImage: theme.fn.linearGradient(45, theme.colors.blue[6], theme.colors.cyan[6]),
    },

    stepIcon: {
      ref: stepIcon,
      borderColor: 'transparent',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
      borderWidth: 0,
    },

    step: {
      transition: 'transform 150ms ease',
    },

    stepProgress: {
      transform: 'scale(1.05)',
    },

    stepCompleted: {
      [\`& .\${stepIcon}\`]: {
        borderWidth: 0,
        backgroundColor: 'transparent',
        backgroundImage: theme.fn.linearGradient(45, theme.colors.blue[6], theme.colors.cyan[6]),
      },
    },
  };
});

function StyledStepper(props: StepperProps) {
  const { classes } = useStyles();
  return <Stepper classNames={classes} {...props} />;
}

function Demo() {
  const [active, setActive] = useState(1);
  return (
    <StyledStepper active={active} onStepClick={setActive}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </StyledStepper>
  );
}
`;

const useStyles = createStyles((theme, params, getRef) => {
  const stepIcon = getRef('stepIcon');

  return {
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
      ref: stepIcon,
      borderColor: 'transparent',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
      borderWidth: 0,
    },

    step: {
      transition: 'transform 150ms ease',
    },

    stepProgress: {
      transform: 'scale(1.05)',

      [`& .${stepIcon}`]: {},
    },

    stepCompleted: {
      [`& .${stepIcon}`]: {
        borderWidth: 0,
        backgroundColor: 'transparent',
        backgroundImage: theme.fn.linearGradient(45, theme.colors.blue[6], theme.colors.cyan[6]),
      },
    },
  };
});

function StyledStepper(props: StepperProps) {
  const { classes } = useStyles();
  return <Stepper classNames={classes} {...props} />;
}

function Demo() {
  const [active, setActive] = useState(1);
  return (
    <StyledStepper active={active} onStepClick={setActive} breakpoint="sm">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </StyledStepper>
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
