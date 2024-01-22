import React from 'react';
import {
  Box,
  BoxProps,
  ElementProps,
  Factory,
  factory,
  MantineSpacing,
  StyleProp,
  StylesApiProps,
  useProps,
  useRandomClassName,
  useStyles,
} from '../../core';
import { SimpleGridVariables } from './SimpleGridVariables';
import classes from './SimpleGrid.module.css';

export type SimpleGridStylesNames = 'root';

export interface SimpleGridProps
  extends BoxProps,
    StylesApiProps<SimpleGridFactory>,
    ElementProps<'div'> {
  /** Number of columns, `1` by default */
  cols?: StyleProp<number>;

  /** Spacing between columns, `'md'` by default */
  spacing?: StyleProp<MantineSpacing>;

  /** Spacing between rows, `'md'` by default */
  verticalSpacing?: StyleProp<MantineSpacing>;
}

export type SimpleGridFactory = Factory<{
  props: SimpleGridProps;
  ref: HTMLDivElement;
  stylesNames: SimpleGridStylesNames;
}>;

const defaultProps: Partial<SimpleGridProps> = {
  cols: 1,
  spacing: 'md',
};

export const SimpleGrid = factory<SimpleGridFactory>((_props, ref) => {
  const props = useProps('SimpleGrid', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    cols,
    verticalSpacing,
    spacing,
    ...others
  } = props;

  const getStyles = useStyles<SimpleGridFactory>({
    name: 'SimpleGrid',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
  });

  const responsiveClassName = useRandomClassName();

  return (
    <>
      <SimpleGridVariables {...props} selector={`.${responsiveClassName}`} />
      <Box ref={ref} {...getStyles('root', { className: responsiveClassName })} {...others} />
    </>
  );
});

SimpleGrid.classes = classes;
SimpleGrid.displayName = '@mantine/core/SimpleGrid';
