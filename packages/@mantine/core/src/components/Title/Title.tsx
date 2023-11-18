import React from 'react';
import {
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  Box,
  BoxProps,
} from '../../core';
import { getTitleSize } from './get-title-size';
import classes from './Title.module.css';

export type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;
export type TitleSize = `h${TitleOrder}` | React.CSSProperties['fontSize'];

export type TitleStylesNames = 'root';
export type TitleCssVariables = {
  root: '--title-fw' | '--title-lh' | '--title-fz';
};

export interface TitleProps
  extends BoxProps,
    StylesApiProps<TitleFactory>,
    ElementProps<'h1', 'color'> {
  /** Determines which tag will be used (h1-h6), controls `font-size` style if `size` prop is not set, `1` by default */
  order?: TitleOrder;

  /** Changes title size, if not set, then size is controlled by `order` prop */
  size?: TitleSize;
}

export type TitleFactory = Factory<{
  props: TitleProps;
  ref: HTMLHeadingElement;
  stylesNames: TitleStylesNames;
  vars: TitleCssVariables;
}>;

const defaultProps: Partial<TitleProps> = {
  order: 1,
};

const varsResolver = createVarsResolver<TitleFactory>((_, { order, size }) => {
  const sizeVariables = getTitleSize(order!, size);
  return {
    root: {
      '--title-fw': sizeVariables.fontWeight,
      '--title-lh': sizeVariables.lineHeight,
      '--title-fz': sizeVariables.fontSize,
    },
  };
});

export const Title = factory<TitleFactory>((_props, ref) => {
  const props = useProps('Title', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, order, vars, size, variant, ...others } =
    props;

  const getStyles = useStyles<TitleFactory>({
    name: 'Title',
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

  if (![1, 2, 3, 4, 5, 6].includes(order!)) {
    return null;
  }

  return (
    <Box
      {...getStyles('root')}
      component={`h${order!}`}
      variant={variant}
      ref={ref}
      mod={{ order }}
      size={size}
      {...others}
    />
  );
});

Title.classes = classes;
Title.displayName = '@mantine/core/Title';
