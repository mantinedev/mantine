import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './Typography.module.css';

export type TypographyStylesNames = 'root';

export interface TypographyProps
  extends BoxProps, StylesApiProps<TypographyFactory>, ElementProps<'div'> {}

export type TypographyFactory = Factory<{
  props: TypographyProps;
  ref: HTMLDivElement;
  stylesNames: TypographyStylesNames;
}>;

export const Typography = factory<TypographyFactory>((_props) => {
  const props = useProps('Typography', null, _props);
  const { classNames, className, style, styles, unstyled, attributes, ...others } = props;

  const getStyles = useStyles<TypographyFactory>({
    name: 'Typography',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
  });

  return <Box {...getStyles('root')} {...others} />;
});

Typography.classes = classes;
Typography.displayName = '@mantine/core/Typography';
