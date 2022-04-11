import { createStyles, StepperProgress, StepperProgressProps } from '@mantine/core';
import React, { useState } from 'react';
import { codeSteps, mockSteps } from './_mock';

const code = `
import { useState } from 'react';
import { createStyles, StepperProgress, StepperProgressProps } from '@mantine/core';

const useStyles = createStyles((theme, params, getRef) => ({
  root: {
    padding: theme.spacing.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  stepIcon: {
    ref: getRef('stepIcon'),
    borderColor: 'transparent',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
    borderWidth: 0,
  },

  step: {
    transition: 'transform 150ms ease',
  },

  stepProgress: {
    transform: 'scale(1.05)',

    [\`& .\${getRef('stepIcon')}\`]: {},
  },

  stepCompleted: {
    [\`& .\${getRef('stepIcon')}\`]: {
      borderWidth: 0,
      backgroundColor: 'transparent',
      backgroundImage: theme.fn.linearGradient(45, theme.colors.blue[6], theme.colors.cyan[6]),
    },
  },
}));

function StyledStepperProgress(props: StepperProgressProps) {
  const { classes } = useStyles();
  return <StepperProgress classNames={classes} {...props} />;
}

function Demo() {
  const [active, setActive] = useState(1);
  
  return (
    <StyledStepperProgress active={active} onStepClick={setActive}>
      ${codeSteps.trim()}
      <StepperProgress.Completed>Completed content here</StepperProgress.Completed>
    </StyledStepperProgress>
  );
}
`;

const useStyles = createStyles((theme, params, getRef) => ({
  root: {
    padding: theme.spacing.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  stepIcon: {
    ref: getRef('stepIcon'),
    borderColor: 'transparent',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
    borderWidth: 0,
  },

  step: {
    transition: 'transform 150ms ease',
  },

  stepProgress: {
    transform: 'scale(1.05)',

    [`& .${getRef('stepIcon')}`]: {},
  },

  stepCompleted: {
    [`& .${getRef('stepIcon')}`]: {
      borderWidth: 0,
      backgroundColor: 'transparent',
      backgroundImage: theme.fn.linearGradient(45, theme.colors.blue[6], theme.colors.cyan[6]),
    },
  },
}));

function StyledStepperProgress(props: StepperProgressProps) {
  const { classes } = useStyles();
  return <StepperProgress classNames={classes} {...props} />;
}

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <StyledStepperProgress active={active} onStepClick={setActive} breakpoint="sm">
      ${mockSteps()}
      <StepperProgress.Completed>Completed content here</StepperProgress.Completed>
    </StyledStepperProgress>
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
