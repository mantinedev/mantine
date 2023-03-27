import React, { forwardRef, FunctionComponent } from 'react';
import {
  DefaultProps,
  MantineColor,
  Selectors,
  MantineSize,
  MantineNumberSize,
  useComponentDefaultProps,
  getSize,
} from '@mantine/styles';
import { Text } from '../../Text';
import { Loader } from '../../Loader';
import { CheckboxIcon } from '../../Checkbox';
import { UnstyledButton } from '../../UnstyledButton';
import { Transition } from '../../Transition';
import useStyles from './Step.styles';

export type StepStylesNames = Selectors<typeof useStyles>;

export type StepFragmentComponent = FunctionComponent<{ step: number }>;

export interface StepProps
  extends DefaultProps<StepStylesNames>,
    React.ComponentPropsWithoutRef<'button'> {
  variant?: string;

  /** Step index, controlled by Steps component **/
  step?: number;

  /** Step state, controlled by Steps component */
  state?: 'stepInactive' | 'stepProgress' | 'stepCompleted';

  /** Step color from theme.colors */
  color?: MantineColor;

  /** Should icon be displayed */
  withIcon?: boolean;

  /** Step icon, defaults to step index + 1 when rendered within Stepper */
  icon?: React.ReactNode | StepFragmentComponent;

  /** Step icon displayed when step is completed */
  completedIcon?: React.ReactNode | StepFragmentComponent;

  /** Step icon displayed when step is in progress */
  progressIcon?: React.ReactNode | StepFragmentComponent;

  /** Step label, render after icon */
  label?: React.ReactNode | StepFragmentComponent;

  /** Step description */
  description?: React.ReactNode | StepFragmentComponent;

  /** Icon wrapper size */
  iconSize?: number;

  /** Icon position relative to step body */
  iconPosition?: 'right' | 'left';

  /** Component size */
  size?: MantineSize;

  /** Key of theme.radius or any valid CSS value to set border-radius, "xl" by default */
  radius?: MantineNumberSize;

  /** Indicates loading state on step */
  loading?: boolean;

  /** Set to false to disable clicks on step */
  allowStepClick?: boolean;

  /** Should step selection be allowed */
  allowStepSelect?: boolean;

  /** Static selector base */
  __staticSelector?: string;

  /** Component orientation */
  orientation?: 'vertical' | 'horizontal';
}

const defaultIconSizes = {
  xs: 16,
  sm: 18,
  md: 20,
  lg: 22,
  xl: 24,
};

const defaultProps: Partial<StepProps> = {
  withIcon: true,
  size: 'md',
  radius: 'xl',
  allowStepClick: true,
  iconPosition: 'left',
  __staticSelector: 'Step',
};

const getStepFragment = (Fragment: StepFragmentComponent | React.ReactNode, step: number) => {
  if (typeof Fragment === 'function') {
    return <Fragment step={step} />;
  }

  return Fragment;
};

export const Step = forwardRef<HTMLButtonElement, StepProps>((props: StepProps, ref) => {
  const {
    className,
    step,
    state,
    color,
    icon,
    completedIcon,
    progressIcon,
    label,
    description,
    withIcon,
    iconSize,
    size,
    radius,
    loading,
    allowStepClick,
    allowStepSelect,
    iconPosition,
    __staticSelector,
    classNames,
    styles,
    unstyled,
    orientation,
    variant,
    ...others
  } = useComponentDefaultProps('StepperStep', defaultProps, props);

  const { classes, cx } = useStyles(
    { color, iconSize, radius, allowStepClick, iconPosition, orientation },
    { name: __staticSelector, classNames, styles, unstyled, variant, size }
  );

  const _iconSize = getSize({ size, sizes: defaultIconSizes });
  const _icon = state === 'stepCompleted' ? null : state === 'stepProgress' ? progressIcon : icon;
  const dataAttributes = {
    'data-progress': state === 'stepProgress' || undefined,
    'data-completed': state === 'stepCompleted' || undefined,
  };

  return (
    <UnstyledButton
      className={cx(classes.step, className)}
      tabIndex={allowStepClick ? 0 : -1}
      ref={ref}
      {...dataAttributes}
      {...others}
    >
      {withIcon && (
        <div className={classes.stepWrapper}>
          <div className={classes.stepIcon} {...dataAttributes}>
            <Transition mounted={state === 'stepCompleted'} transition="pop" duration={200}>
              {(transitionStyles) => (
                <div className={classes.stepCompletedIcon} style={transitionStyles}>
                  {loading ? (
                    <Loader color="#fff" size={_iconSize} className={classes.stepLoader} />
                  ) : (
                    getStepFragment(completedIcon, step) || (
                      <CheckboxIcon indeterminate={false} width={_iconSize} height={_iconSize} />
                    )
                  )}
                </div>
              )}
            </Transition>

            {state !== 'stepCompleted' ? (
              loading ? (
                <Loader size={_iconSize} color={color} />
              ) : (
                getStepFragment(_icon || icon, step)
              )
            ) : null}
          </div>
          {orientation === 'vertical' && (
            <div
              className={cx(classes.verticalSeparator, {
                [classes.verticalSeparatorActive]: state === 'stepCompleted',
              })}
            />
          )}
        </div>
      )}

      {(label || description) && (
        <div className={classes.stepBody}>
          {label && <Text className={classes.stepLabel}>{getStepFragment(label, step)}</Text>}
          {description && (
            <Text className={classes.stepDescription} color="dimmed">
              {getStepFragment(description, step)}
            </Text>
          )}
        </div>
      )}
    </UnstyledButton>
  );
});

Step.displayName = '@mantine/core/Step';
