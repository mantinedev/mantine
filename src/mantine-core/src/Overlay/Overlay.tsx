import React from 'react';

interface OverlayProps extends React.HTMLProps<HTMLDivElement> {
  opacity?: number;
  color?: string;
}

export default function Overlay({ opacity, color = '#fff', style, ...others }: OverlayProps) {
  return (
    <div
      style={{
        opacity,
        backgroundColor: color,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        ...style,
      }}
      {...others}
    />
  );
}

Overlay.displayName = '@mantine/core/Overlay';
