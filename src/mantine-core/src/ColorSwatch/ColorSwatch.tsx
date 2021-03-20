import React from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, useMantineTheme } from '@mantine/theme';
import useStyles from './ColorSwatch.styles';

interface ColorSwatchProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Swatch color value in any css valid format (hex, rgb, etc.) */
  color: string;

  /** Width, height and border-radius in px */
  size?: number;

  /** Swatch border-radius predefined from theme or number for px value, defaults to size prop */
  radius?: MantineNumberSize;
}

export function ColorSwatch({
  color,
  size = 25,
  style,
  radius = size,
  className,
  ...others
}: ColorSwatchProps) {
  const classes = useStyles({ radius, theme: useMantineTheme() });

  return (
    <div
      className={cx(classes.colorSwatch, className)}
      style={{ width: size, height: size, backgroundColor: color, ...style }}
      data-mantine-composable
      {...others}
    />
  );
}

ColorSwatch.displayName = '@mantine/core/ColorSwatch';
