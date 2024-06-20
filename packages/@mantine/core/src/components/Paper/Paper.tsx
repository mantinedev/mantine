import {
  Box,
  BoxProps,
  createVarsResolver,
  getRadius,
  getShadow,
  MantineRadius,
  MantineShadow,
  polymorphicFactory,
  PolymorphicFactory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './Paper.module.css';

export type PaperStylesNames = 'root';
export type PaperCssVariables = {
  root: '--paper-radius' | '--paper-shadow';
};

export interface PaperBaseProps {
  /** Key of `theme.shadows` or any valid CSS value to set `box-shadow`, `none` by default */
  shadow?: MantineShadow;

  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
  radius?: MantineRadius;

  /** Determines whether the paper should have border, border color depends on color scheme, `false` by default */
  withBorder?: boolean;
}

export interface PaperProps extends BoxProps, PaperBaseProps, StylesApiProps<PaperFactory> {}

export type PaperFactory = PolymorphicFactory<{
  props: PaperProps;
  defaultComponent: 'div';
  defaultRef: HTMLDivElement;
  stylesNames: PaperStylesNames;
  vars: PaperCssVariables;
}>;

const defaultProps: Partial<PaperProps> = {};

const varsResolver = createVarsResolver<PaperFactory>((_, { radius, shadow }) => ({
  root: {
    '--paper-radius': radius === undefined ? undefined : getRadius(radius),
    '--paper-shadow': getShadow(shadow),
  },
}));

export const Paper = polymorphicFactory<PaperFactory>((_props, ref) => {
  const props = useProps('Paper', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    withBorder,
    vars,
    radius,
    shadow,
    variant,
    mod,
    ...others
  } = props;

  const getStyles = useStyles<PaperFactory>({
    name: 'Paper',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <Box
      ref={ref}
      mod={[{ 'data-with-border': withBorder }, mod]}
      {...getStyles('root')}
      variant={variant}
      {...others}
    />
  );
});

Paper.classes = classes;
Paper.displayName = '@mantine/core/Paper';
