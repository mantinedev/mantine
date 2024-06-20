import {
  Box,
  BoxProps,
  createVarsResolver,
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
import type { MantineLoader, MantineLoadersRecord } from './Loader.types';
import { Bars } from './loaders/Bars';
import { Dots } from './loaders/Dots';
import { Oval } from './loaders/Oval';
import classes from './Loader.module.css';

export type LoaderStylesNames = 'root';
export type LoaderCssVariables = {
  root: '--loader-size' | '--loader-color';
};

export interface LoaderProps
  extends BoxProps,
    StylesApiProps<LoaderFactory>,
    Omit<React.ComponentPropsWithoutRef<'svg'>, keyof BoxProps> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: MantineSize | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: MantineColor;

  /** Loader type, key of `loaders` prop, default value is `'oval'` */
  type?: MantineLoader;

  /** Object of loaders components, can be customized via default props or inline. Default value contains `bars`, `oval` and `dots` */
  loaders?: MantineLoadersRecord;

  /** Overrides default loader with given content */
  children?: React.ReactNode;
}

export type LoaderFactory = Factory<{
  props: LoaderProps;
  ref: HTMLSpanElement;
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

const defaultProps: Partial<LoaderProps> = {
  loaders: defaultLoaders,
  type: 'oval',
};

const varsResolver = createVarsResolver<LoaderFactory>((theme, { size, color }) => ({
  root: {
    '--loader-size': getSize(size, 'loader-size'),
    '--loader-color': color ? getThemeColor(color, theme) : undefined,
  },
}));

export const Loader = factory<LoaderFactory>((_props, ref) => {
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
    vars,
    varsResolver,
  });

  if (children) {
    return (
      <Box {...getStyles('root')} ref={ref as any} {...(others as any)}>
        {children}
      </Box>
    );
  }

  return (
    <Box
      {...getStyles('root')}
      ref={ref}
      component={(loaders as any)[type!]}
      variant={variant}
      size={size}
      {...others}
    />
  );
});

Loader.defaultLoaders = defaultLoaders;
Loader.classes = classes;
Loader.displayName = '@mantine/core/Loader';
