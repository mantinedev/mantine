import React from 'react';
import { MantineThemeOverride, useMantineTheme } from '../../../theme';

interface ThumbProps {
  color: string;
  size: number;
  position: { x: number; y: number };
  themeOverride: MantineThemeOverride;
  style?: React.CSSProperties;
}

export function Thumb({ color, size, position, themeOverride, style }: ThumbProps) {
  const theme = useMantineTheme(themeOverride);

  return (
    <div
      style={{
        overflow: 'hidden',
        boxSizing: 'border-box',
        position: 'absolute',
        left: `calc(${position.x * 100}% - ${size / 2}px)`,
        top: `calc(${position.y * 100}% - ${size / 2}px)`,
        border: `2px solid ${theme.white}`,
        width: size,
        height: size,
        borderRadius: size,
        boxShadow: theme.shadows.sm,
        ...style,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 8,
          backgroundImage:
            'linear-gradient(45deg, #eee 25%, transparent 25%), linear-gradient(-45deg, #eee 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #eee 75%), linear-gradient(-45deg, #fff 75%, #eee 75%)',
          backgroundSize: '8px 8px',
          backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // borderRadius: 8,
          backgroundColor: color,
        }}
      />
    </div>
  );
}

Thumb.displayName = '@mantine/core/Thumb';
