import { useState } from 'react';
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
} from '../../../core';
import { StepperProvider } from '../Stepper.context';
import classes from '../Stepper.module.css';

export type StepFragmentComponent = React.FC<{ step: number }>;

export type StepperRootStylesNames =
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

export type StepperRootCssVariables = {
  root:
    | '--stepper-color'
    | '--stepper-icon-color'
    | '--stepper-icon-size'
    | '--stepper-content-padding'
    | '--stepper-radius'
    | '--stepper-fz'
    | '--stepper-spacing';
};

export interface __StepperRootProps extends BoxProps, ElementProps<'div'> {
  /** Called when a clickable step is clicked with its 0-based index. Not called for the currently active step. */
  onStepClick?: (stepIndex: number) => void;

  /** Index of the active step */
  active: number;

  /** Number of steps, overrides the value detected from `Stepper.Steps` children. Set for correct value during server-side rendering. */
  stepsCount?: number;

  /** Step icon @default step index + 1 */
  icon?: React.ReactNode | StepFragmentComponent;

  /** Step icon displayed when step is completed @default CheckIcon */
  completedIcon?: React.ReactNode | StepFragmentComponent;

  /** Step icon displayed when step is in progress @default step index + 1 */
  progressIcon?: React.ReactNode | StepFragmentComponent;

  /** Key of `theme.colors` or any valid CSS color, controls colors of active and progress steps @default theme.primaryColor */
  color?: MantineColor;

  /** Controls size of the step icon, by default icon size is inferred from `size` prop */
  iconSize?: number | string;

  /** Key of `theme.spacing` or any valid CSS value to set `padding-top` of the content @default 'md' */
  contentPadding?: MantineSpacing;

  /** Stepper orientation @default 'horizontal' */
  orientation?: 'vertical' | 'horizontal';

  /** Icon position relative to the step body @default 'left' */
  iconPosition?: 'right' | 'left';

  /** Controls size of various Stepper elements */
  size?: MantineSize;

  /** Key of `theme.radius` or any valid CSS value to set steps border-radius @default "xl" */
  radius?: MantineRadius;

  /** When true, users can click and jump to any step. When false, users can only navigate to completed steps @default true */
  allowNextStepsSelect?: boolean;

  /** Determines whether steps should wrap to the next line if no space is available @default true */
  wrap?: boolean;

  /** When true, automatically adjusts the icon color in completed steps to ensure sufficient contrast against the step background color */
  autoContrast?: boolean;

  /** If set, all step content is kept mounted. React 19 `Activity` is used to preserve state while content is hidden. @default false */
  keepMounted?: boolean;
}

export interface StepperRootProps extends __StepperRootProps, StylesApiProps<StepperRootFactory> {}

export type StepperRootFactory = Factory<{
  props: StepperRootProps;
  ref: HTMLDivElement;
  stylesNames: StepperRootStylesNames;
  vars: StepperRootCssVariables;
}>;

const defaultProps = {
  orientation: 'horizontal',
  iconPosition: 'left',
  allowNextStepsSelect: true,
  wrap: true,
} satisfies Partial<StepperRootProps>;

export const varsResolver = createVarsResolver<StepperRootFactory>(
  (theme, { color, iconSize, size, contentPadding, radius, autoContrast }) => ({
    root: {
      '--stepper-color': color ? getThemeColor(color, theme) : undefined,
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

export const StepperRoot = factory<StepperRootFactory>((_props) => {
  const props = useProps('StepperRoot', defaultProps, _props);
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
    stepsCount,
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
    autoContrast,
    keepMounted,
    attributes,
    ...others
  } = props;

  const [detectedStepsCount, setStepsCount] = useState(0);

  const getStyles = useStyles<StepperRootFactory>({
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

  return (
    <StepperProvider
      value={{
        getStyles,
        orientation,
        iconPosition,
        active,
        stepsCount: stepsCount ?? detectedStepsCount,
        setStepsCount,
        onStepClick,
        allowNextStepsSelect,
        icon,
        completedIcon,
        progressIcon,
        color,
        iconSize,
        wrap,
        keepMounted,
      }}
    >
      <Box {...getStyles('root')} size={size} {...others}>
        {children}
      </Box>
    </StepperProvider>
  );
});

StepperRoot.classes = classes;
StepperRoot.varsResolver = varsResolver;
StepperRoot.displayName = '@mantine/core/StepperRoot';
