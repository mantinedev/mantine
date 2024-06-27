import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getThemeColor,
  MantineColor,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './Code.module.css';

export type CodeStylesNames = 'root';
export type CodeCssVariables = {
  root: '--code-bg';
};

export interface CodeProps extends BoxProps, StylesApiProps<CodeFactory>, ElementProps<'code'> {
  /** Key of `theme.colors` or any valid CSS color, controls `background-color` of the code, by default value is calculated based on color scheme */
  color?: MantineColor;

  /** If set code will be rendered inside `pre`, `false` by default */
  block?: boolean;
}

export type CodeFactory = Factory<{
  props: CodeProps;
  ref: HTMLElement;
  stylesNames: CodeStylesNames;
  vars: CodeCssVariables;
}>;

const defaultProps: Partial<CodeProps> = {};

const varsResolver = createVarsResolver<CodeFactory>((theme, { color }) => ({
  root: {
    '--code-bg': color ? getThemeColor(color, theme) : undefined,
  },
}));

export const Code = factory<CodeFactory>((_props, ref) => {
  const props = useProps('Code', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    block,
    variant,
    mod,
    ...others
  } = props;

  const getStyles = useStyles<CodeFactory>({
    name: 'Code',
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
    <Box<any>
      component={block ? 'pre' : 'code'}
      variant={variant}
      ref={ref}
      mod={[{ block }, mod]}
      {...getStyles('root')}
      {...others}
      dir="ltr"
    />
  );
});

Code.classes = classes;
Code.displayName = '@mantine/core/Code';
