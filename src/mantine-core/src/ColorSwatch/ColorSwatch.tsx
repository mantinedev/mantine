import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  useComponentDefaultProps,
  Selectors,
} from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { Box } from '../Box';
import useStyles, { ColorSwatchStylesParams } from './ColorSwatch.styles';

export type ColorSwatchStylesNames = Selectors<typeof useStyles>;

export interface ColorSwatchProps
  extends DefaultProps<ColorSwatchStylesNames, ColorSwatchStylesParams> {
  variant?: string;

  /** Swatch background-color in any css valid format (hex, rgb, etc.) */
  color: string;

  /** Width and height */
  size?: number | string;

  /** Key of theme.radius or number to set border-radius in px, 25px by default */
  radius?: MantineNumberSize;

  /** ColorSwatch children */
  children?: React.ReactNode;

  /** Determines whether swatch should have inner shadow */
  withShadow?: boolean;
}

const defaultProps: Partial<ColorSwatchProps> = {
  size: 25,
  radius: 25,
  withShadow: true,
};

export const _ColorSwatch = forwardRef<HTMLDivElement, ColorSwatchProps>((props, ref) => {
  const {
    color,
    size,
    radius,
    className,
    children,
    classNames,
    styles,
    unstyled,
    withShadow,
    variant,
    ...others
  } = useComponentDefaultProps('ColorSwatch', defaultProps, props);

  const { classes, cx } = useStyles(
    { radius, size },
    { classNames, styles, unstyled, name: 'ColorSwatch', size, variant }
  );

  return (
    <Box className={cx(classes.root, className)} ref={ref} {...others}>
      <div className={cx(classes.alphaOverlay, classes.overlay)} />
      {withShadow && <div className={cx(classes.shadowOverlay, classes.overlay)} />}
      <div className={classes.overlay} style={{ backgroundColor: color }} />
      <div className={cx(classes.children, classes.overlay)}>{children}</div>
    </Box>
  );
});

_ColorSwatch.displayName = '@mantine/core/ColorSwatch';

export const ColorSwatch = createPolymorphicComponent<'div', ColorSwatchProps>(_ColorSwatch);
