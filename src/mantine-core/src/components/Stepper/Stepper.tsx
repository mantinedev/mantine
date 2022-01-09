import React, { forwardRef } from 'react';
import {
  MantineColor,
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  ClassNames,
} from '@mantine/styles';
import { findChildByType, filterChildrenByType } from '../../utils';
import { Box } from '../Box';
import { Step, StepStylesNames } from './Step/Step';
import { StepCompleted } from './StepCompleted/StepCompleted';
import useStyles from './Stepper.styles';

export type StepperStylesNames = ClassNames<typeof useStyles> | StepStylesNames;

export interface StepperProps
  extends DefaultProps<StepperStylesNames>,
    React.ComponentPropsWithRef<'div'> {
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

  /** Step icon size in px */
  iconSize?: number;

  /** Content padding-top from theme.spacing or number to set value in px */
  contentPadding?: MantineNumberSize;

  /** Component orientation */
  orientation?: 'vertical' | 'horizontal';

  /** Icon position relative to step body */
  iconPosition?: 'right' | 'left';

  /** Component size */
  size?: MantineSize;

  /** Radius from theme.radius, or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Breakpoint at which orientation will change from horizontal to vertical */
  breakpoint?: MantineNumberSize;
}

type StepperComponent = ((props: StepperProps) => React.ReactElement) & {
  displayName: string;
  Step: typeof Step;
  Completed: typeof StepCompleted;
};

export const Stepper: StepperComponent = forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      className,
      children,
      onStepClick,
      active,
      completedIcon,
      progressIcon,
      color,
      iconSize,
      contentPadding = 'md',
      size = 'md',
      radius = 'xl',
      orientation = 'horizontal',
      breakpoint,
      iconPosition = 'left',
      classNames,
      styles,
      ...others
    }: StepperProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { contentPadding, color, orientation, iconPosition, size, iconSize, breakpoint },
      { classNames, styles, name: 'Stepper' }
    );
    const filteredChildren = filterChildrenByType(children, Step);
    const completedStep = findChildByType(children, StepCompleted);

    const items = filteredChildren.reduce<React.ReactNode[]>((acc, item, index, array) => {
      const shouldAllowSelect =
        typeof item.props.allowStepSelect === 'boolean'
          ? item.props.allowStepSelect
          : typeof onStepClick === 'function';

      acc.push(
        <Step
          {...item.props}
          __staticSelector="Stepper"
          icon={item.props.icon || index + 1}
          key={index}
          state={
            active === index ? 'stepProgress' : active > index ? 'stepCompleted' : 'stepInactive'
          }
          onClick={() =>
            shouldAllowSelect && typeof onStepClick === 'function' && onStepClick(index)
          }
          allowStepClick={shouldAllowSelect && typeof onStepClick === 'function'}
          completedIcon={item.props.completedIcon || completedIcon}
          progressIcon={item.props.progressIcon || progressIcon}
          color={item.props.color || color}
          iconSize={iconSize}
          size={size}
          radius={radius}
          classNames={classNames}
          styles={styles}
          iconPosition={item.props.iconPosition || iconPosition}
        />
      );

      if (index !== array.length - 1) {
        acc.push(
          <div
            className={cx(classes.separator, { [classes.separatorActive]: index < active })}
            key={`separator-${index}`}
          />
        );
      }

      return acc;
    }, []);

    const stepContent = filteredChildren[active]?.props?.children;
    const completedContent = completedStep?.props?.children;
    const content = active > filteredChildren.length - 1 ? completedContent : stepContent;

    return (
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        <div className={classes.steps}>{items}</div>
        {content && <div className={classes.content}>{content}</div>}
      </Box>
    );
  }
) as any;

Stepper.Step = Step;
Stepper.Completed = StepCompleted;
Stepper.displayName = '@mantine/core/Stepper';
