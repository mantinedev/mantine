import { Children, cloneElement } from 'react';
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
import { StepperProvider } from './Stepper.context';
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
  | 'stepBody'
  | 'stepLabel'
  | 'stepDescription';

export type StepperCssVariables = {
  root:
    | '--stepper-color'
    | '--stepper-icon-color'
    | '--stepper-icon-size'
    | '--stepper-content-padding'
    | '--stepper-radius'
    | '--stepper-fz'
    | '--stepper-spacing';
};

export interface StepperProps
  extends BoxProps,
    StylesApiProps<StepperFactory>,
    ElementProps<'div'> {
  /** <Stepper.Step /> components */
  children: React.ReactNode;

  /** Called when step is clicked */
  onStepClick?: (stepIndex: number) => void;

  /** Index of the active step */
  active: number;

  /** Step icon, default value is step index + 1 */
  icon?: React.ReactNode | StepFragmentComponent;

  /** Step icon displayed when step is completed, check icon by default */
  completedIcon?: React.ReactNode | StepFragmentComponent;

  /** Step icon displayed when step is in progress, default value is step index + 1 */
  progressIcon?: React.ReactNode | StepFragmentComponent;

  /** Key of `theme.colors` or any valid CSS color, controls colors of active and progress steps, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Controls size of the step icon, by default icon size is inferred from `size` prop */
  iconSize?: number | string;

  /** Key of `theme.spacing` or any valid CSS value to set `padding-top` of the content */
  contentPadding?: MantineSpacing;

  /** Stepper orientation, `'horizontal'` by default */
  orientation?: 'vertical' | 'horizontal';

  /** Icon position relative to the step body, `'left'` by default */
  iconPosition?: 'right' | 'left';

  /** Controls size of various Stepper elements */
  size?: MantineSize;

  /** Key of `theme.radius` or any valid CSS value to set steps border-radius, `"xl"` by default */
  radius?: MantineRadius;

  /** Determines whether next steps can be selected, `true` by default **/
  allowNextStepsSelect?: boolean;

  /** Determines whether steps should wrap to the next line if no space is available, `true` by default */
  wrap?: boolean;

  /** Determines whether icon color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
  autoContrast?: boolean;
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

const defaultProps: Partial<StepperProps> = {
  orientation: 'horizontal',
  iconPosition: 'left',
  allowNextStepsSelect: true,
  wrap: true,
};

const varsResolver = createVarsResolver<StepperFactory>(
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

export const Stepper = factory<StepperFactory>((_props, ref) => {
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
    autoContrast,
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

  return (
    <StepperProvider value={{ getStyles, orientation, iconPosition }}>
      <Box {...getStyles('root')} ref={ref} size={size} {...others}>
        <Box
          {...getStyles('steps')}
          mod={{
            orientation,
            'icon-position': iconPosition,
            wrap: wrap && orientation !== 'vertical',
          }}
        >
          {items}
        </Box>
        {content && <div {...getStyles('content')}>{content}</div>}
      </Box>
    </StepperProvider>
  );
});

Stepper.classes = classes;
Stepper.displayName = '@mantine/core/Stepper';
Stepper.Completed = StepperCompleted;
Stepper.Step = StepperStep;
