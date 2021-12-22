import React, { Children, forwardRef, useState } from 'react';
import {
  MantineColor,
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  ClassNames,
} from '@mantine/styles';
import { Box } from '../Box';
import { Step, StepStylesNames } from './Step/Step';
import useStyles from './Stepper.styles';

export type StepperStylesNames = ClassNames<typeof useStyles> | StepStylesNames;

export interface StepperProps
  extends DefaultProps<StepperStylesNames>,
    React.ComponentPropsWithRef<'div'> {
  /** <Stepper.Step /> components only */
  children: React.ReactNode;

  /** Called when step is clicked */
  onStepClick?(stepIndex: number): void;

  /** Prevents clicking to steps beyond the ones already reached */
  preventClickAhead?: boolean;

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

  /** Breakpoint at which orientation will change from horizontal to vertical */
  breakpoint?: MantineNumberSize;
}

type StepperComponent = ((props: StepperProps) => React.ReactElement) & {
  displayName: string;
  Step: typeof Step;
};

export const Stepper: StepperComponent = forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      className,
      children,
      onStepClick,
      preventClickAhead,
      active,
      completedIcon,
      progressIcon,
      color,
      iconSize,
      contentPadding = 'md',
      size = 'md',
      orientation = 'horizontal',
      breakpoint,
      iconPosition = 'left',
      classNames,
      styles,
      ...others
    }: StepperProps,
    ref
  ) => {
    const [maxStepReached, setMaxStepReached] = useState<number>(0);

    const { classes, cx } = useStyles(
      { contentPadding, color, orientation, iconPosition, size, iconSize, breakpoint },
      { classNames, styles, name: 'Stepper' }
    );
    const filteredChildren = Children.toArray(children).filter(
      (item: React.ReactElement) => item.type === Step
    ) as React.ReactElement[];

    const items = filteredChildren.reduce((acc, item, index, array) => {
      const shouldAllowClick = typeof onStepClick === 'function' && (
        preventClickAhead ? index <= maxStepReached : true
      );
      acc.push(
        <Step
          {...item.props}
          __staticSelector="Stepper"
          icon={item.props.icon || index + 1}
          key={index}
          state={
            active === index ? 'stepProgress' : active > index ? 'stepCompleted' : 'stepInactive'
          }
          onClick={() => shouldAllowClick && onStepClick(index)}
          allowStepClick={shouldAllowClick}
          onStepReached={() => setMaxStepReached((step) => Math.max(step, index))}
          completedIcon={item.props.completedIcon || completedIcon}
          progressIcon={item.props.progressIcon || progressIcon}
          color={item.props.color || color}
          iconSize={iconSize}
          size={size}
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
    }, [] as React.ReactNode[]);

    const content = filteredChildren[active]?.props?.children;

    return (
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        <div className={classes.steps}>{items}</div>
        {content && <div className={classes.content}>{content}</div>}
      </Box>
    );
  }
) as any;

Stepper.Step = Step;
Stepper.displayName = '@mantine/core/Stepper';
