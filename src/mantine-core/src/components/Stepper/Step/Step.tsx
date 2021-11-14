import React from 'react';
import { DefaultProps, MantineColor, ClassNames } from '@mantine/styles';
import { UnstyledButton } from '../../Button';
import useStyles from './Step.styles';

export type StepStylesNames = ClassNames<typeof useStyles>;

export interface StepProps
  extends DefaultProps<StepStylesNames>,
    React.ComponentPropsWithoutRef<'button'> {
  /** Step state, controlled by Steps component */
  state?: 'stepInactive' | 'stepProgress' | 'stepCompleted';

  /** Step color from theme.colors */
  color?: MantineColor;

  /** Should icon be displayed */
  withIcon?: boolean;

  /** Step icon, defaults to step index + 1 when rendered within Stepper */
  icon?: React.ReactNode;

  /** Step icon displayed when step is completed */
  completedIcon?: React.ReactNode;

  /** Step icon displayed when step is in progress */
  progressIcon?: React.ReactNode;

  /** Step label, render after icon */
  children?: React.ReactNode;

  /** Icon wrapper size in px */
  iconSize?: number;
}

export function Step({
  className,
  state,
  color,
  icon,
  completedIcon,
  progressIcon,
  children,
  withIcon = true,
  iconSize = 32,
  ...others
}: StepProps) {
  const { classes, cx } = useStyles({ color, iconSize }, { name: 'Steps' });
  const _icon =
    state === 'stepCompleted' ? completedIcon : state === 'stepProgress' ? progressIcon : icon;

  return (
    <UnstyledButton className={cx(classes.step, classes[state], className)} {...others}>
      {withIcon && <div className={classes.stepIcon}>{_icon || icon}</div>}
      {children && <div className={classes.stepLabel}>{children}</div>}
    </UnstyledButton>
  );
}

Step.displayName = '@mantine/core/Step';
