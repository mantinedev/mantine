import React, { Children } from 'react';
import { useFloating, Placement } from '@floating-ui/react-dom';

export interface TooltipProps {
  /** Target element */
  children: React.ReactNode;

  /** Tooltip position relative to target element */
  position?: Placement;
}

export function Tooltip({ children, position }: TooltipProps) {
  const { reference } = useFloating({ placement: position });
  console.log(children);
  return <div>Tooltip</div>;
}
