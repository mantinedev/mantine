import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../../core';
import classes from '../Input.module.css';

export type InputPlaceholderStylesNames = 'placeholder';

export interface InputPlaceholderProps
  extends BoxProps,
    StylesApiProps<InputPlaceholderFactory>,
    ElementProps<'span'> {
  __staticSelector?: string;

  /** If set, the placeholder will have error styles, `false` by default */
  error?: React.ReactNode;
}

export type InputPlaceholderFactory = Factory<{
  props: InputPlaceholderProps;
  ref: HTMLSpanElement;
  stylesNames: InputPlaceholderStylesNames;
}>;

const defaultProps: Partial<InputPlaceholderProps> = {};

export const InputPlaceholder = factory<InputPlaceholderFactory>((_props, ref) => {
  const props = useProps('InputPlaceholder', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    variant,
    error,
    mod,
    ...others
  } = useProps('InputPlaceholder', defaultProps, props);

  const getStyles = useStyles<InputPlaceholderFactory>({
    name: ['InputPlaceholder', __staticSelector],
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: 'placeholder',
  });

  return (
    <Box
      {...getStyles('placeholder')}
      mod={[{ error: !!error }, mod]}
      component="span"
      variant={variant}
      ref={ref}
      {...others}
    />
  );
});

InputPlaceholder.classes = classes;
InputPlaceholder.displayName = '@mantine/core/InputPlaceholder';
