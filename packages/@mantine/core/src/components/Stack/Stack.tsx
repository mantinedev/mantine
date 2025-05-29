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
  /** Key of `theme.spacing` or any valid CSS value to set `gap` property, numbers are converted to rem @default `'md'` */
  gap?: MantineSpacing;

  /** Controls `align-items` CSS property @default `'stretch'` */
  align?: React.CSSProperties['alignItems'];

  /** Controls `justify-content` CSS property @default `'flex-start'` */
  justify?: React.CSSProperties['justifyContent'];
}

export type StackFactory = Factory<{
  props: StackProps;
  ref: HTMLDivElement;
  stylesNames: StackStylesNames;
  vars: StackCssVariables;
}>;

const defaultProps = {
  gap: 'md',
  align: 'stretch',
  justify: 'flex-start',
} satisfies Partial<StackProps>;

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
    attributes,
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
    attributes,
    vars,
    varsResolver,
  });

  return <Box ref={ref} {...getStyles('root')} variant={variant} {...others} />;
});

Stack.classes = classes;
Stack.displayName = '@mantine/core/Stack';
