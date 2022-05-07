import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  PolymorphicComponentProps,
  PolymorphicRef,
  useMantineDefaultProps,
  Selectors,
} from '@mantine/styles';
import { Box } from '../Box';
import useStyles from './ColorSwatch.styles';

export type ColorSwatchStylesNames = Selectors<typeof useStyles>;

interface _ColorSwatchProps extends DefaultProps<ColorSwatchStylesNames> {
  /** Swatch color value in any css valid format (hex, rgb, etc.) */
  color: string;

  /** Width, height and border-radius in px */
  size?: number;

  /** Swatch border-radius predefined from theme or number for px value */
  radius?: MantineNumberSize;

  /** ColorSwatch children */
  children?: React.ReactNode;
}

export type ColorSwatchProps<C> = PolymorphicComponentProps<C, _ColorSwatchProps>;

type ColorSwatchComponent = (<C = 'div'>(props: ColorSwatchProps<C>) => React.ReactElement) & {
  displayName?: string;
};

const defaultProps: Partial<ColorSwatchProps<any>> = {
  size: 25,
  radius: 25,
};

export const ColorSwatch: ColorSwatchComponent = forwardRef(
  (props: ColorSwatchProps<'div'>, ref: PolymorphicRef<'div'>) => {
    const { component, color, size, radius, className, children, classNames, styles, ...others } =
      useMantineDefaultProps('ColorSwatch', defaultProps, props);

    const { classes, cx } = useStyles(
      { radius, size },
      { classNames, styles, name: 'ColorSwatch' }
    );

    return (
      <Box
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
) as any;

ColorSwatch.displayName = '@mantine/core/ColorSwatch';
