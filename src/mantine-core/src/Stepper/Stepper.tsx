import React, { forwardRef, Children, cloneElement } from 'react';
import {
  MantineColor,
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  Selectors,
  useComponentDefaultProps,
} from '@mantine/styles';
import { ForwardRefWithStaticComponents } from '@mantine/utils';
import { Box } from '../Box';
import { Step, StepStylesNames, StepFragmentComponent } from './Step/Step';
import { StepCompleted } from './StepCompleted/StepCompleted';
import useStyles from './Stepper.styles';

export type StepperStylesNames = Selectors<typeof useStyles> | StepStylesNames;

export interface StepperProps
  extends DefaultProps<StepperStylesNames>,
    React.ComponentPropsWithRef<'div'> {
  variant?: string;

  /** <Stepper.Step /> components only */
  children: React.ReactNode;

  /** Called when step is clicked */
  onStepClick?(stepIndex: number): void;

  /** Active step index */
  active: number;

  /** Step icon, defaults to step index + 1 when rendered within Stepper */
  icon?: React.ReactNode | StepFragmentComponent;

  /** Step icon displayed when step is completed */
  completedIcon?: React.ReactNode | StepFragmentComponent;

  /** Step icon displayed when step is in progress */
  progressIcon?: React.ReactNode | StepFragmentComponent;

  /** Active and progress Step colors from theme.colors */
  color?: MantineColor;

  /** Step icon size */
  iconSize?: number;

  /** Key of theme.spacing or any valid CSS value to set content padding-top */
  contentPadding?: MantineNumberSize;

  /** Component orientation */
  orientation?: 'vertical' | 'horizontal';

  /** Icon position relative to step body */
  iconPosition?: 'right' | 'left';

  /** Component size */
  size?: MantineSize;

  /** Key of theme.radius or any valid CSS value to set border-radius, "xl" by default */
  radius?: MantineNumberSize;

  /** Breakpoint at which orientation will change from horizontal to vertical */
  breakpoint?: MantineNumberSize;

  /** Whether to enable click on upcoming steps by default. Defaults to true **/
  allowNextStepsSelect?: boolean;
}

type StepperComponent = ForwardRefWithStaticComponents<
  StepperProps,
  {
    Step: typeof Step;
    Completed: typeof StepCompleted;
  }
>;

const defaultProps: Partial<StepperProps> = {
  contentPadding: 'md',
  size: 'md',
  radius: 'xl',
  orientation: 'horizontal',
  iconPosition: 'left',
  allowNextStepsSelect: true,
};

export const Stepper: StepperComponent = forwardRef<HTMLDivElement, StepperProps>((props, ref) => {
  const {
    className,
    children,
    onStepClick,
    active,
    icon,
    completedIcon,
    progressIcon,
    color,
    iconSize,
    contentPadding,
    size,
    radius,
    orientation,
    breakpoint,
    iconPosition,
    allowNextStepsSelect,
    classNames,
    styles,
    unstyled,
    variant,
    ...others
  } = useComponentDefaultProps('Stepper', defaultProps, props);

  const { classes, cx } = useStyles(
    { contentPadding, color, orientation, iconPosition, iconSize, breakpoint },
    { name: 'Stepper', classNames, styles, unstyled, variant, size }
  );

  const convertedChildren = Children.toArray(children) as React.ReactElement[];
  const _children = convertedChildren.filter((child) => child.type !== StepCompleted);
  const completedStep = convertedChildren.find((item) => item.type === StepCompleted);

  const items = _children.reduce<React.ReactElement[]>((acc, item, index) => {
    const state =
      active === index ? 'stepProgress' : active > index ? 'stepCompleted' : 'stepInactive';

    const shouldAllowSelect = () => {
      if (typeof onStepClick !== 'function') {
        return false;
      }

      if (typeof item.props.allowStepSelect === 'boolean') {
        return item.props.allowStepSelect;
      }

      return state === 'stepCompleted' || allowNextStepsSelect;
    };

    const isStepSelectionEnabled = shouldAllowSelect();

    acc.push(
      cloneElement(item, {
        __staticSelector: 'Stepper',
        icon: item.props.icon || icon || index + 1,
        key: index,
        step: index,
        variant,
        state,
        onClick: () => isStepSelectionEnabled && onStepClick(index),
        allowStepClick: isStepSelectionEnabled,
        completedIcon: item.props.completedIcon || completedIcon,
        progressIcon: item.props.progressIcon || progressIcon,
        color: item.props.color || color,
        iconSize,
        size,
        radius,
        classNames,
        styles,
        iconPosition: item.props.iconPosition || iconPosition,
        orientation,
        unstyled,
      })
    );

    if (orientation === 'horizontal' && index !== _children.length - 1) {
      acc.push(
        <div
          className={cx(classes.separator, { [classes.separatorActive]: index < active })}
          key={`separator-${index}`}
        />
      );
    }

    return acc;
  }, []);

  const stepContent = _children[active]?.props?.children;
  const completedContent = completedStep?.props?.children;
  const content = active > _children.length - 1 ? completedContent : stepContent;

  return (
    <Box className={cx(classes.root, className)} ref={ref} {...others}>
      <div className={classes.steps}>{items}</div>
      {content && <div className={classes.content}>{content}</div>}
    </Box>
  );
}) as any;

Stepper.Step = Step;
Stepper.Completed = StepCompleted;
Stepper.displayName = '@mantine/core/Stepper';
