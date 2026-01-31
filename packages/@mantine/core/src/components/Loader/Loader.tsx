import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSize,
  getThemeColor,
  MantineColor,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './Loader.module.css';
import type { MantineLoader, MantineLoadersRecord } from './Loader.types';
import { Bars } from './loaders/Bars';
import { Dots } from './loaders/Dots';
import { Oval } from './loaders/Oval';

export type LoaderStylesNames = 'root';
export type LoaderCssVariables = {
  root: '--loader-size' | '--loader-color';
};

export interface LoaderProps
  extends BoxProps, StylesApiProps<LoaderFactory>, ElementProps<'svg', 'display' | 'opacity'> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. @default 'md' */
  size?: MantineSize | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color @default theme.primaryColor */
  color?: MantineColor;

  /** Loader type, key of `loaders` prop @default 'oval' */
  type?: MantineLoader;

  /** Object of loaders components, can be customized via default props or inline. */
  loaders?: MantineLoadersRecord;

  /** Overrides default loader with given content */
  children?: React.ReactNode;
}

export type LoaderFactory = Factory<{
  props: LoaderProps;
  ref: SVGSVGElement;
  stylesNames: LoaderStylesNames;
  vars: LoaderCssVariables;
  staticComponents: {
    defaultLoaders: typeof defaultLoaders;
  };
}>;

export const defaultLoaders: MantineLoadersRecord = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
};

const defaultProps = {
  loaders: defaultLoaders,
  type: 'oval',
} satisfies Partial<LoaderProps>;

const varsResolver = createVarsResolver<LoaderFactory>((theme, { size, color }) => ({
  root: {
    '--loader-size': getSize(size, 'loader-size'),
    '--loader-color': color ? getThemeColor(color, theme) : undefined,
  },
}));

export const Loader = factory<LoaderFactory>((_props) => {
  const props = useProps('Loader', defaultProps, _props);
  const {
    size,
    color,
    type,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    loaders,
    variant,
    children,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<LoaderFactory>({
    name: 'Loader',
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
  });

  if (children) {
    return (
      <Box {...getStyles('root')} {...(others as any)}>
        {children}
      </Box>
    );
  }

  return (
    <Box
      {...getStyles('root')}
      component={loaders[type]}
      variant={variant}
      size={size}
      {...others}
    />
  );
});

Loader.defaultLoaders = defaultLoaders;
Loader.classes = classes;
Loader.varsResolver = varsResolver;
Loader.displayName = '@mantine/core/Loader';
