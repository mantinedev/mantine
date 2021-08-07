import React from 'react';
import { MantineThemeOverride, useMantineTheme } from '../../../theme';

interface ThumbProps {
  color: string;
  size: number;
  position: { x: number; y: number };
  themeOverride: MantineThemeOverride;
}

export function Thumb({ color, size, position, themeOverride }: ThumbProps) {
  const theme = useMantineTheme(themeOverride);

  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: color,
        left: `calc(${position.x * 100}% - ${size / 2}px)`,
        top: `calc(${position.y * 100}% - ${size / 2}px)`,
        border: `2px solid ${theme.white}`,
        width: size,
        height: size,
        borderRadius: size,
        boxShadow: theme.shadows.sm,
      }}
    />
  );
}

Thumb.displayName = '@mantine/core/Thumb';
