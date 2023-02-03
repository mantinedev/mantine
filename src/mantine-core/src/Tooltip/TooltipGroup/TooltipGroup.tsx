import React from 'react';
import { FloatingDelayGroup } from '@floating-ui/react';
import { TooltipGroupProvider } from './TooltipGroup.context';

export interface TooltipGroupProps {
  /** <Tooltip /> components */
  children: React.ReactNode;

  /** Open delay in ms */
  openDelay?: number;

  /** Close delay in ms */
  closeDelay?: number;
}

export function TooltipGroup({ children, openDelay = 0, closeDelay = 0 }: TooltipGroupProps) {
  return (
    <TooltipGroupProvider value>
      <FloatingDelayGroup delay={{ open: openDelay, close: closeDelay }}>
        {children}
      </FloatingDelayGroup>
    </TooltipGroupProvider>
  );
}

TooltipGroup.displayName = '@mantine/core/TooltipGroup';
