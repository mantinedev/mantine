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
  /** Controls track height @default `'md'` */
  size?: MantineSize | (string & {}) | number;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** If set, adjusts text color based on background color for `filled` variant */
  autoContrast?: boolean;

  /** Controls sections width transition duration, value is specified in ms @default `100` */
  transitionDuration?: number;

  /** Controls orientation @default `'horizontal'` */
  orientation?: 'horizontal' | 'vertical';
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
  const props = useProps('ProgressRoot', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    autoContrast,
    transitionDuration,
    orientation,
    attributes,
    mod,
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
    attributes,
    vars,
    varsResolver,
  });

  return (
    <ProgressProvider value={{ getStyles, autoContrast }}>
      <Box ref={ref} mod={[{ orientation }, mod]} {...getStyles('root')} {...others} />
    </ProgressProvider>
  );
});

ProgressRoot.classes = classes;
ProgressRoot.displayName = '@mantine/core/ProgressRoot';
