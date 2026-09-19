import { Activity, Children, cloneElement } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getAutoContrastValue,
  getContrastColor,
  getFontSize,
  getRadius,
  getSize,
  getSpacing,
  getThemeColor,
  MantineColor,
  MantineRadius,
  MantineSize,
  MantineSpacing,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { getStepColorText } from './get-step-color-text';
import { StepperProvider, type StepperContextValue } from './Stepper.context';
import { StepperCompleted, StepperCompletedProps } from './StepperCompleted/StepperCompleted';
import { StepperStep, StepperStepProps } from './StepperStep/StepperStep';
import classes from './Stepper.module.css';
export type StepFragmentComponent = React.FC<{ step: number }>;

export type StepperStylesNames =
  | 'root'
  | 'separator'
  | 'steps'
  | 'content'
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

export type StepperCssVariables = {
  root:
    | '--stepper-color'
    | '--stepper-color-text'
    | '--stepper-icon-color'
    | '--stepper-icon-size'
    | '--stepper-content-padding'
    | '--stepper-radius'
    | '--stepper-fz'
    | '--stepper-spacing';
};

export interface StepperProps
  extends BoxProps, StylesApiProps<StepperFactory>, ElementProps<'div'> {
  /** `Stepper.Step` components @category appearance */
  children: React.ReactNode;

  /** Called when a clickable step is clicked with its 0-based index. Not called for the currently active step. @category behavior */
  onStepClick?: (stepIndex: number) => void;

  /** Index of the active step @category state */
  active: number;

  /** Step icon @default step index + 1 @category appearance */
  icon?: React.ReactNode | StepFragmentComponent;

  /** Step icon displayed when step is completed @default CheckIcon @category appearance */
  completedIcon?: React.ReactNode | StepFragmentComponent;

  /** Step icon displayed when step is in progress @default step index + 1 @category appearance */
  progressIcon?: React.ReactNode | StepFragmentComponent;

  /** Key of `theme.colors` or any valid CSS color, controls colors of active and progress steps @default theme.primaryColor @category appearance */
  color?: MantineColor;

  /** Controls size of the step icon, by default icon size is inferred from `size` prop @category appearance */
  iconSize?: number | string;

  /** Key of `theme.spacing` or any valid CSS value to set `padding-top` of the content @default 'md' @category appearance */
  contentPadding?: MantineSpacing;

  /** Stepper orientation @default 'horizontal' @category appearance */
  orientation?: 'vertical' | 'horizontal';

  /** Icon position relative to the step body. Ignored if `labelPosition="bottom"` is set – with the label below the icon there is no left/right to place it on. @default 'left' @category appearance */
  iconPosition?: 'right' | 'left';

  /** Controls size of various Stepper elements @category appearance */
  size?: MantineSize;

  /** Key of `theme.radius` or any valid CSS value to set steps border-radius @default "xl" @category appearance */
  radius?: MantineRadius;

  /** When true, users can click and jump to any step. When false, users can only navigate to completed steps @default true @category behavior */
  allowNextStepsSelect?: boolean;

  /** Determines whether steps should wrap to the next line if no space is available @default true @category appearance */
  wrap?: boolean;

  /** Controls position of the step label and description relative to the step icon. Takes precedence over `iconPosition`. Ignored if `orientation="vertical"` is set. @default 'right' @category appearance */
  labelPosition?: 'right' | 'bottom';

  /** When true, automatically adjusts the icon color in completed steps to ensure sufficient contrast against the step background color @category appearance */
  autoContrast?: boolean;

  /** If set, all step content is kept mounted. React 19 `Activity` is used to preserve state while content is hidden. @default false */
  keepMounted?: boolean;
}

export type StepperFactory = Factory<{
  props: StepperProps;
  ref: HTMLDivElement;
  stylesNames: StepperStylesNames;
  vars: StepperCssVariables;
  staticComponents: {
    Step: typeof StepperStep;
    Completed: typeof StepperCompleted;
  };
}>;

const defaultProps = {
  orientation: 'horizontal',
  iconPosition: 'left',
  labelPosition: 'right',
  allowNextStepsSelect: true,
  wrap: true,
} satisfies Partial<StepperProps>;

