import React from 'react';
import cx from 'clsx';
import { ComponentPassThrough } from '../../types';

export interface OverlayProps {
  /** Overlay opacity */
  opacity?: React.CSSProperties['opacity'];

  /** Overlay background-color */
  color?: React.CSSProperties['backgroundColor'];

  /** Overlay z-index */
  zIndex?: React.CSSProperties['zIndex'];
}

export function Overlay<T extends React.ElementType = 'div'>({
  className,
  style,
  opacity = 0.6,
  color = '#fff',
  zIndex = 1000,
  component: Element = 'div',
  ...others
}: ComponentPassThrough<T, OverlayProps>) {
  return (
    <Element
      className={cx('mantine-overlay', className)}
      style={{
        opacity,
        backgroundColor: color,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex,
        ...style,
      }}
      {...others}
    />
  );
}

Overlay.displayName = '@mantine/core/Overlay';
