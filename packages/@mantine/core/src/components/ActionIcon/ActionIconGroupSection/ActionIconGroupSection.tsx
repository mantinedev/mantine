import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getFontSize,
  getRadius,
  getSize,
  MantineGradient,
  MantineRadius,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../../core';
import type { ActionIconVariant } from '../ActionIcon';
import classes from '../ActionIcon.module.css';

export type ActionIconGroupSectionStylesNames = 'groupSection';
export type ActionIconGroupSectionCssVariables = {
  groupSection:
    | '--section-radius'
    | '--section-bg'
    | '--section-color'
    | '--section-bd'
    | '--section-height'
    | '--section-padding-x'
    | '--section-fz';
};

export interface ActionIconGroupSectionProps
  extends BoxProps,
    StylesApiProps<ActionIconGroupSectionFactory>,
    ElementProps<'div'> {
  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** Gradient values used with `variant="gradient"`. @default `theme.defaultGradient` */
  gradient?: MantineGradient;

  /** If set, adjusts text color based on background color for `filled` variant */
  autoContrast?: boolean;

  /** Controls section `height`, `font-size` and horizontal `padding` @default `'sm'` */
  size?: MantineSize | (string & {}) | number;
}

export type ActionIconGroupSectionFactory = Factory<{
  props: ActionIconGroupSectionProps;
  ref: HTMLDivElement;
  stylesNames: ActionIconGroupSectionStylesNames;
  vars: ActionIconGroupSectionCssVariables;
  variant: ActionIconVariant;
}>;

const varsResolver = createVarsResolver<ActionIconGroupSectionFactory>(
  (theme, { radius, color, gradient, variant, autoContrast, size }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || 'filled',
      autoContrast,
    });

    return {
      groupSection: {
        '--section-height': getSize(size, 'section-height'),
        '--section-padding-x': getSize(size, 'section-padding-x'),
        '--section-fz': getFontSize(size),
        '--section-radius': radius === undefined ? undefined : getRadius(radius),
        '--section-bg': color || variant ? colors.background : undefined,
        '--section-color': colors.color,
        '--section-bd': color || variant ? colors.border : undefined,
      },
    };
  }
);

export const ActionIconGroupSection = factory<ActionIconGroupSectionFactory>((_props, ref) => {
  const props = useProps('ActionIconGroupSection', null, _props);
  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    variant,
    gradient,
    radius,
    autoContrast,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<ActionIconGroupSectionFactory>({
    name: 'ActionIconGroupSection',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
    rootSelector: 'groupSection',
  });

  return <Box {...getStyles('groupSection')} ref={ref} variant={variant} {...others} />;
});

ActionIconGroupSection.classes = classes;
ActionIconGroupSection.displayName = '@mantine/core/ActionIconGroupSection';
