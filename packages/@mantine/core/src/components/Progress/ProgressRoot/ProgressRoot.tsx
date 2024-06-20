import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  getSize,
  MantineRadius,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../../core';
import { ProgressProvider } from '../Progress.context';
import classes from '../Progress.module.css';

export type ProgressRootStylesNames = 'root' | 'section' | 'label';
export type ProgressRootCssVariables = {
  root: '--progress-size' | '--progress-radius' | '--progress-transition-duration';
};

export interface __ProgressRootProps extends BoxProps, ElementProps<'div'> {
  /** Controls track height, `'md'` by default */
  size?: MantineSize | (string & {}) | number;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
  radius?: MantineRadius;

  /** Determines whether label text color should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
  autoContrast?: boolean;

  /** Controls sections width transition duration, value is specified in ms, `100` by default */
  transitionDuration?: number;
}

export interface ProgressRootProps
  extends __ProgressRootProps,
    StylesApiProps<ProgressRootFactory> {}

export type ProgressRootFactory = Factory<{
  props: ProgressRootProps;
  ref: HTMLDivElement;
  stylesNames: ProgressRootStylesNames;
  vars: ProgressRootCssVariables;
}>;

const defaultProps: Partial<ProgressRootProps> = {};

const varsResolver = createVarsResolver<ProgressRootFactory>(
  (_, { size, radius, transitionDuration }) => ({
    root: {
      '--progress-size': getSize(size, 'progress-size'),
      '--progress-radius': radius === undefined ? undefined : getRadius(radius),
      '--progress-transition-duration':
        typeof transitionDuration === 'number' ? `${transitionDuration}ms` : undefined,
    },
  })
);

export const ProgressRoot = factory<ProgressRootFactory>((_props, ref) => {
  const props = useProps('ProgressRoot', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    autoContrast,
    transitionDuration,
    ...others
  } = props;

  const getStyles = useStyles<ProgressRootFactory>({
    name: 'Progress',
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

  return (
    <ProgressProvider value={{ getStyles, autoContrast }}>
      <Box ref={ref} {...getStyles('root')} {...others} />
    </ProgressProvider>
  );
});

ProgressRoot.classes = classes;
ProgressRoot.displayName = '@mantine/core/ProgressRoot';
