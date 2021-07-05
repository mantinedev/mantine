import React from 'react';
import { Portal } from '../Portal/Portal';

export interface AffixProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Element where portal should be rendered, by default new div element is created and appended to document.body */
  target?: HTMLDivElement;

  /** Root element z-index property */
  zIndex?: number;

  /** Fixed position in px */
  position?: {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
  };
}

export function Affix({
  target,
  style,
  position = { bottom: 0, right: 0 },
  zIndex = 1000,
  ...others
}: AffixProps) {
  return (
    <Portal zIndex={zIndex} target={target}>
      <div style={{ position: 'fixed', ...position, ...style }} {...others} />
    </Portal>
  );
}

Affix.displayName = '@mantine/core/Affix';
