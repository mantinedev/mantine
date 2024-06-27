import {
  Box,
  BoxProps,
  polymorphicFactory,
  PolymorphicFactory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './Center.module.css';

export type CenterStylesNames = 'root';

export interface CenterProps extends BoxProps, StylesApiProps<CenterFactory> {
  /** Content that should be centered vertically and horizontally */
  children?: React.ReactNode;

  /** Determines whether `inline-flex` should be used instead of `flex`, `false` by default */
  inline?: boolean;
}

export type CenterFactory = PolymorphicFactory<{
  props: CenterProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: CenterStylesNames;
}>;

const defaultProps: Partial<CenterProps> = {};

export const Center = polymorphicFactory<CenterFactory>((_props, ref) => {
  const props = useProps('Center', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, inline, mod, ...others } = props;

  const getStyles = useStyles<CenterFactory>({
    name: 'Center',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
  });

  return <Box ref={ref} mod={[{ inline }, mod]} {...getStyles('root')} {...others} />;
});

Center.classes = classes;
Center.displayName = '@mantine/core/Center';
