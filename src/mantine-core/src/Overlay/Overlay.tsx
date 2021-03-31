import React from 'react';
import { ComponentPassThrough } from '@mantine/types';

interface OverlayProps {
  /** Overlay opacity */
  opacity?: React.CSSProperties['opacity'];

  /** Overlay background-color */
  color?: React.CSSProperties['backgroundColor'];
}

export function Overlay<T extends React.ElementType = 'div'>({
  opacity,
  color = '#fff',
  style,
  component: Element = 'div',
  ...others
}: ComponentPassThrough<T, OverlayProps>) {
  return (
    <Element
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
