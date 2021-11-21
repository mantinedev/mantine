import React from 'react';
import { Portal } from '../../Portal';

export interface PopperContainerProps {
  /** PopperContainer children, for example, modal or popover */
  children: React.ReactNode;

  /** Root element z-index property */
  zIndex?: number;

  /** Root element className */
  className?: string;

  /** Whether to render the target element in a Portal */
  withinPortal?: boolean;
}

export function PopperContainer({
  children,
  zIndex = 1,
  className,
  withinPortal,
}: PopperContainerProps) {
  if (withinPortal) {
    return (
      <Portal className={className} zIndex={zIndex}>
        {children}
      </Portal>
    );
  }

  return (
    <div className={className} style={{ position: 'relative', zIndex }}>
      {children}
    </div>
  );
}

PopperContainer.displayName = '@mantine/core/PopperContainer';
