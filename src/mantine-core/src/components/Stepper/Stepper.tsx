import React, { Children } from 'react';
import { MantineColor } from '@mantine/styles';
import { CheckboxIcon } from '../Checkbox';
import { Breadcrumbs } from '../Breadcrumbs';
import { Step } from './Step/Step';
import useStyles from './Stepper.styles';

export interface StepperProps {
  /** <Stepper.Step /> components only */
  children: React.ReactNode;

  /** Called when step is clicked */
  onStepClick?(stepIndex: number): void;

  /** Active step index */
  active: number;

  /** Step icon displayed when step is completed */
  completedIcon?: React.ReactNode;

  /** Step icon displayed when step is in progress */
  progressIcon?: React.ReactNode;

  /** Active and progress Step colors from theme.colors */
  color?: MantineColor;
}

export function Stepper({
  children,
  onStepClick,
  active,
  completedIcon = <CheckboxIcon indeterminate={false} width={20} height={20} />,
  progressIcon,
  color,
}: StepperProps) {
  const { classes } = useStyles();

  const items = Children.toArray(children)
    .filter((item: React.ReactElement) => item.type === Step)
    .map((item: React.ReactElement, index) => (
      <Step
        {...item.props}
        icon={item.props.icon || index + 1}
        key={index}
        state={
          active === index ? 'stepProgress' : active > index ? 'stepCompleted' : 'stepInactive'
        }
        onClick={() => typeof onStepClick === 'function' && onStepClick(index)}
        completedIcon={item.props.completedIcon || completedIcon}
        progressIcon={item.props.progressIcon || progressIcon}
        color={item.props.color || color}
      />
    ));

  return (
    <Breadcrumbs
      className={classes.root}
      classNames={{ separator: classes.separator }}
      separator={<div />}
    >
      {items}
    </Breadcrumbs>
  );
}

Stepper.Step = Step;
Stepper.displayName = '@mantine/core/Stepper';
