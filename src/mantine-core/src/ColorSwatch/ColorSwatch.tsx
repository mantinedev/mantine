import React from 'react';
import { DefaultProps } from '@mantine/theme';

interface ColorSwatchProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  color: string;

  /** Width, height and border-radius in px */
  size?: number;
}

export function ColorSwatch({ color, size = 25, style, ...others }: ColorSwatchProps) {
  return (
    <div
      style={{ width: size, height: size, borderRadius: size, backgroundColor: color, ...style }}
      data-mantine-composable
      {...others}
    />
  );
}

ColorSwatch.displayName = '@mantine/core/ColorSwatch';
