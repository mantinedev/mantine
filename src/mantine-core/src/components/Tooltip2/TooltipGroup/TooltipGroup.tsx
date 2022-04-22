import React from 'react';
import { FloatingDelayGroup } from '@floating-ui/react-dom-interactions';
import { TooltipGroupProvider } from './TooltipGroup.context';

export interface TooltipGroupProps {
  children: React.ReactNode;
}

export function TooltipGroup({ children }: TooltipGroupProps) {
  return (
    <TooltipGroupProvider value>
      <FloatingDelayGroup delay={{ open: 1000, close: 200 }}>{children}</FloatingDelayGroup>
    </TooltipGroupProvider>
  );
}
