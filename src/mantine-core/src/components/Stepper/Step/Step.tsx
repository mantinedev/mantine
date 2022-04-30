import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineColor,
  Selectors,
  MantineSize,
  MantineNumberSize,
} from '@mantine/styles';
import { Text } from '../../Text';
import { Loader } from '../../Loader';
import { CheckboxIcon } from '../../Checkbox';
import { UnstyledButton } from '../../Button';
import { Transition } from '../../Transition';
import useStyles from './Step.styles';

export type StepStylesNames = Selectors<typeof useStyles>;

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
  label?: React.ReactNode;

  /** Step description */
  description?: React.ReactNode;

  /** Icon wrapper size in px */
  iconSize?: number;

  /** Icon position relative to step body */
  iconPosition?: 'right' | 'left';

  /** Component size */
  size?: MantineSize;

  /** Radius from theme.radius, or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Indicates loading state on step */
  loading?: boolean;

  /** Set to false to disable clicks on step */
  allowStepClick?: boolean;

  /** Should step selection be allowed */
  allowStepSelect?: boolean;

  /** Static selector base */
  __staticSelector?: string;
}

const defaultIconSizes = {
  xs: 16,
  sm: 18,
  md: 20,
  lg: 22,
  xl: 24,
};

export const Step = forwardRef<HTMLButtonElement, StepProps>(
  (
    {
      className,
      state,
      color,
      icon,
      completedIcon,
      progressIcon,
      label,
      description,
      withIcon = true,
      iconSize,
      size = 'md',
      radius = 'xl',
      loading,
      allowStepClick = true,
      allowStepSelect,
      iconPosition = 'left',
      __staticSelector = 'Step',
      classNames,
      styles,
      ...others
    }: StepProps,
    ref
  ) => {
    const { classes, cx, theme } = useStyles(
      { color, iconSize, size, radius, allowStepClick, iconPosition },
      { name: __staticSelector, classNames, styles }
    );

    const _iconSize = theme.fn.size({ size, sizes: defaultIconSizes });
    const _icon = state === 'stepCompleted' ? null : state === 'stepProgress' ? progressIcon : icon;

    return (
      <UnstyledButton
        className={cx(classes.step, classes[state], className)}
        tabIndex={allowStepClick ? 0 : -1}
        ref={ref}
        {...others}
      >
        {withIcon && (
          <div className={classes.stepIcon}>
            <Transition mounted={state === 'stepCompleted'} transition="pop" duration={200}>
              {(transitionStyles) => (
                <div className={classes.stepCompletedIcon} style={transitionStyles}>
                  {loading ? (
                    <Loader color="#fff" size={_iconSize} className={classes.stepLoader} />
                  ) : (
                    completedIcon || (
                      <CheckboxIcon indeterminate={false} width={_iconSize} height={_iconSize} />
                    )
                  )}
                </div>
              )}
            </Transition>

            {state !== 'stepCompleted' ? (
              loading ? (
                <Loader size={_iconSize} />
              ) : (
                _icon || icon
              )
            ) : null}
          </div>
        )}

        {(label || description) && (
          <div className={classes.stepBody}>
            {label && <Text className={classes.stepLabel}>{label}</Text>}
            {description && (
              <Text className={classes.stepDescription} color="dimmed">
                {description}
              </Text>
            )}
          </div>
        )}
      </UnstyledButton>
    );
  }
);

Step.displayName = '@mantine/core/Step';
