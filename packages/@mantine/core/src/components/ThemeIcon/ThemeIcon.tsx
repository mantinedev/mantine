import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  getSize,
  MantineColor,
  MantineGradient,
  MantineRadius,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './ThemeIcon.module.css';

export type ThemeIconStylesNames = 'root';
export type ThemeIconVariant =
  | 'filled'
  | 'light'
  | 'outline'
  | 'transparent'
  | 'white'
  | 'default'
  | 'gradient';

export type ThemeIconCssVariables = {
  root: '--ti-radius' | '--ti-size' | '--ti-bg' | '--ti-color' | '--ti-bd';
};

export interface ThemeIconProps
  extends BoxProps, StylesApiProps<ThemeIconFactory>, ElementProps<'div'> {
  /** Controls width and height of the button. Numbers are converted to rem. @default `'md'` */
  size?: MantineSize | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color. @default `theme.primaryColor` */
  color?: MantineColor;

  /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** Gradient data used when `variant="gradient"` @default `theme.defaultGradient` */
  gradient?: MantineGradient;

  /** Icon displayed inside the component */
  children?: React.ReactNode;

  /** If set, adjusts text color based on background color for `filled` variant */
  autoContrast?: boolean;
}

export type ThemeIconFactory = Factory<{
  props: ThemeIconProps;
  ref: HTMLDivElement;
  stylesNames: ThemeIconStylesNames;
  vars: ThemeIconCssVariables;
  variant: ThemeIconVariant;
}>;

const varsResolver = createVarsResolver<ThemeIconFactory>(
  (theme, { size, radius, variant, gradient, color, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || 'filled',
      autoContrast,
    });

    return {
      root: {
        '--ti-size': getSize(size, 'ti-size'),
        '--ti-radius': radius === undefined ? undefined : getRadius(radius),
        '--ti-bg': color || variant ? colors.background : undefined,
        '--ti-color': color || variant ? colors.color : undefined,
        '--ti-bd': color || variant ? colors.border : undefined,
      },
    };
  }
);

export const ThemeIcon = factory<ThemeIconFactory>((_props) => {
  const props = useProps('ThemeIcon', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    autoContrast,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<ThemeIconFactory>({
    name: 'ThemeIcon',
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

  return <Box {...getStyles('root')} {...others} />;
});

ThemeIcon.classes = classes;
ThemeIcon.displayName = '@mantine/core/ThemeIcon';
