import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  useMantineDefaultProps,
  Selectors,
} from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { Box } from '../Box';
import useStyles, { ColorSwatchStylesParams } from './ColorSwatch.styles';

export type ColorSwatchStylesNames = Selectors<typeof useStyles>;

export interface ColorSwatchProps
  extends DefaultProps<ColorSwatchStylesNames, ColorSwatchStylesParams> {
  /** Swatch color value in any css valid format (hex, rgb, etc.) */
  color: string;

  /** Width, height and border-radius in px */
  size?: number;

  /** Swatch border-radius predefined from theme or number for px value */
  radius?: MantineNumberSize;

  /** ColorSwatch children */
  children?: React.ReactNode;
}

const defaultProps: Partial<ColorSwatchProps> = {
  size: 25,
  radius: 25,
};

export const _ColorSwatch = forwardRef<HTMLDivElement, ColorSwatchProps>((props, ref) => {
  const { color, size, radius, className, children, classNames, styles, unstyled, ...others } =
    useMantineDefaultProps('ColorSwatch', defaultProps, props);
  const { classes, cx } = useStyles(
    { radius, size },
    { classNames, styles, unstyled, name: 'ColorSwatch' }
  );

  return (
    <Box className={cx(classes.root, className)} ref={ref} {...others}>
      <div className={cx(classes.alphaOverlay, classes.overlay)} />
      <div className={cx(classes.shadowOverlay, classes.overlay)} />
      <div className={classes.overlay} style={{ backgroundColor: color }} />
      <div className={cx(classes.children, classes.overlay)}>{children}</div>
    </Box>
  );
});

_ColorSwatch.displayName = '@mantine/core/ColorSwatch';

export const ColorSwatch = createPolymorphicComponent<'div', ColorSwatchProps>(_ColorSwatch);
