import {
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  getThemeColor,
  MantineColor,
  useMantineTheme,
  useProps,
} from '../../../core';
import { CheckIcon } from '../../Checkbox';
import { Loader } from '../../Loader';
import { Transition } from '../../Transition';
import { UnstyledButton } from '../../UnstyledButton';
import type { StepFragmentComponent } from '../Stepper';
import { useStepperContext } from '../Stepper.context';
import classes from '../Stepper.module.css';

const getStepFragment = (
  Fragment: StepFragmentComponent | React.ReactNode,
  step: number | undefined
) => {
  if (typeof Fragment === 'function') {
    return <Fragment step={step || 0} />;
  }

  return Fragment;
};

export type StepperStepStylesNames =
  | 'step'
  | 'stepLoader'
  | 'verticalSeparator'
  | 'stepWrapper'
  | 'stepIcon'
  | 'stepCompletedIcon'
  | 'stepBody'
  | 'stepLabel'
  | 'stepDescription';

export interface StepperStepProps
  extends BoxProps,
    CompoundStylesApiProps<StepperStepFactory>,
    ElementProps<'button'> {
  /** Step index, controlled by Stepper component **/
  step?: number;

  /** Step state, controlled by Stepper component */
  state?: 'stepInactive' | 'stepProgress' | 'stepCompleted';

  /** Key of `theme.colors`, by default controlled by Stepper component */
  color?: MantineColor;

  /** Determines whether the icon should be displayed */
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
  iconSize?: string | number;

  /** Icon position relative to step body, controlled by Stepper component */
  iconPosition?: 'right' | 'left';

  /** Indicates loading state of the step */
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

export type StepperStepFactory = Factory<{
  props: StepperStepProps;
  ref: HTMLButtonElement;
  stylesNames: StepperStepStylesNames;
  compound: true;
}>;

const defaultProps: Partial<StepperStepProps> = {
  withIcon: true,
  allowStepClick: true,
  iconPosition: 'left',
};

export const StepperStep = factory<StepperStepFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
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
    loading,
    allowStepClick,
    allowStepSelect,
    iconPosition,
    orientation,
    mod,
    ...others
  } = useProps('StepperStep', defaultProps, props);

  const ctx = useStepperContext();
  const theme = useMantineTheme();
  const stylesApi = { classNames, styles };

  const _icon = state === 'stepCompleted' ? null : state === 'stepProgress' ? progressIcon : icon;
  const dataAttributes = {
    'data-progress': state === 'stepProgress' || undefined,
    'data-completed': state === 'stepCompleted' || undefined,
  };

  return (
    <UnstyledButton
      {...ctx.getStyles('step', { className, style, variant: ctx.orientation, ...stylesApi })}
      mod={[
        { 'icon-position': iconPosition || ctx.iconPosition, 'allow-click': allowStepClick },
        mod,
      ]}
      ref={ref}
      {...dataAttributes}
      {...others}
      __vars={{ '--step-color': color ? getThemeColor(color, theme) : undefined }}
      tabIndex={allowStepClick ? 0 : -1}
    >
      {withIcon && (
        <span {...ctx.getStyles('stepWrapper', stylesApi)}>
          <span {...ctx.getStyles('stepIcon', stylesApi)} {...dataAttributes}>
            <Transition mounted={state === 'stepCompleted'} transition="pop" duration={200}>
              {(transitionStyles) => (
                <span
                  {...ctx.getStyles('stepCompletedIcon', { style: transitionStyles, ...stylesApi })}
                >
                  {loading ? (
                    <Loader
                      color="var(--mantine-color-white)"
                      size="calc(var(--stepper-icon-size) / 2)"
                      {...ctx.getStyles('stepLoader', stylesApi)}
                    />
                  ) : (
                    getStepFragment(completedIcon, step) || <CheckIcon size="60%" />
                  )}
                </span>
              )}
            </Transition>

            {state !== 'stepCompleted' ? (
              loading ? (
                <Loader
                  {...ctx.getStyles('stepLoader', stylesApi)}
                  size="calc(var(--stepper-icon-size) / 2)"
                  color={color}
                />
              ) : (
                getStepFragment(_icon || icon, step)
              )
            ) : null}
          </span>
          {orientation === 'vertical' && (
            <span
              {...ctx.getStyles('verticalSeparator', stylesApi)}
              data-active={state === 'stepCompleted' || undefined}
            />
          )}
        </span>
      )}

      {(label || description) && (
        <span
          {...ctx.getStyles('stepBody', stylesApi)}
          data-orientation={ctx.orientation}
          data-icon-position={iconPosition || ctx.iconPosition}
        >
          {label && (
            <span {...ctx.getStyles('stepLabel', stylesApi)}>{getStepFragment(label, step)}</span>
          )}
          {description && (
            <span {...ctx.getStyles('stepDescription', stylesApi)}>
              {getStepFragment(description, step)}
            </span>
          )}
        </span>
      )}
    </UnstyledButton>
  );
});

StepperStep.classes = classes;
StepperStep.displayName = '@mantine/core/StepperStep';
