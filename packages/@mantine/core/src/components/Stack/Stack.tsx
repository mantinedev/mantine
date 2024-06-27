import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSpacing,
  MantineSpacing,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './Stack.module.css';

export type StackStylesNames = 'root';
export type StackCssVariables = {
  root: '--stack-gap' | '--stack-align' | '--stack-justify';
};

export interface StackProps extends BoxProps, StylesApiProps<StackFactory>, ElementProps<'div'> {
  /** Key of `theme.spacing` or any valid CSS value to set `gap` property, numbers are converted to rem, `'md'` by default */
  gap?: MantineSpacing;

  /** Controls `align-items` CSS property, `'stretch'` by default */
  align?: React.CSSProperties['alignItems'];

  /** Controls `justify-content` CSS property, `'flex-start'` by default */
  justify?: React.CSSProperties['justifyContent'];
}

export type StackFactory = Factory<{
  props: StackProps;
  ref: HTMLDivElement;
  stylesNames: StackStylesNames;
  vars: StackCssVariables;
}>;

const defaultProps: Partial<StackProps> = {
  gap: 'md',
  align: 'stretch',
  justify: 'flex-start',
};

const varsResolver = createVarsResolver<StackFactory>((_, { gap, align, justify }) => ({
  root: {
    '--stack-gap': getSpacing(gap),
    '--stack-align': align,
    '--stack-justify': justify,
  },
}));

export const Stack = factory<StackFactory>((_props, ref) => {
  const props = useProps('Stack', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    align,
    justify,
    gap,
    variant,
    ...others
  } = props;

  const getStyles = useStyles<StackFactory>({
    name: 'Stack',
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

  return <Box ref={ref} {...getStyles('root')} variant={variant} {...others} />;
});

Stack.classes = classes;
Stack.displayName = '@mantine/core/Stack';
