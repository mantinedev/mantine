import {
  Box,
  BoxProps,
  createVarsResolver,
  getRadius,
  MantineRadius,
  polymorphicFactory,
  PolymorphicFactory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './BackgroundImage.module.css';

export type BackgroundImageStylesNames = 'root';
export type BackgroundImageCssVariables = {
  root: '--bi-radius';
};

export interface BackgroundImageProps extends BoxProps, StylesApiProps<BackgroundImageFactory> {
  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `0` by default */
  radius?: MantineRadius;

  /** Image url */
  src: string;
}

export type BackgroundImageFactory = PolymorphicFactory<{
  props: BackgroundImageProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: BackgroundImageStylesNames;
  vars: BackgroundImageCssVariables;
}>;

const defaultProps: Partial<BackgroundImageProps> = {};

const varsResolver = createVarsResolver<BackgroundImageFactory>((_, { radius }) => ({
  root: { '--bi-radius': radius === undefined ? undefined : getRadius(radius) },
}));

export const BackgroundImage = polymorphicFactory<BackgroundImageFactory>((_props, ref) => {
  const props = useProps('BackgroundImage', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, radius, src, variant, ...others } =
    props;

  const getStyles = useStyles<BackgroundImageFactory>({
    name: 'BackgroundImage',
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
      variant={variant}
      {...getStyles('root', { style: { backgroundImage: `url(${src})` } })}
      {...others}
    />
  );
});

BackgroundImage.classes = classes;
BackgroundImage.displayName = '@mantine/core/BackgroundImage';