const varsResolver = createVarsResolver<StepperFactory>(
  (theme, { color, iconSize, size, contentPadding, radius, autoContrast }) => ({
    root: {
      '--stepper-color': color ? getThemeColor(color, theme) : undefined,
      '--stepper-color-text': getStepColorText(color || theme.primaryColor, theme),
      '--stepper-icon-color': getAutoContrastValue(autoContrast, theme)
        ? getContrastColor({ color, theme, autoContrast })
        : undefined,
      '--stepper-icon-size':
        iconSize === undefined ? getSize(size, 'stepper-icon-size') : rem(iconSize),
      '--stepper-content-padding': getSpacing(contentPadding),
      '--stepper-radius': radius === undefined ? undefined : getRadius(radius),
      '--stepper-fz': getFontSize(size),
      '--stepper-spacing': getSpacing(size),
    },
  })
);

export const Stepper = factory<StepperFactory>((_props) => {
  const props = useProps('Stepper', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    onStepClick,
    active,
    icon,
    completedIcon,
    progressIcon,
    color,
    iconSize,
    contentPadding,
    orientation,
    iconPosition,
    size,
    radius,
    allowNextStepsSelect,
    wrap,
    labelPosition,
    autoContrast,
    keepMounted,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<StepperFactory>({
    name: 'Stepper',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const convertedChildren = Children.toArray(children) as React.ReactElement[];
  const _children = convertedChildren.filter(
    (child) => child.type !== StepperCompleted
  ) as React.ReactElement<StepperStepProps>[];
  const completedStep = convertedChildren.find(
    (item) => item.type === StepperCompleted
  ) as React.ReactElement<StepperCompletedProps>;

  const items = _children.reduce<React.ReactElement<StepperStepProps>[]>(
    (acc, item: React.ReactElement<StepperStepProps>, index) => {
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
          icon: item.props.icon || icon || index + 1,
          key: index,
          step: index,
          state,
          onClick: () => isStepSelectionEnabled && onStepClick?.(index),
          allowStepClick: isStepSelectionEnabled,
          completedIcon: item.props.completedIcon || completedIcon,
          progressIcon: item.props.progressIcon || progressIcon,
          color: item.props.color || color,
          iconSize,
          iconPosition: item.props.iconPosition || iconPosition,
          orientation,
        })
      );

      if (orientation === 'horizontal' && index !== _children.length - 1) {
        acc.push(
          <div
            {...getStyles('separator')}
            data-active={index < active || undefined}
            data-orientation={orientation}
            key={`separator-${index}`}
          />
        );
      }

      return acc;
    },
    []
  );

  const stepContent = _children[active]?.props?.children;
  const completedContent = completedStep?.props?.children;
  const content = active > _children.length - 1 ? completedContent : stepContent;

  const contentSection = keepMounted ? (
    <>
      {_children.map((child, index) => (
        <Activity key={index} mode={active === index ? 'visible' : 'hidden'}>
          <div {...getStyles('content')}>{child.props.children}</div>
        </Activity>
      ))}
      {completedStep && (
        <Activity mode={active > _children.length - 1 ? 'visible' : 'hidden'}>
          <div {...getStyles('content')}>{completedStep.props.children}</div>
        </Activity>
      )}
    </>
  ) : (
    content && <div {...getStyles('content')}>{content}</div>
  );

  return (
    <StepperProvider
      value={{
        getStyles,
        orientation,
        iconPosition,
        labelPosition: orientation === 'vertical' ? undefined : labelPosition,
      }}
    >
      <Box {...getStyles('root')} size={size} {...others}>
        <Box
          {...getStyles('steps')}
          mod={{
            orientation,
            iconPosition,
            labelPosition: orientation === 'vertical' ? undefined : labelPosition,
            wrap: wrap && orientation !== 'vertical',
          }}
        >
          {items}
        </Box>
        {contentSection}
      </Box>
    </StepperProvider>
  );
});

Stepper.classes = classes;
Stepper.varsResolver = varsResolver;
Stepper.displayName = '@mantine/core/Stepper';
Stepper.Completed = StepperCompleted;
Stepper.Step = StepperStep;

export namespace Stepper {
  export type Props = StepperProps;
  export type StylesNames = StepperStylesNames;
  export type CssVariables = StepperCssVariables;
  export type Factory = StepperFactory;
  export type Step = StepFragmentComponent;
  export type ContextValue = StepperContextValue;

  export namespace Step {
    export type Props = StepperStepProps;
  }

  export namespace Completed {
    export type Props = StepperCompletedProps;
  }
}
