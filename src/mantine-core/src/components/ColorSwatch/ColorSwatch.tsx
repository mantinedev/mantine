import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@mantine/styles';
import { Box } from '../Box';
import useStyles from './ColorSwatch.styles';

interface _ColorSwatchProps extends DefaultProps {
  /** Swatch color value in any css valid format (hex, rgb, etc.) */
  color: string;

  /** Width, height and border-radius in px */
  size?: number;

  /** Swatch border-radius predefined from theme or number for px value */
  radius?: MantineNumberSize;
}

export type ColorSwatchProps<C> = PolymorphicComponentProps<C, _ColorSwatchProps>;

type ColorSwatchComponent = (<C = 'div'>(props: ColorSwatchProps<C>) => React.ReactElement) & {
  displayName?: string;
};

export const ColorSwatch: ColorSwatchComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      component,
      color,
      size = 25,
      radius = 25,
      className,
      children,
      classNames,
      styles,
      ...others
    }: ColorSwatchProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles(
      { radius, size },
      { classNames, styles, name: 'ColorSwatch' }
    );

    return (
      <Box<any>
        component={component || 'div'}
        className={cx(classes.root, className)}
        ref={ref}
        {...others}
      >
        <div className={cx(classes.alphaOverlay, classes.overlay)} />
        <div className={cx(classes.shadowOverlay, classes.overlay)} />
        <div className={classes.overlay} style={{ backgroundColor: color }} />
        <div className={cx(classes.children, classes.overlay)}>{children}</div>
      </Box>
    );
  }
);

ColorSwatch.displayName = '@mantine/core/ColorSwatch';
