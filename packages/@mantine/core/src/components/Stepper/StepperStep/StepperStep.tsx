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
import { getStepColorText } from '../get-step-color-text';
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
  | 'stepIconContent'
  | 'stepBody'
  | 'stepLabel'
  | 'stepDescription';

export interface StepperStepProps
  extends BoxProps, CompoundStylesApiProps<StepperStepFactory>, ElementProps<'button'> {
  /** 0-based step index, automatically set by Stepper component @category state */
  step?: number;

  /** Step state, automatically set by Stepper component based on active prop. stepInactive: not reached, stepProgress: current, stepCompleted: passed @category state */
  state?: 'stepInactive' | 'stepProgress' | 'stepCompleted';

  /** Key of `theme.colors`, by default controlled by Stepper component @category appearance */
  color?: MantineColor;

  /** When false, hides the step icon. Useful for creating compact steppers with only labels @default true @category appearance */
  withIcon?: boolean;

  /** Step icon, defaults to `step index + 1` when rendered within Stepper @category appearance */
  icon?: React.ReactNode | StepFragmentComponent;

  /** Step icon displayed when step is completed @category appearance */
  completedIcon?: React.ReactNode | StepFragmentComponent;

  /** Step icon displayed when step is in progress @category appearance */
  progressIcon?: React.ReactNode | StepFragmentComponent;

  /** Step label, render after icon @category appearance */
  label?: React.ReactNode | StepFragmentComponent;

  /** Step description @category appearance */
  description?: React.ReactNode | StepFragmentComponent;

  /** Icon wrapper size @category appearance */
  iconSize?: string | number;

  /** Icon position relative to step body, controlled by Stepper component @category appearance */
  iconPosition?: 'right' | 'left';

  /** Indicates loading state of the step @category behavior */
  loading?: boolean;

  /** Set to false to disable clicks on step @category behavior */
  allowStepClick?: boolean;

  /** Should step selection be allowed @category behavior */
  allowStepSelect?: boolean;

  /** Static selector base */
  __staticSelector?: string;

  /** Component orientation @category appearance */
  orientation?: 'vertical' | 'horizontal';
}

export type StepperStepFactory = Factory<{
  props: StepperStepProps;
  ref: HTMLButtonElement;
  stylesNames: StepperStepStylesNames;
  compound: true;
}>;

const defaultProps = {
  withIcon: true,
  allowStepClick: true,
  iconPosition: 'left',
} satisfies Partial<StepperStepProps>;

export const StepperStep = factory<StepperStepFactory>((props) => {
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
        {
          iconPosition: iconPosition || ctx.iconPosition,
          allowClick: allowStepClick,
          labelPosition: ctx.labelPosition,
        },
        mod,
      ]}
      {...dataAttributes}
      {...others}
      __vars={{
        '--step-color': color ? getThemeColor(color, theme) : undefined,
        '--step-color-text': color ? getStepColorText(color, theme) : undefined,
      }}
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
              <span {...ctx.getStyles('stepIconContent', stylesApi)}>
                {loading ? (
                  <Loader
                    {...ctx.getStyles('stepLoader', stylesApi)}
                    size="calc(var(--stepper-icon-size) / 2)"
                    color={color}
                  />
                ) : (
                  getStepFragment(_icon || icon, step)
                )}
              </span>
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
