import React, { forwardRef } from 'react';
import { useSx, DefaultProps } from '@mantine/styles';
import { Portal } from '../Portal/Portal';

export interface AffixProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Element where portal should be rendered, by default new div element is created and appended to document.body */
  target?: HTMLDivElement;

  /** Root element z-index property */
  zIndex?: number;

  /** Fixed position in px */
  position?: {
    top?: string | number;
    left?: string | number;
    bottom?: string | number;
    right?: string | number;
  };
}

export const Affix = forwardRef<HTMLDivElement, AffixProps>(
  (
    {
      target,
      position = { bottom: 0, right: 0 },
      zIndex = 1000,
      className,
      sx,
      ...others
    }: AffixProps,
    ref
  ) => {
    const { sxClassName, css, cx } = useSx({ className, sx });

    return (
      <Portal zIndex={zIndex} target={target}>
        <div
          className={cx(css({ position: 'fixed', ...position }), sxClassName)}
          ref={ref}
          {...others}
        />
      </Portal>
    );
  }
);

Affix.displayName = '@mantine/core/Affix';
