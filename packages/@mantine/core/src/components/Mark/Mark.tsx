import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  MantineColor,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { getMarkColor } from './get-mark-color';
import classes from './Mark.module.css';

export type MarkStylesNames = 'root';
export type MarkCssVariables = {
  root: '--mark-bg-dark' | '--mark-bg-light';
};

export interface MarkProps extends BoxProps, StylesApiProps<MarkFactory>, ElementProps<'mark'> {
  /** Key of `theme.colors` or any valid CSS color, `yellow` by default */
  color?: MantineColor;
}

export type MarkFactory = Factory<{
  props: MarkProps;
  ref: HTMLElement;
  stylesNames: MarkStylesNames;
  vars: MarkCssVariables;
}>;

const defaultProps: Partial<MarkProps> = {
  color: 'yellow',
};

const varsResolver = createVarsResolver<MarkFactory>((theme, { color }) => ({
  root: {
    '--mark-bg-dark': getMarkColor({ color, theme, defaultShade: 5 }),
    '--mark-bg-light': getMarkColor({ color, theme, defaultShade: 2 }),
  },
}));

export const Mark = factory<MarkFactory>((_props, ref) => {
  const props = useProps('Mark', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, color, variant, ...others } = props;

  const getStyles = useStyles<MarkFactory>({
    name: 'Mark',
    props,
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return <Box component="mark" ref={ref} variant={variant} {...getStyles('root')} {...others} />;
});

Mark.classes = classes;
Mark.displayName = '@mantine/core/Mark';
