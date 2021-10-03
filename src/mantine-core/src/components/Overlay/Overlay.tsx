import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { PolymorphicComponentProps, PolymorphicRef } from '@mantine/styles';

interface _OverlayProps {
  /** Overlay opacity */
  opacity?: React.CSSProperties['opacity'];

  /** Overlay background-color */
  color?: React.CSSProperties['backgroundColor'];

  /** Use gradient instead of background-color */
  gradient?: string;

  /** Overlay z-index */
  zIndex?: React.CSSProperties['zIndex'];
}

export type OverlayProps<C extends React.ElementType> = PolymorphicComponentProps<C, _OverlayProps>;

type OverlayComponent = <C extends React.ElementType = 'div'>(
  props: OverlayProps<C>
) => React.ReactElement;

export const Overlay: OverlayComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      className,
      style,
      opacity = 0.6,
      color = '#fff',
      gradient,
      zIndex = 1000,
      component,
      ...others
    }: OverlayProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Element = component || 'div';

    const background = gradient ? { backgroundImage: gradient } : { backgroundColor: color };

    return (
      <Element
        className={clsx('mantine-overlay', className)}
        ref={ref}
        style={{
          ...background,
          opacity,
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
);

Overlay.displayName = '@mantine/core/Overlay';
