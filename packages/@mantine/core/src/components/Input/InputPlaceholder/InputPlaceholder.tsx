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
  extends BoxProps, StylesApiProps<InputPlaceholderFactory>, ElementProps<'span'> {
  __staticSelector?: string;

  /** If set, the placeholder has error styles @default `false` */
  error?: React.ReactNode;
}

export type InputPlaceholderFactory = Factory<{
  props: InputPlaceholderProps;
  ref: HTMLSpanElement;
  stylesNames: InputPlaceholderStylesNames;
}>;

export const InputPlaceholder = factory<InputPlaceholderFactory>((_props) => {
  const props = useProps('InputPlaceholder', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    error,
    mod,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<InputPlaceholderFactory>({
    name: ['InputPlaceholder', __staticSelector],
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    rootSelector: 'placeholder',
  });

  return (
    <Box
      {...getStyles('placeholder')}
      mod={[{ error: !!error }, mod]}
      component="span"
      {...others}
    />
  );
});

InputPlaceholder.classes = classes;
InputPlaceholder.displayName = '@mantine/core/InputPlaceholder';
