import React from 'react';
import cx from 'clsx';

interface _OverlayProps<C extends React.ElementType, R extends HTMLElement> {
  /** Root element or custom component */
  component?: C;

  /** Get element ref */
  elementRef?: React.ForwardedRef<R>;

  /** Overlay opacity */
  opacity?: React.CSSProperties['opacity'];

  /** Overlay background-color */
  color?: React.CSSProperties['backgroundColor'];

  /** Use gradient instead of background-color */
  gradient?: string;

  /** Overlay z-index */
  zIndex?: React.CSSProperties['zIndex'];
}

export type OverlayProps<
  C extends React.ElementType = 'div',
  R extends HTMLElement = HTMLDivElement
> = _OverlayProps<C, R> & Omit<React.ComponentPropsWithoutRef<C>, keyof _OverlayProps<C, R>>;

export function Overlay<
  C extends React.ElementType = 'div',
  R extends HTMLElement = HTMLDivElement
>({
  className,
  style,
  opacity = 0.6,
  color = '#fff',
  gradient,
  zIndex = 1000,
  component,
  elementRef,
  ...others
}: OverlayProps<C, R>) {
  const Element = component || 'div';

  const background = gradient ? { backgroundImage: gradient } : { backgroundColor: color };

  return (
    <Element
      className={cx('mantine-overlay', className)}
      ref={elementRef as any}
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

Overlay.displayName = '@mantine/core/Overlay';
